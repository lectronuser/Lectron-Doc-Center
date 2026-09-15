#!/usr/bin/env python3
import argparse
import array
import fcntl
import os
import struct
import sys
import time
import re
 
# ── board config (same as ksz8795_storm.py) ──────────────────────────────────
SPI_DEV   = "/dev/spidev0.0"
CS_GPIO   = 11        # GPIO11 net; auto-detected from debugfs if possible
SPI_HZ    = 1_000_000
CS_SETTLE = 0.0003
# ─────────────────────────────────────────────────────────────────────────────
 
# Register addresses
REG_CHIP_ID0   = 0x00   # family ID, expect 0x87
REG_CHIP_ID1   = 0x01   # chip ID,   expect 0x9x
REG_PORT5_CTL6 = 0x56   # Port 5 Interface Control 6
 
# Port 5 status/control register block (Reserved for Port 5 per datasheet)
PORT5_STATUS_START = 0x59
PORT5_STATUS_END   = 0x5F
 
# Target value for REG_PORT5_CTL6
PORT5_CTL6_TARGET = 0xED  # bit7=1 bit6=1 bit5=1 bit3=1 bit2=1 bit0=1  (RMII, internal clock, bit2 GMII/MII-select left at default)
 
# ── minimal ioctl wrappers (copied verbatim from ksz8795_storm.py) ────────────
_IOC_DIRSHIFT = 30; _IOC_SIZESHIFT = 16
_IOC_TYPESHIFT = 8;  _IOC_NRSHIFT   = 0
 
def _IOW(t, nr, size):
    return ((1 << _IOC_DIRSHIFT) | (t << _IOC_TYPESHIFT) |
            (nr << _IOC_NRSHIFT) | (size << _IOC_SIZESHIFT))
 
_K = ord('k')
SPI_IOC_WR_MODE          = _IOW(_K, 1, 1)
SPI_IOC_WR_BITS_PER_WORD = _IOW(_K, 3, 1)
SPI_IOC_WR_MAX_SPEED_HZ  = _IOW(_K, 4, 4)
SPI_IOC_MESSAGE_1        = _IOW(_K, 0, 32)
 
_fd = None
 
def spi_open():
    global _fd
    _fd = os.open(SPI_DEV, os.O_RDWR)
    fcntl.ioctl(_fd, SPI_IOC_WR_MODE,          struct.pack("=B", 0))
    fcntl.ioctl(_fd, SPI_IOC_WR_BITS_PER_WORD, struct.pack("=B", 8))
    fcntl.ioctl(_fd, SPI_IOC_WR_MAX_SPEED_HZ,  struct.pack("=I", SPI_HZ))
 
def spi_xfer(tx):
    txa = array.array('B', tx)
    rxa = array.array('B', [0] * len(tx))
    ioc = struct.pack("=QQIIHBBBBH",
                      txa.buffer_info()[0], rxa.buffer_info()[0],
                      len(tx), SPI_HZ, 0, 8, 0, 0, 0, 0)
    fcntl.ioctl(_fd, SPI_IOC_MESSAGE_1, ioc)
    return list(rxa)
 
# ── CS via sysfs (copied verbatim from ksz8795_storm.py) ─────────────────────
GPIO = "/sys/class/gpio"
 
def _w(node, v):
    with open("%s/gpio%d/%s" % (GPIO, CS_GPIO, node), "w") as f:
        f.write(v)
 
def cs_low():
    _w("value", "0")
 
def cs_high():
    _w("value", "1")
    time.sleep(CS_SETTLE)
 
def gpio_setup():
    if not os.path.exists("%s/gpio%d" % (GPIO, CS_GPIO)):
        with open("%s/export" % GPIO, "w") as f:
            f.write(str(CS_GPIO))
        time.sleep(0.1)
    _w("direction", "out")
    cs_high()
 
# ── register access (block only — CS does not de-assert between transactions) ─
def read_block(start, n):
    """Read n bytes starting at register start in one CS-low transaction."""
    cs_low()
    rx = spi_xfer([(0b011 << 5) | ((start >> 7) & 1),
                   (start << 1) & 0xFE] + [0x00] * n)
    cs_high()
    return rx[2:2 + n]
 
def write_block(start, vals):
    """Write bytes starting at register start in one CS-low transaction."""
    cs_low()
    spi_xfer([(0b010 << 5) | ((start >> 7) & 1),
              (start << 1) & 0xFE] + list(vals))
    cs_high()
 
# ── helpers ───────────────────────────────────────────────────────────────────
def find_cs_gpio(name="GPIO11"):
    try:
        txt = open("/sys/kernel/debug/gpio").read()
    except Exception:
        return None
    m = re.search(r'gpio-(\d+)\s*\(\s*%s\b' % re.escape(name), txt)
    return int(m.group(1)) if m else None
 
def verify_chip():
    """Return True if chip ID registers match KSZ8795."""
    r = read_block(REG_CHIP_ID0, 2)
    ok = (r[0] == 0x87 and (r[1] & 0xF0) == 0x90)
    print("  Chip ID: reg[0x00]=0x%02X  reg[0x01]=0x%02X  -> %s"
          % (r[0], r[1], "KSZ8795 CONFIRMED" if ok else "NOT FOUND"))
    return ok
 
def dump_regs():
    r = read_block(0x00, 0x60)
    print("Register dump 0x00..0x5F:")
    for i in range(0, 0x60, 8):
        print("  0x%02X:  %s" % (i, "  ".join("0x%02X" % r[i + j]
                                               for j in range(min(8, 0x60 - i)))))
    print()
 
# ── main logic ────────────────────────────────────────────────────────────────
def check_port5():
    """Read and print current Port 5 control register. No writes."""
    r = read_block(REG_PORT5_CTL6, 1)
    val = r[0]
    print("  reg[0x56] current = 0x%02X" % val)
    print("    bit[7] RMII_CLK_SEL  = %d  (%s)" % (
        (val >> 7) & 1,
        "internal clock OK" if (val >> 7) & 1 else "EXTERNAL clock -- will stall!"))
    print("    bit[6] Is_1Gbps      = %d  (%s)" % (
        (val >> 6) & 1,
        "only meaningful in GMII/RGMII; ignored in MII/RMII"))
    print("    bit[2] GMII/MII sel  = %d  (%s)" % (
        (val >> 2) & 1,
        "GMAC/MAC mode" if (val >> 2) & 1 else "GPHY/PHY mode"))
    iface = val & 0x03
    print("    bit[1:0] iface mode  = %d  (%s)" % (
        iface,
        {0: "MII", 1: "RMII", 2: "GMII", 3: "RGMII"}.get(iface, "?")))
    # Flag the one impossible combination: GMII selected at 10/100.
    if iface == 2 and ((val >> 6) & 1) == 0:
        print("    *** WARNING: GMII + 10/100 (Is_1Gbps=0) is unsupported "
              "(GMII is gigabit-only). This is the dead config. ***")
    return val
 
def check_port5_status():
    """Read Port 5 registers 0x59..0x5F in one transaction.

    NOTE: For Port 5 these are Reserved (datasheet Table 4-4, Note 4-1) because
    Port 5 is a MAC-only port with no integrated PHY. The labels below are the
    Ports 1-4 meaning of each address, shown for reference only -- do not treat
    the decoded fields as valid Port 5 status.
    """
    n = PORT5_STATUS_END - PORT5_STATUS_START + 1
    regs = read_block(PORT5_STATUS_START, n)
    labels = {
        0x59: "Reserved  (P1-4: Port Status 1 - speed/duplex/flow/polarity)",
        0x5A: "Reserved  (P1-4: PHY Control 8 - cable diagnostic / CDT)",
        0x5B: "Reserved  (P1-4: LinkMD result - CDT fault count)",
        0x5C: "Reserved  (P1-4: Port Control 9 - AN disable, forced spd/dup)",
        0x5D: "Reserved  (P1-4: Port Control 10 - power/LED/MDIX/loopback)",
        0x5E: "Reserved  (P1-4: Port Status 2 - MDIX / AN done / Link good)",
        0x5F: "Reserved  (P1-4: Control 11 & Status 3 - PHY loopback)",
    }
    print("Port 5 registers 0x%02X..0x%02X "
          "(Reserved for Port 5 - datasheet Note 4-1):"
          % (PORT5_STATUS_START, PORT5_STATUS_END))
    for i, val in enumerate(regs):
        addr = PORT5_STATUS_START + i
        bits = format(val, "08b")
        print("  reg[0x%02X] = 0x%02X  (0b%s)  %s"
              % (addr, val, bits, labels.get(addr, "")))
    return regs
 
# Per-port register layout (port base = port * 0x10):
#   base+0x09  Status 1   : speed / duplex / flow / polarity
#   base+0x0C  Control 9  : AN disable, forced speed/duplex
#   base+0x0D  Control 10 : power-down, MAC loopback, LED
#   base+0x0E  Status 2   : MDI-X / AN done / Link Good
#   base+0x0F  Control 11 & Status 3
# NOTE: these fields are NOT contiguous from 0x_E. Reading from the wrong base
# spills into the next port's CONTROL registers and decodes garbage.
def decode_phy_port(port):
    """Decode link/speed/duplex for a PHY port (1..4) from its status regs."""
    base = port * 0x10
    # One contiguous read of 0xN9..0xNF stays inside THIS port's block.
    regs = read_block(base + 0x09, 7)
    status1   = regs[0]   # 0xN9
    control10 = regs[4]   # 0xND
    status2   = regs[5]   # 0xNE

    print("\n========================================")
    print("PORT %d  (regs 0x%02X..0x%02X)" % (port, base + 0x09, base + 0x0F))
    print("========================================")
    print("Link Good       : %s" % ("YES" if (status2 & 0x20) else "NO"))
    print("AutoNeg Done    : %s" % ("YES" if (status2 & 0x40) else "NO"))
    print("MDIX Status     : %s" % ("MDI" if (status2 & 0x80) else "MDI-X"))
    print("Speed           : %s" % ("100M" if (status1 & 0x04) else "10M"))
    print("Duplex          : %s" % ("FULL" if (status1 & 0x02) else "HALF"))
    print("TX Flow Ctrl    : %s" % ("ON" if (status1 & 0x10) else "OFF"))
    print("RX Flow Ctrl    : %s" % ("ON" if (status1 & 0x08) else "OFF"))
    print("Polarity Rev    : %s" % ("YES" if (status1 & 0x20) else "NO"))
    print("Power Down      : %s" % ("YES" if (control10 & 0x08) else "NO"))
    print("MAC Loopback    : %s" % ("YES" if (control10 & 0x01) else "NO"))
    print("Raw 0x%02X..0x%02X : %s"
          % (base + 0x09, base + 0x0F, " ".join("0x%02X" % v for v in regs)))
    return regs

def check_all_ports():
    """Report link status of Ports 1-4 (PHY) and Port 5 (MAC)."""
    for port in (1, 2, 3, 4):
        decode_phy_port(port)
    print("\n========================================")
    print("PORT 5 (MAC PORT - no PHY)")
    print("========================================")
    check_port5()
    check_port5_status()

def apply_port5():
    """Force Port 5 to RMII internal-clock mode."""
    # Read current value of reg 0x56 using block read from 0x56
    cur = read_block(REG_PORT5_CTL6, 1)[0]
    print("  reg[0x56] before = 0x%02X" % cur)
 
    if cur == PORT5_CTL6_TARGET:
        print("  Already correct (0x%02X). No write needed." % PORT5_CTL6_TARGET)
        return True
 
    # Write new value as a 1-byte block write
    write_block(REG_PORT5_CTL6, [PORT5_CTL6_TARGET])
 
    # Verify by reading back
    readback = read_block(REG_PORT5_CTL6, 1)[0]
    print("  reg[0x56] after  = 0x%02X  (target 0x%02X)  -> %s"
          % (readback, PORT5_CTL6_TARGET,
             "OK" if readback == PORT5_CTL6_TARGET else "MISMATCH"))
    return readback == PORT5_CTL6_TARGET
 
def main():
    global CS_GPIO
 
    ap = argparse.ArgumentParser(description="KSZ8795 Port 5 boot initialiser")
    ap.add_argument("--dump",  action="store_true",
                    help="Dump registers 0x00..0x5F before applying")
    ap.add_argument("--check", action="store_true",
                    help="Read and report Port 5 state, no writes")
    ap.add_argument("--status", action="store_true",
                    help="Read Port 5 registers 0x59..0x5F, no writes "
                         "(Reserved for Port 5 per datasheet)")
    ap.add_argument("--all-status", action="store_true",
                    help="Decode link status of Ports 1-4 plus Port 5, no writes")
    args = ap.parse_args()
 
    if os.geteuid() != 0:
        print("ERROR: run with sudo"); sys.exit(1)
    if not os.path.exists(SPI_DEV):
        print("ERROR: %s not found" % SPI_DEV); sys.exit(1)
 
    # Auto-detect CS GPIO
    det = find_cs_gpio("GPIO11")
    if det is not None:
        CS_GPIO = det
        print("GPIO11 -> linux gpio %d (auto-detected)" % CS_GPIO)
    else:
        print("GPIO11 not in debugfs; using fallback CS_GPIO=%d" % CS_GPIO)
 
    gpio_setup()
    spi_open()
 
    # Always verify chip first
    if not verify_chip():
        print("ERROR: KSZ8795 not responding. Check SPI wiring and power.")
        sys.exit(1)
 
    if args.dump:
        dump_regs()
 
    if args.all_status:
        check_all_ports()
        return
 
    # Read-only reporting modes. --check and --status may be combined.
    if args.check or args.status:
        if args.check:
            check_port5()
        if args.status:
            check_port5_status()
        return
 
    # Apply Port 5 fix
    print("\nConfiguring Port 5 RMII internal-clock mode...")
    success = apply_port5()
 
    if success:
        print("\nKSZ8795 Port 5 init OK — "
              "switch fabric will not stall waiting for external clock.")
        sys.exit(0)
    else:
        print("\nWARNING: register write could not be verified.")
        print("This may be normal if CS auto-increment prevents readback.")
        print("Check with --dump after next power cycle.")
        sys.exit(1)
 
if __name__ == "__main__":
    main()