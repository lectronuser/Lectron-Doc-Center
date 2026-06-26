
# CAM1 Port Setup Guide

**Second CSI Camera Configuration — Lectron PI5 Autopilot (CM5 Carrier Board)**

| | |
| :-- | :-- |
| **Board Model** | Lectron PI5 Autopilot |
| **MIPI Connectors** | 22-pin FPC (SFV22R-2STE1HLF) |
| **Supported Module** | Raspberry Pi Compute Module 5 |

---

## **Overview**

The Lectron PI5 Autopilot carrier board provides two MIPI CSI-2 camera ports for the Raspberry Pi Compute Module 5. The first port (**CAM0**) works with standard Raspberry Pi camera overlays. The second port (**CAM1**) uses a dedicated I2C bus and CSI receiver that requires a custom device tree overlay.

This guide covers how to configure the CAM1 port using the provided `cam1_autodetect.sh` script, which automatically generates and installs the correct device tree overlay for any supported Raspberry Pi camera module.

---

## **Board Configuration**

| Parameter | Value |
| :-------- | :---- |
| Module | Raspberry Pi Compute Module 5 (CM5) |
| Carrier Board | Lectron PI5 Autopilot |
| MIPI Connectors | 2 × 22-pin FPC (SFV22R-2STE1HLF) |
| Camera Support | 10 Raspberry Pi–compatible camera modules |
| OS | Ubuntu 24.04 |

### **CAM0 Port (MIPI0)**
The primary camera port uses dedicated CM5 I2C pins and works with standard Raspberry Pi camera overlays out of the box.

| Signal | Pin | RP1 Controller | Linux I2C Bus |
| :----- | :-: | :------------- | :------------ |
| CM5_SDA0 | 22 | i2c@88000 (rp1_i2c6) | i2c-10 |
| CM5_SCL0 | 21 | i2c@88000 (rp1_i2c6) | i2c-10 |
| MIPI0 Data | 1–15 | csi@110000 | — |

### **CAM1 Port (MIPI1)**
The secondary camera port uses the `ID_SC`/`ID_SD` I2C pins routed through a dedicated RP1 I2C controller. This port requires a custom device tree overlay, which the `cam1_autodetect.sh` script generates automatically.

| Signal | Pin | RP1 Controller | Linux I2C Bus |
| :----- | :-: | :------------- | :------------ |
| ID_SD | 20 | i2c@70000 (rp1_i2c0) | i2c-0 |
| ID_SC | 19 | i2c@70000 (rp1_i2c0) | i2c-0 |
| MIPI1 Data | 1–15 | csi@128000 | — |

!!! note "Info"
    Both connectors include 2.2 kΩ I2C pull-up resistors to `CM5_3V3_OUTPUT` and ESD protection.

---

## **Supported Cameras**

The `cam1_autodetect.sh` script supports the following camera modules on the CAM1 port:

| ID | Description | Resolution | Lanes | Compatible | Tested |
| :----- | :---------- | :--------- | :---- | :--------- | :----: |
| `imx219` | Camera Module v2 | 8 MP | 2-lane | `sony,imx219` | ✅ |
| `imx477` | HQ Camera | 12.3 MP | 2-lane | `sony,imx477` | ❌ |
| `imx708` | Camera Module v3 | 12 MP | 2-lane | `sony,imx708` | ✅ |
| `imx296` | Global Shutter Camera | 1.6 MP | 1-lane | `sony,imx296` | ❌ |
| `imx500` | AI Camera Module | 12.3 MP | 2-lane | `sony,imx500` | ❌ |
| `ov5647` | Camera Module v1 | 5 MP | 2-lane | `ovti,ov5647` | ❌ |
| `ov7251` | NoIR v2 (IR) | 0.3 MP | 1-lane | `ovti,ov7251` | ✅ |
| `ov9281` | Global Shutter (wide) | 1 MP | 2-lane | `ovti,ov9281` | ✅ |
| `imx258` | 13 MP AF Module | 13 MP | 2-lane | `sony,imx258` | ❌ |
| `imx462` | Starlight Module | 2.1 MP | 2-lane | `sony,imx462` | ❌ |

---

## **Prerequisites**

Install the required packages before running the setup script:

```bash
sudo apt install i2c-tools device-tree-compiler git
```

Ensure `camera_auto_detect` is disabled in `/boot/firmware/config.txt`:

```ini
#camera_auto_detect=1
```

---

## **Downloading the Setup Script**

The `cam1_autodetect.sh` script is available from the Lectron GitHub repository.

=== "Download only the script"

    ```bash
    wget https://github.com/lectronuser/lectron-public/blob/main/cam1_autodetect.sh
    chmod +x cam1_autodetect.sh
    ```
---

## **Setting Up the CAM1 Port**

### **Script Usage**
The `cam1_autodetect.sh` script generates, compiles, and installs the correct device tree overlay for any supported camera on the CAM1 port.

| Command | Description |
| :------ | :---------- |
| `sudo ./cam1_autodetect.sh` | Auto-detect camera via I2C and install overlay |
| `sudo ./cam1_autodetect.sh imx219` | Install overlay for a specific camera |
| `sudo ./cam1_autodetect.sh --list` | Show all supported cameras |
| `sudo ./cam1_autodetect.sh --clean` | Remove all auto-installed overlays |

### **Step-by-Step Setup**
Follow these steps to configure a camera on the CAM1 port.

**Step 1 — Configure CAM0 (if using dual cameras)**

If you are using a camera on CAM0 as well, add the standard overlay to `/boot/firmware/config.txt` with the `cam0` parameter:

```ini
dtoverlay=imx219,cam0
```

!!! warning "Note"
    Replace `imx219` with your CAM0 camera model. The `cam0` parameter is **required** to avoid conflicts with the CAM1 overlay.

**Step 2 — Run the setup script for CAM1**

Connect your camera to the CAM1 port and run the script, specifying the camera model:

```bash
sudo ./cam1_autodetect.sh imx708
```

The script will generate the device tree source, compile it, install the overlay to `/boot/firmware/overlays/`, and add the `dtoverlay` entry to `/boot/firmware/config.txt`.

**Step 3 — Reboot**

```bash
sudo reboot
```

**Step 4 — Verify**

After rebooting, verify both cameras are detected:

```bash
rpicam-hello --list-cameras
```

Expected output for a dual-camera setup (e.g., IMX219 on CAM0, IMX708 on CAM1):

```text
Available cameras
-----------------
0 : imx219 [3280x2464] (/base/axi/pcie@120000/rp1/i2c@88000/imx219@10)
1 : imx708 [4608x2592] (/base/axi/pcie@120000/rp1/i2c@70000/imx708@1a)
```

You can also verify through the kernel log:

```bash
sudo dmesg | grep "Using sensor"
rp1-cfe 1f00110000.csi: Using sensor imx219 10-0010 for capture
rp1-cfe 1f00128000.csi: Using sensor imx708 0-001a for capture
```

### **Switching Cameras**
To replace the camera on the CAM1 port with a different model:

```bash
sudo ./cam1_autodetect.sh --clean
sudo ./cam1_autodetect.sh ov9281
sudo reboot
```

---

## **Usage Examples**

### **Quick Test with `rpicam-hello`**
Test individual cameras using the camera index:

```bash
rpicam-hello --camera 0 -t 3000   # Test CAM0 for 3 seconds
rpicam-hello --camera 1 -t 3000   # Test CAM1 for 3 seconds
```

### **Capture a Still Image**

```bash
rpicam-still --camera 1 -o cam1_photo.jpg
```

### **Record Video**

```bash
rpicam-vid --camera 1 -t 10000 -o cam1_video.h264
```

### **Network Streaming with GStreamer**
Stream video from the CAM1 port over TCP using GStreamer. Replace the `camera-name` path and host IP address with your actual values.

=== "Sender — standard camera (IMX708 @ 1280×720)"

    ```bash
    gst-launch-1.0 libcamerasrc \
      camera-name="/base/axi/pcie\@120000/rp1/i2c\@70000/imx708\@1a" \
      ! video/x-raw,colorimetry=bt709,format=NV12,width=1280,height=720,framerate=30/1 \
      ! queue ! jpegenc ! multipartmux \
      ! tcpserversink host=<BOARD_IP> port=5000
    ```

=== "Sender — low-res camera (OV7251 @ 640×480)"

    ```bash
    gst-launch-1.0 libcamerasrc \
      camera-name="/base/axi/pcie\@120000/rp1/i2c\@70000/ov7251\@60" \
      ! video/x-raw,colorimetry=bt709,format=NV12,width=640,height=480,framerate=30/1 \
      ! queue ! jpegenc ! multipartmux \
      ! tcpserversink host=<BOARD_IP> port=5000
    ```

=== "Receiver (viewing machine)"

    ```bash
    gst-launch-1.0 tcpclientsrc host=<BOARD_IP> port=5000 \
      ! multipartdemux ! jpegdec ! autovideosink
    ```

!!! tip "Info"
    The `camera-name` path can be found in the output of `rpicam-hello --list-cameras` or `gst-device-monitor-1.0 Video`.

### **Dual Camera Streaming**
To stream both cameras simultaneously, run two GStreamer pipelines on different ports:

```bash
# Terminal 1 — CAM0 on port 5000
gst-launch-1.0 libcamerasrc \
  camera-name="/base/axi/pcie\@120000/rp1/i2c\@88000/imx219\@10" \
  ! video/x-raw,colorimetry=bt709,format=NV12,width=1280,height=720,framerate=30/1 \
  ! queue ! jpegenc ! multipartmux \
  ! tcpserversink host=<BOARD_IP> port=5000

# Terminal 2 — CAM1 on port 5001
gst-launch-1.0 libcamerasrc \
  camera-name="/base/axi/pcie\@120000/rp1/i2c\@70000/imx708\@1a" \
  ! video/x-raw,colorimetry=bt709,format=NV12,width=1280,height=720,framerate=30/1 \
  ! queue ! jpegenc ! multipartmux \
  ! tcpserversink host=<BOARD_IP> port=5001
```

---

## **Camera Resolutions**

When configuring GStreamer pipelines, use a resolution supported by your camera. Common maximum resolutions:

| Camera | Max Resolution | Max FPS | Notes |
| :----- | :------------- | :------ | :---- |
| `imx219` | 3280×2464 | 21 fps (full) | Bayer RGGB |
| `imx477` | 4056×3040 | 10 fps (full) | Bayer RGGB |
| `imx708` | 4608×2592 | 14 fps (full) | Bayer RGGB |
| `ov5647` | 2592×1944 | 15 fps (full) | Bayer RGGB |
| `ov7251` | 640×480 | 107 fps | Mono 10-bit |
| `ov9281` | 1280×800 | 120 fps | Mono 10-bit |

!!! tip "Info"
    Use `rpicam-hello --list-cameras` to see all available modes and frame rates for your specific camera.

---

## **`config.txt` Reference**

A complete `/boot/firmware/config.txt` camera section for a dual-camera setup:

```ini
# Disable auto-detection
#camera_auto_detect=1

# CAM0: standard Raspberry Pi overlay
dtoverlay=imx219,cam0

# CAM1: auto-generated overlay (managed by cam1_autodetect.sh)
# cam1_autodetect managed
dtoverlay=cam1-auto-imx708
```

!!! danger "Important"
    When using both camera ports, the CAM0 overlay **must** include the `,cam0` parameter. Without it, the standard overlay defaults to the CAM1 I2C bus, causing a conflict.

---

## **Device Tree Label Reference**

For advanced users and custom overlay development, the following device tree labels are relevant on the CM5:

| Label | Device Tree Path | Description |
| :---- | :--------------- | :---------- |
| `i2c_csi_dsi0` | `/axi/.../rp1/i2c@88000` | Camera 0 I2C bus |
| `i2c_csi_dsi1` | `/axi/.../rp1/i2c@70000` | Camera 1 I2C bus |
| `csi0` | `/axi/.../rp1/csi@110000` | CSI-2 receiver for Camera 0 |
| `csi1` | `/axi/.../rp1/csi@128000` | CSI-2 receiver for Camera 1 |
| `cam0_clk` | `/cam0_clk` | Clock source for Camera 0 |
| `cam1_clk` | `/cam1_clk` | Clock source for Camera 1 |
| `i2c0if` | `/i2c0if` | Firmware flag — I2C0 interface enable |
| `i2c0mux` | `/i2c0mux` | Firmware flag — I2C0 mux enable |

---

## **Troubleshooting**

!!! failure "Camera not listed in `rpicam-hello --list-cameras`"
    - Verify the camera is securely connected to the CAM1 FPC connector.
    - Check the kernel log for detection messages:
      ```bash
      sudo dmesg | grep -E "csi|imx|ov"
      ```
    - Ensure the correct overlay is loaded by checking `/boot/firmware/config.txt`.
    - Run `sudo ./cam1_autodetect.sh --clean` and re-run the setup.

!!! failure "GStreamer pipeline fails with \"not-negotiated\""
    The requested resolution or frame rate is not supported by the camera. Run `rpicam-hello --list-cameras` to see available modes and adjust the `width`, `height`, and `framerate` values in the pipeline.

!!! failure "\"Could not find a camera named\" error in GStreamer"
    The `camera-name` path is incorrect. Use `gst-device-monitor-1.0 Video` to find the exact device path.

!!! failure "Switching to a different camera model"
    Always run `sudo ./cam1_autodetect.sh --clean` before installing an overlay for a different camera, then reboot after installing the new one.
