# Fan Control — Lectron Jetson Autopilot

## Hardware Overview

The system fan is driven by a PWM signal routed through the power board connector. The relevant net on the schematic is **FAN_PWM**, which maps to:

- **Jetson Xavier NX pin:** 230
- **GPIO function:** GPIO14 / GP_PWM6
- **PWM controller base address:** `0x32d0000` (PWM instance 5, `nvidia,hw-instance-id = <0x05>`)
- **sysfs chip:** `pwmchip3` → `/sys/devices/pwm-fan/`

The tachometer feedback signal (**FAN_TACH**) is handled by a separate controller at `0x39c0000.tachometer` (`pwmchip5`).

---

## Device Tree Configuration

### PWM Controller Node

```dts
pwm@32d0000 {
    compatible = "nvidia,tegra194-pwm";
    reg = <0x00 0x32d0000 0x00 0x10000>;
    nvidia,hw-instance-id = <0x05>;
    clocks = <0x04 0x6e>;
    clock-names = "pwm";
    #pwm-cells = <0x02>;
    resets = <0x05 0x49>;
    reset-names = "pwm";
    status = "okay";
    linux,phandle = <0xcd>;
    phandle = <0xcd>;
};
```

### Tachometer Nodes

```dts
tachometer@39c0000 {
    compatible = "nvidia,pwm-tegra194-tachometer";
    reg = <0x00 0x39c0000 0x00 0x10>;
    #pwm-cells = <0x02>;
    clocks = <0x04 0x98>;
    clock-names = "tach";
    resets = <0x05 0x5f>;
    reset-names = "tach";
    pulse-per-rev = <0x02>;       /* 2 pulses per revolution */
    capture-window-length = <0x02>;
    disable-clk-gate;
    status = "okay";
    linux,phandle = <0xb2>;
    phandle = <0xb2>;
};

generic_pwm_tachometer {
    compatible = "generic-pwm-tachometer";
    pwms = <0xb2 0x00 0xf4240>;   /* phandle, channel 0, period 1 000 000 ns (1 Hz reference) */
    status = "okay";
};
```

The `generic-pwm-tachometer` driver wraps the hardware tachometer and exposes RPM through the hwmon subsystem.

### pwm-fan Node

The PWM signal on this board is **hardware-inverted** relative to the standard Jetson carrier reference. The `active_pwm` profiles are therefore inverted: a value of `0xff` (255) corresponds to the fan off state, and lower values increase fan speed.

```dts
pwm-fan {
    compatible = "pwm-fan";
    status = "okay";
    #pwm-cells = <0x01>;
    pwms = <0xcd 0x00 0xb116>;   /* phandle, channel 0, period 45334 ns (~22 kHz) */
    shared_data = <0xce>;
    vdd-fan-supply = <0xcf>;

    profiles {
        default = "quiet";

        quiet {
            state_cap = <0x04>;
            /* PWM values for states 0–9; inverted: 0xff = off, lower = faster */
            active_pwm = <0xff 0x82 0x5f 0x37 0x00 0x00 0x00 0x00 0x00 0x00>;
        };

        cool {
            state_cap = <0x04>;
            active_pwm = <0xff 0x73 0x55 0x37 0x00 0x00 0x00 0x00 0x00 0x00>;
        };
    };
};
```

**Period note:** `0xb116` = 45334 ns → approximately **22.06 kHz**.

At runtime the kernel confirms this configuration:

```
platform/32d0000.pwm, 1 PWM device
 pwm-0   (pwm-fan): requested enabled  period: 45334 ns  duty: 23020 ns  polarity: normal
```

---

## sysfs Layout

```
/sys/class/pwm/
├── pwmchip0  →  3280000.pwm
├── pwmchip1  →  c340000.pwm
├── pwmchip2  →  32c0000.pwm
├── pwmchip3  →  32d0000.pwm   ← fan PWM (owned by pwm-fan driver)
├── pwmchip4  →  32f0000.pwm
└── pwmchip5  →  39c0000.tachometer
```

`pwmchip3` is claimed by the `pwm-fan` kernel driver. Attempting to export channel 0 directly will fail:

```bash
$ echo 0 > /sys/class/pwm/pwmchip3/export
-bash: echo: write error: Device or resource busy
```

---

## Controlling the Fan

Because the `pwm-fan` driver owns the hardware channel, fan speed must be set through its own sysfs interface.

### Manual Speed Control

`target_pwm` accepts values from **0** (minimum duty / hardware inverted → full speed) to **255** (maximum duty / hardware inverted → fan off). Adjust according to the inverted mapping in your profile tables.

```bash
# Full speed (duty cycle minimum after inversion)
echo 0 | sudo tee /sys/devices/pwm-fan/target_pwm

# ~50 % speed
echo 128 | sudo tee /sys/devices/pwm-fan/target_pwm

# Fan off (duty cycle maximum after inversion)
echo 255 | sudo tee /sys/devices/pwm-fan/target_pwm
```

### Switching Thermal Profiles

The active thermal profile is set in the device tree (`default = "quiet"`). There is no runtime sysfs interface for switching profiles on this build. Use `target_pwm` for direct manual override, or modify the device tree profile and rebuild if a different automatic curve is needed.

```bash
# Read back the current duty value being sent to the hardware
cat /sys/devices/pwm-fan/cur_pwm
```

### Reading Fan Tachometer

The `generic_pwm_tachometer` driver registers an hwmon device. Read RPM with:

```bash
sudo cat /sys/devices/generic_pwm_tachometer/hwmon/hwmon1/rpm
```

The fan takes several seconds to spin up to its steady-state speed after `target_pwm` is changed. Example session showing spin-up from rest to full speed:

```
$ echo 255 | sudo tee /sys/devices/pwm-fan/target_pwm   # fan off
$ sudo cat /sys/devices/generic_pwm_tachometer/hwmon/hwmon1/rpm
0
$ echo 0 | sudo tee /sys/devices/pwm-fan/target_pwm     # full speed
$ sudo cat /sys/devices/generic_pwm_tachometer/hwmon/hwmon1/rpm
1533    ← still accelerating
$ sudo cat /sys/devices/generic_pwm_tachometer/hwmon/hwmon1/rpm
8493
$ sudo cat /sys/devices/generic_pwm_tachometer/hwmon/hwmon1/rpm
13950
$ sudo cat /sys/devices/generic_pwm_tachometer/hwmon/hwmon1/rpm
14035   ← near steady state
```

Note that readings can fluctuate during spin-up and wind-down; allow at least 3–5 seconds after a `target_pwm` change before treating the RPM value as stable.

---

## PWM Signal Inversion — Summary Table

| `active_pwm` byte | Duty cycle sent | Fan behaviour |
|:-----------------:|:---------------:|:-------------:|
| `0xff` (255)      | ~100 %          | Off           |
| `0x82` (130)      | ~51 %           | Low speed     |
| `0x55` (85)       | ~33 %           | Medium speed  |
| `0x37` (55)       | ~22 %           | High speed    |
| `0x00` (0)        | 0 %             | Full speed    |

The inversion arises from the FET-based drive stage (Q4) on the power board: a high PWM output from the Jetson turns the FET off, reducing current to the fan.
