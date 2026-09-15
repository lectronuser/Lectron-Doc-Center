#!/usr/bin/env bash
# cam1-autodetect.sh — Auto-detect and configure CSI cameras on custom CM5 CAM1 port
# Generates device tree overlays for any RPi-supported camera targeting
# i2c_csi_dsi1 / csi1 (the second camera port).
#
# Usage:
#   sudo ./cam1-autodetect.sh              # auto-detect via I2C probe
#   sudo ./cam1-autodetect.sh imx219       # manually specify camera
#   sudo ./cam1-autodetect.sh --list       # list supported cameras
#   sudo ./cam1-autodetect.sh --clean      # remove installed overlays

set -euo pipefail

OVERLAY_DIR="/boot/firmware/overlays"
OVERLAY_PREFIX="cam1-auto"
CONFIG_FILE="/boot/firmware/config.txt"
CONFIG_TAG="# cam1-autodetect managed"

# ──────────────────────────────────────────────────────────────
# Camera database
#   Each entry: NAME|COMPATIBLE|I2C_ADDR|DATA_LANES|LINK_FREQ|CLOCK_NAME|SUPPLY_NAMES|EXTRA_PROPS|CHIP_ID_REG|CHIP_ID_VALUE
#
#   CLOCK_NAME:   driver-expected clock-names property (xclk, inclk, xvclk, etc.)
#   SUPPLY_NAMES: comma-separated list of supply property names
#   EXTRA_PROPS:  semicolon-separated key=value DTS properties
#   CHIP_ID_REG:  register to read for auto-detection (hex, 2 bytes)
#   CHIP_ID_VALUE: expected value (hex, compared with mask)
# ──────────────────────────────────────────────────────────────
CAMERAS=(
  "imx219|sony,imx219|0x10|1 2|456000000|xclk|VANA,VDIG,VDDL|rotation=<0x00>;orientation=<0x02>|0x0000|0x0219"
  "imx477|sony,imx477|0x1a|1 2|450000000|xclk|VANA,VDIG,VDDL|rotation=<0x00>;orientation=<0x02>|0x0016|0x0477"
  "imx708|sony,imx708|0x1a|1 2|450000000|inclk|VANA1,VANA2,VDIG,VDDL|rotation=<0x00>;orientation=<0x02>|0x0000|0x0708"
  "imx296|sony,imx296|0x1a|1|297000000|xclk|VANA,VDIG,VDDL|rotation=<0x00>;orientation=<0x02>|0x3000|0x0"
  "imx500|sony,imx500|0x1a|1 2|450000000|inclk|VANA1,VANA2,VDIG,VDDL|rotation=<0x00>;orientation=<0x02>|0x0016|0x0500"
  "ov5647|ovti,ov5647|0x36|1 2|297000000|xclk|avdd,dovdd,dvdd|rotation=<0x00>;orientation=<0x02>|0x300a|0x5647"
  "ov7251|ovti,ov7251|0x60|1|240000000|xclk|vdda,vdddo,vddd|rotation=<0x00>;orientation=<0x02>;clock-frequency=<0x16e3600>|0x300a|0x7750"
  "ov9281|ovti,ov9281|0x60|1 2|400000000|xvclk|avdd,dovdd,dvdd|rotation=<0x00>;orientation=<0x02>|0x300a|0x9281"
  "imx258|sony,imx258|0x10|1 2|320000000|clk|VANA,VDIG,VDDL|rotation=<0x00>;orientation=<0x02>|0x0016|0x0258"
  "imx462|sony,imx462|0x1a|1 2|445500000|xclk|VANA,VDIG,VDDL|rotation=<0x00>;orientation=<0x02>|0x3008|0x00"
)

# Known I2C addresses to scan → camera candidates at that address
declare -A ADDR_TO_CAMS
ADDR_TO_CAMS=(
  ["0x10"]="imx219 imx258"
  ["0x1a"]="imx477 imx708 imx296 imx500 imx462"
  ["0x36"]="ov5647"
  ["0x60"]="ov7251 ov9281"
)

# ──────────────────────────────────────────────────────────────
# Helpers
# ──────────────────────────────────────────────────────────────

log()  { echo -e "\033[1;32m[cam1]\033[0m $*"; }
warn() { echo -e "\033[1;33m[cam1]\033[0m $*" >&2; }
die()  { echo -e "\033[1;31m[cam1]\033[0m $*" >&2; exit 1; }

get_cam_field() {
  local name="$1" field="$2"
  for entry in "${CAMERAS[@]}"; do
    IFS='|' read -r cname compat addr lanes linkfreq clockname supplies extras chidreg chidval <<< "$entry"
    if [[ "$cname" == "$name" ]]; then
      case "$field" in
        name)       echo "$cname" ;;
        compatible) echo "$compat" ;;
        addr)       echo "$addr" ;;
        lanes)      echo "$lanes" ;;
        linkfreq)   echo "$linkfreq" ;;
        clockname)  echo "$clockname" ;;
        supplies)   echo "$supplies" ;;
        extras)     echo "$extras" ;;
        chidreg)    echo "$chidreg" ;;
        chidval)    echo "$chidval" ;;
      esac
      return 0
    fi
  done
  return 1
}

list_cameras() {
  echo "Supported cameras for CAM1 auto-configuration:"
  echo ""
  printf "  %-12s %-18s %-8s %-10s %s\n" "NAME" "COMPATIBLE" "I2C" "LANES" "DESCRIPTION"
  printf "  %-12s %-18s %-8s %-10s %s\n" "----" "----------" "---" "-----" "-----------"
  printf "  %-12s %-18s %-8s %-10s %s\n" "imx219"  "sony,imx219"  "0x10" "2-lane" "Camera Module v2"
  printf "  %-12s %-18s %-8s %-10s %s\n" "imx477"  "sony,imx477"  "0x1a" "2-lane" "HQ Camera"
  printf "  %-12s %-18s %-8s %-10s %s\n" "imx708"  "sony,imx708"  "0x1a" "2-lane" "Camera Module v3"
  printf "  %-12s %-18s %-8s %-10s %s\n" "imx296"  "sony,imx296"  "0x1a" "1-lane" "Global Shutter Camera"
  printf "  %-12s %-18s %-8s %-10s %s\n" "imx500"  "sony,imx500"  "0x1a" "2-lane" "AI Camera Module"
  printf "  %-12s %-18s %-8s %-10s %s\n" "ov5647"  "ovti,ov5647"  "0x36" "2-lane" "Camera Module v1"
  printf "  %-12s %-18s %-8s %-10s %s\n" "ov7251"  "ovti,ov7251"  "0x60" "2-lane" "NoIR v2 (IR)"
  printf "  %-12s %-18s %-8s %-10s %s\n" "ov9281"  "ovti,ov9281"  "0x60" "2-lane" "Global Shutter (wide)"
  printf "  %-12s %-18s %-8s %-10s %s\n" "imx258"  "sony,imx258"  "0x10" "2-lane" "13MP AF Module"
  printf "  %-12s %-18s %-8s %-10s %s\n" "imx462"  "sony,imx462"  "0x1a" "2-lane" "Starlight Module"
}

# ──────────────────────────────────────────────────────────────
# Generate DTS for a camera on CAM1
# ──────────────────────────────────────────────────────────────

generate_dts() {
  local cam_name="$1"

  local compat addr lanes linkfreq clockname supplies extras
  compat=$(get_cam_field "$cam_name" compatible)   || die "Unknown camera: $cam_name"
  addr=$(get_cam_field "$cam_name" addr)
  lanes=$(get_cam_field "$cam_name" lanes)
  linkfreq=$(get_cam_field "$cam_name" linkfreq)
  clockname=$(get_cam_field "$cam_name" clockname)
  supplies=$(get_cam_field "$cam_name" supplies)
  extras=$(get_cam_field "$cam_name" extras)

  # Build data-lanes property: <0x01 0x02> for 2-lane, <0x01> for 1-lane
  local lane_cells=""
  for l in $lanes; do
    lane_cells+="0x$(printf '%02x' "$l") "
  done
  lane_cells="${lane_cells% }"

  local addr_hex="${addr#0x}"
  local node_path="/fragment@100/__overlay__/${cam_name}@${addr_hex}"

  # Build supply properties and fixup string
  local supply_props=""
  local supply_fixup=""
  IFS=',' read -ra sup_arr <<< "$supplies"
  local first=1
  for s in "${sup_arr[@]}"; do
    supply_props+="                        ${s}-supply = <0xffffffff>;\n"
    if [[ "$first" -eq 1 ]]; then
      supply_fixup="${node_path}:${s}-supply:0"
      first=0
    else
      supply_fixup+="\\0${node_path}:${s}-supply:0"
    fi
  done

  # Build extra properties
  local extra_props=""
  if [[ -n "$extras" ]]; then
    IFS=';' read -ra ext_arr <<< "$extras"
    for e in "${ext_arr[@]}"; do
      [[ -z "$e" ]] && continue
      local key="${e%%=*}"
      local val="${e#*=}"
      extra_props+="                        ${key} = ${val};\n"
    done
  fi

  cat << DTEOF
/dts-v1/;
/plugin/;
/ {
    compatible = "brcm,bcm2835";

    /* Enable I2C interface for camera port */
    fragment@0 {
        target = <0xffffffff>;
        __overlay__ { status = "okay"; };
    };

    /* Enable and configure CAM1 clock */
    fragment@1 {
        target = <0xffffffff>;
        __overlay__ {
            status = "okay";
            clock-frequency = <0x16e3600>;  /* 24 MHz */
        };
    };

    /* Enable I2C mux */
    fragment@2 {
        target = <0xffffffff>;
        __overlay__ { status = "okay"; };
    };

    /* Camera sensor node on I2C bus */
    fragment@100 {
        target = <0xffffffff>;
        __overlay__ {
            #address-cells = <0x01>;
            #size-cells = <0x00>;
            status = "okay";

            ${cam_name}@${addr_hex} {
                compatible = "${compat}";
                reg = <${addr}>;
                status = "okay";
                clocks = <0xffffffff>;
                clock-names = "${clockname}";
$(echo -e "$supply_props")$(echo -e "$extra_props")
                phandle = <0x03>;

                port {
                    endpoint {
                        clock-lanes = <0x00>;
                        data-lanes = <${lane_cells}>;
                        clock-noncontinuous;
                        link-frequencies = /bits/ 64 <${linkfreq}>;
                        remote-endpoint = <0x01>;
                        phandle = <0x02>;
                    };
                };
            };
        };
    };

    /* CSI1 receiver node */
    fragment@101 {
        target = <0xffffffff>;
        __overlay__ {
            status = "okay";
            brcm,media-controller;

            port {
                endpoint {
                    remote-endpoint = <0x02>;
                    clock-lanes = <0x00>;
                    data-lanes = <${lane_cells}>;
                    clock-noncontinuous;
                    phandle = <0x01>;
                };
            };
        };
    };

    __fixups__ {
        i2c0if      = "/fragment@0:target:0";
        cam1_clk    = "/fragment@1:target:0\\0${node_path}:clocks:0";
        i2c0mux     = "/fragment@2:target:0";
        i2c_csi_dsi1 = "/fragment@100:target:0";
        cam_dummy_reg = "${supply_fixup}";
        csi1        = "/fragment@101:target:0";
    };

    __local_fixups__ {
        fragment@100 {
            __overlay__ {
                ${cam_name}@${addr_hex} {
                    port {
                        endpoint {
                            remote-endpoint = <0x00>;
                        };
                    };
                };
            };
        };
        fragment@101 {
            __overlay__ {
                port {
                    endpoint {
                        remote-endpoint = <0x00>;
                    };
                };
            };
        };
    };
};
DTEOF
}

# ──────────────────────────────────────────────────────────────
# I2C auto-detection
# ──────────────────────────────────────────────────────────────

find_cam1_i2c_bus() {
  # Try to find the I2C bus for CSI1/DSI1 port
  # Common bus numbers on CM5: 0, 10, 11, or look in /sys
  local bus=""

  # Method 1: check for i2c_csi_dsi1 alias in devicetree
  if [[ -d /proc/device-tree/aliases ]]; then
    for alias_file in /proc/device-tree/aliases/i2c_csi_dsi1 \
                      /proc/device-tree/aliases/i2c_csi_dsi \
                      /proc/device-tree/__symbols__/i2c_csi_dsi1; do
      if [[ -f "$alias_file" ]]; then
        local path
        path=$(tr -d '\0' < "$alias_file")
        # Extract adapter number from /sys
        for adapter in /sys/bus/i2c/devices/i2c-*; do
          local of_node="${adapter}/of_node"
          if [[ -L "$of_node" ]] && readlink -f "$of_node" | grep -q "${path##*/}"; then
            bus="${adapter##*i2c-}"
            break 2
          fi
        done
      fi
    done
  fi

  # Method 2: scan likely bus numbers
  if [[ -z "$bus" ]]; then
    for candidate in 0 10 11 4 6; do
      if [[ -e "/dev/i2c-${candidate}" ]]; then
        # Quick check: does this bus have any camera-address devices?
        local scan
        scan=$(i2cdetect -y "$candidate" 2>/dev/null || true)
        for known_addr in 10 1a 36 60; do
          if echo "$scan" | grep -qw "$known_addr"; then
            bus="$candidate"
            break 2
          fi
        done
      fi
    done
  fi

  echo "$bus"
}

detect_camera() {
  command -v i2cdetect >/dev/null 2>&1 || die "i2c-tools not installed. Run: sudo apt install i2c-tools"

  local bus
  bus=$(find_cam1_i2c_bus)
  [[ -z "$bus" ]] && die "Could not find I2C bus for CAM1 port. Is the camera connected?\n  Tip: ensure i2c0mux overlay is loaded, or specify camera manually."

  log "Scanning I2C bus $bus for cameras..."

  local scan
  scan=$(i2cdetect -y "$bus" 2>/dev/null) || die "Cannot scan I2C bus $bus"

  local detected=""
  local detected_addr=""

  for known_addr in 10 1a 36 60; do
    if echo "$scan" | grep -qw "$known_addr"; then
      detected_addr="0x${known_addr}"
      log "Found device at address $detected_addr on bus $bus"

      local candidates="${ADDR_TO_CAMS[$detected_addr]:-}"
      if [[ -z "$candidates" ]]; then
        warn "Unknown device at $detected_addr"
        continue
      fi

      local cam_count
      cam_count=$(echo "$candidates" | wc -w)

      if [[ "$cam_count" -eq 1 ]]; then
        detected="$candidates"
        break
      fi

      # Multiple cameras share this address — try chip ID register
      log "Multiple cameras possible at $detected_addr ($candidates), trying chip ID..."
      for cam in $candidates; do
        local chidreg chidval
        chidreg=$(get_cam_field "$cam" chidreg)
        chidval=$(get_cam_field "$cam" chidval)

        if [[ "$chidval" == "0x0" || "$chidval" == "0x00" ]]; then
          continue  # No reliable chip ID for this sensor
        fi

        # Read 2 bytes from the chip ID register
        local reg_hi reg_lo read_val
        local reg_int=$((chidreg))
        local reg_byte_hi=$(( (reg_int >> 8) & 0xFF ))
        local reg_byte_lo=$(( reg_int & 0xFF ))
        local i2c_addr_int=$((detected_addr))

        # Write register address then read 2 bytes
        read_val=$(i2ctransfer -y "$bus" \
          w2@"$i2c_addr_int" "0x$(printf '%02x' $reg_byte_hi)" "0x$(printf '%02x' $reg_byte_lo)" \
          r2 2>/dev/null) || continue

        # Parse "0xHH 0xLL" response
        local hi lo val
        hi=$(echo "$read_val" | awk '{print $1}')
        lo=$(echo "$read_val" | awk '{print $2}')
        val=$(( hi * 256 + lo ))
        local expected=$((chidval))

        if [[ "$val" -eq "$expected" ]]; then
          log "Chip ID 0x$(printf '%04x' $val) matches $cam"
          detected="$cam"
          break
        fi
      done

      # If chip ID didn't match, take the first candidate as a guess
      if [[ -z "$detected" ]]; then
        detected=$(echo "$candidates" | awk '{print $1}')
        warn "Could not confirm chip ID, best guess: $detected"
      fi
      break
    fi
  done

  if [[ -z "$detected" ]]; then
    die "No camera detected on I2C bus $bus.\n  Known addresses scanned: 0x10, 0x1a, 0x36, 0x60"
  fi

  echo "$detected"
}

# ──────────────────────────────────────────────────────────────
# Install / uninstall
# ──────────────────────────────────────────────────────────────

install_overlay() {
  local cam_name="$1"
  local overlay_name="${OVERLAY_PREFIX}-${cam_name}"
  local dts_tmp="/tmp/${overlay_name}.dts"
  local dtbo_path="${OVERLAY_DIR}/${overlay_name}.dtbo"

  log "Generating DTS for $cam_name → $dts_tmp"
  generate_dts "$cam_name" > "$dts_tmp"

  log "Compiling overlay..."
  dtc -@ -I dts -O dtb -o "$dtbo_path" "$dts_tmp" 2>/dev/null \
    || dtc -I dts -O dtb -o "$dtbo_path" "$dts_tmp" \
    || die "dtc compilation failed. Is device-tree-compiler installed?"

  log "Installed: $dtbo_path"

  # Update config.txt
  local dtoverlay_line="dtoverlay=${overlay_name}"
  if grep -qF "$dtoverlay_line" "$CONFIG_FILE" 2>/dev/null; then
    log "config.txt already has $dtoverlay_line"
  else
    log "Adding $dtoverlay_line to $CONFIG_FILE"
    echo "" >> "$CONFIG_FILE"
    echo "${CONFIG_TAG}" >> "$CONFIG_FILE"
    echo "$dtoverlay_line" >> "$CONFIG_FILE"
  fi

  log "Done! Camera: $cam_name"
  log "Reboot to activate, then test with: libcamera-hello --camera 1"
}

clean_overlays() {
  log "Removing cam1-auto overlays..."
  rm -f "${OVERLAY_DIR}/${OVERLAY_PREFIX}-"*.dtbo
  # Remove managed lines from config.txt
  if [[ -f "$CONFIG_FILE" ]]; then
    sed -i "/${CONFIG_TAG}/d" "$CONFIG_FILE"
    sed -i "/dtoverlay=${OVERLAY_PREFIX}-/d" "$CONFIG_FILE"
  fi
  log "Cleaned up."
}

# ──────────────────────────────────────────────────────────────
# Main
# ──────────────────────────────────────────────────────────────

[[ "$(id -u)" -eq 0 ]] || die "Must run as root (sudo)"

case "${1:-}" in
  --list|-l)
    list_cameras
    exit 0
    ;;
  --clean|-c)
    clean_overlays
    exit 0
    ;;
  --help|-h)
    echo "Usage: sudo $0 [camera_name|--list|--clean|--help]"
    echo ""
    echo "  (no args)     Auto-detect camera via I2C and install overlay"
    echo "  camera_name   Install overlay for specified camera (e.g. imx219)"
    echo "  --list        Show supported cameras"
    echo "  --clean       Remove all auto-installed overlays"
    echo "  --help        This help"
    exit 0
    ;;
  "")
    log "Auto-detecting camera on CAM1 port..."
    CAM=$(detect_camera)
    log "Detected: $CAM"
    install_overlay "$CAM"
    ;;
  *)
    CAM="$1"
    get_cam_field "$CAM" name >/dev/null 2>&1 || die "Unknown camera: $CAM\nRun $0 --list to see supported cameras."
    install_overlay "$CAM"
    ;;
esac
