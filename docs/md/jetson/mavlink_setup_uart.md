# MAVLink Companion Link Setup over UART

This file explaint how to bring up PX4 TELEM3 (FMU USART2) as a MAVLink port and receive its stream on the Jetson over UART0.

---

## 1. Connectivity — the bridge resistors

On this autopilot baseboard, the FMU's **TELEM3 (USART2)** is wired toward the **Jetson module's UART0** through four **0 Ω bridge resistors**. The crossover is correct end to end (TX↔RX, RTS↔CTS):

| FMU side (TELEM3 / USART2) | Resistor | Jetson side (UART0) |
|---|---|---|
| `USART2_TX_TELEM3`  | **R218** | `JN_UART0_RXD` |
| `USART2_RX_TELEM3`  | **R217** | `JN_UART0_TXD` |
| `USART2_RTS_TELEM3` | **R226** | `JN_UART0_CTS` |
| `USART2_CTS_TELEM3` | **R227** | `JN_UART0_RTS` |

### What the bridge does

The same `JN_UART0_*` nets also break out to a separate UART0 connector (U34 on the schematic). The resistors decide who owns UART0:

- **Resistors populated** → UART0 is committed to the FMU TELEM3 link. (Don't also drive the external U34 header, or you get bus contention.)
- **Resistors removed** → TELEM3 and UART0 are isolated, freeing UART0 to be used as an independent external connector.

---

## 2. QGroundControl configuration (PX4 side)

MAVLink parameters split into "which port" (`MAV_x_CONFIG`) and "how it behaves" (`MAV_x_MODE`, `_RATE`, …). The per-instance behavior params **only appear after you assign a port and reboot**.

On this build, `MAV_0` is on TELEM1 and `MAV_2` is on Ethernet, so the free instance **`MAV_1`** is used for TELEM3.

### Steps

1. Set **`MAV_1_CONFIG = TELEM 3`**, then **reboot** (CONFIG params need a reboot before the rest appear).
2. After reboot, set:

| Parameter | Value |
|---|---|
| `SER_TEL3_BAUD` | `115200` |
| `MAV_1_MODE` | `Onboard` |
| `MAV_1_FLOW_CTRL` | `Force off` |
| `MAV_1_RATE` | default / 0 |
| `MAV_PROTO_VER` | `2` |

3. **Reboot again.**

### Verify on the FMU (QGC → Analyze Tools → MAVLink Console)

```
mavlink status
```

The TELEM3 instance (`MAV_1`) should be **transmitting** in `Onboard` mode at 115200:

```
instance #1:
    mavlink chan: #1
    flow control: OFF
    rates:
      tx: 3717.7 B/s
      rx: 0.0 B/s          <-- 0 until the Jetson sends its heartbeat back
    mode: Onboard
    MAVLink version: 2
    transport protocol: serial (/dev/ttyS1 @115200)
```

`tx` nonzero with `rx: 0.0` means **PX4 is fine and transmitting** — any remaining problem is on the Jetson receive side. Once the Jetson talks back, `rx` becomes nonzero.

---

## 3. Verify the connection with `xxd`

On this carrier the TELEM3 link comes up on **`/dev/ttyTHS1`**. Look at the raw bytes:

```bash
sudo stty -F /dev/ttyTHS1 115200 raw -echo
sudo cat /dev/ttyTHS1 | xxd | head
```

If you see nothing on `ttyTHS1`, try **`/dev/ttyTHS0`** instead (same commands, swap the node).

Expected output:

```
00000000: fd1c 0000 f901 011e 0000 2895 1000 bfd3  ..........(.....
00000010: 4840 fafe aabd 3156 cbbf c354 a6bb 30ad  H@....1V...T..0.
00000020: 963b 7c8a adb9 5ea2 fd09 0000 fa01 0100  .;|...^.........
00000030: 0000 0000 0403 020c 1d00 0322 34fd 0a00  ..........."4...
...
```

### How to read it

The recurring **`fd`** is the MAVLink 2 start byte. Decoding a few frames confirms it's real telemetry, not noise:

| Bytes | len | msgid | Message |
|---|---|---|---|
| `fd 1c 00 00 f9 01 01 1e ...` | 0x1c (28) | `0x1e` = 30 | **ATTITUDE** |
| `fd 09 00 00 fa 01 01 00 ...` | 0x09 (9)  | `0x00` = 0  | **HEARTBEAT** |
| `fd 0a 00 00 fb 01 01 04 ...` | 0x0a (10) | `0x04` = 4  | **PING** |

### Interpreting what you see

Recurring **`0xFD`** frames → port, baud, and TX/RX polarity are all correct. ✅

> **Why minicom can lie:** minicom defaults to **Hardware Flow Control = ON**. With RTS/CTS not in the state it expects, it shows a blank screen even while bytes arrive. For diagnosis, trust `cat | xxd` — it's unambiguous. To fix minicom: `Ctrl-A O` → *Serial port setup* → toggle hardware flow control to **No**.

---

## 4. Decode with pymavlink

### Prerequisites

```bash
sudo usermod -aG dialout $USER    # run the port as your user without root (re-login after)
pip3 install pymavlink
```

### Test script (`mavlink_test.py`)

```python
from pymavlink import mavutil

m = mavutil.mavlink_connection('/dev/ttyTHS1', baud=115200)
m.wait_heartbeat()
print("Heartbeat from sys %d comp %d" % (m.target_system, m.target_component))

while True:
    msg = m.recv_match(blocking=True)
    if msg:
        print(msg.get_type(), msg.to_dict())
```

```bash
python3 mavlink_test.py
```

If `wait_heartbeat()` returns immediately, the bidirectional link is solid.