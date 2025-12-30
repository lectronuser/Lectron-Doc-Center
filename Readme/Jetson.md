# Jetson Custom Board
--- 

## **Commands**

### Jetson Power Model

- `sudo nvpmodel -q` Displays the current active power mode. Allows you to check which performance profile is currently in use.
- `sudo nvpmodel -m0` Maximum Performance Mode (**MAXN**)

!!! tip "Info"
    Enables maximum performance mode, activating all CPU cores and full GPU capability.
    Recommended for compute-intensive workloads such as YOLO, SLAM, image processing, and autonomous control loops

- `sudo nvpmodel -m1` Low Power Mode (**5W**)


!!! danger "Warning"
    Runs the Jetson in **Low Power Mode**. Reduces energy consumption but significantly limits performance.


```bash 
sudo nvpmodel -q   # Show current power mode
sudo nvpmodel -m0  # MAX mode
sudo nvpmodel -m1  # 5W mode
```

### Jetson Temperature Monitoring
- `cat /sys/class/thermal/thermal_zone*/temp` Displays raw temperature readings (in millidegrees Celsius) for all available thermal zones.
- `cat /sys/class/thermal/thermal_zone*/type` Shows the sensor name associated with each thermal zone (e.g., CPU-therm, GPU-therm, Tboard-therm).
- `sudo tegrastats` Real-time monitoring tool for temperature, CPU/GPU usage, memory, and power consumption.
- `watch -n1 'cat /sys/class/thermal/thermal_zone*/temp'` Continuously displays updated temperature readings every second.

!!! tip "Info"
    Each Jetson thermal sensor is represented as a *thermal zone*.  
    Temperature values are reported in **millidegrees Celsius** (e.g., `45000` → **45°C**).  
    Use these readings to diagnose thermal throttling, cooling efficiency, and system load behavior.

!!! example "Usage Example"
    ```bash
    cat /sys/class/thermal/thermal_zone1/type
    cat /sys/class/thermal/thermal_zone1/temp
    sudo tegrastats        # real-time monitoring
    ```

!!! danger "Warning"
    High temperatures can cause **thermal throttling**, reducing CPU/GPU frequencies and impacting performance.  
    Ensure proper cooling for compute-intensive workloads or enclosed environments.

### Kernel DebugFS (debugfs) Overview

-  The **`gpio`** file lists the current state of all GPIO lines in the system. It shows each line’s associated controller (gpiochip), direction (input/output), current value, and usage status. It is one of the most reliable diagnostic sources for verifying which physical pin corresponds to which GPIO line on Jetson platforms.
```bash
sudo cat /sys/kernel/debug/gpio
```

- The **`tegra_pinctrl_reg`** file contains the current pinmux configuration and pin controller register values for all pins on the Jetson platform. It is a critical reference for determining whether each pin is configured as GPIO, I2C, SPI, or another function, and for verifying that hardware configuration has been correctly applied.
```bash
sudo cat /sys/kernel/debug/tegra_pinctrl_reg
```

### Low-Level Register Access with `devmem2`

- `devmem2` allows direct access to physical memory from userspace and enables read/write operations on hardware registers. It is mainly used to quickly test memory-mapped I/O (MMIO) registers.

!!! danger "Warning"
    Writing incorrect values to the wrong physical address using `devmem2` may hang the system, trigger unexpected resets, or cause hardware misbehavior. Use this tool only if you fully understand the register map and have the SoC/Jetson TRM at hand.

---

!!! example "Example"
    First, you can inspect the `tegra_pinctrl_reg` contents to understand which register regions are used for a given pin/pad:

    ```bash
    sudo cat /sys/kernel/debug/tegra_pinctrl_reg
    ``` 

    This output shows the register addresses and values associated with the pinmux/pad configuration for each pin. From here, you can identify the register address or offset used for a specific pin. 

    ```bash
    # Read current value
    sudo devmem2 0x[address] w

    # Set the address value
    sudo devmem2 0x[address] w 0x1
    ```


## **GPIO Control**

### Jetson Nano GPIO to Sysfs Mapping Table
```bash 
- Pin 28: GPI02 → 62  (sysfs)
- Pin 34: GPI05 → 63  (sysfs)
- Pin 36: GPI06 → 64  (sysfs)
- Pin ..: GPIO4 → 65  (sysfs)
- Pin ..: GPIO3 → 66  (sysfs)
- Pin 26: GPI01 → 149 (sysfs)
- Pin 38: GPI07 → 168 (sysfs)
- Pin 40: GPI08 → 202 (sysfs)
- Pin ..: GPI09 → 216 (sysfs)
```

### What is `sysfs`?
Linux exposes hardware interfaces under `/sys` using a special virtual filesystem called sysfs.
GPIO, PWM, I2C, SPI and other hardware components appear as simple files inside this structure.

!!! note "Info"
    This allows GPIO pins to be controlled using simple file writes:  **`export → direction → value`**.

!!! example "Terminal Code Example"
    This example demonstrates how to set GPIO with sysfs ID **79** to HIGH and LOW using the terminal.

    ```bash
    echo 79 > /sys/class/gpio/export
    echo out > /sys/class/gpio/gpio79/direction
    echo 1 > /sys/class/gpio/gpio79/value
    echo 0 > /sys/class/gpio/gpio79/value
    ```

=== "C (libgpiod)"

    ```c
    #include <gpiod.h>
    #include <stdio.h>
    #include <stdlib.h>

    int main(int argc, char *argv[])
    {
        if (argc != 3) {
            fprintf(stderr, "Usage: %s <LINE_OFFSET> <VALUE>\n", argv[0]);
            fprintf(stderr, "VALUE: 0 (low) or 1 (high)\n");
            return 1;
        }

        int line_offset = atoi(argv[1]);
        int value       = atoi(argv[2]);

        if (value != 0 && value != 1) {
            fprintf(stderr, "Error: VALUE must be 0 or 1\n");
            return 1;
        }

        struct gpiod_chip *chip = gpiod_chip_open_by_name("gpiochip3");
        if (!chip) {
            perror("gpiod_chip_open_by_name");
            return 1;
        }

        struct gpiod_line *line = gpiod_chip_get_line(chip, line_offset);
        if (!line) {
            perror("gpiod_chip_get_line");
            gpiod_chip_close(chip);
            return 1;
        }

        if (gpiod_line_request_output(line, "gpio_set", value) < 0) {
            perror("gpiod_line_request_output");
            gpiod_chip_close(chip);
            return 1;
        }

        gpiod_line_release(line);
        gpiod_chip_close(chip);

        return 0;
    }
    ```

=== "Shell (sysfs)"

    ```bash
    #!/bin/sh

    if [ $# -ne 2 ]; then
        echo "Usage: $0 <GPIO_PIN> <VALUE>"
        echo "VALUE: 0 (low) or 1 (high)"
        exit 1
    fi

    GPIO_PIN="$1"
    VALUE="$2"

    if [ "$VALUE" != "0" ] && [ "$VALUE" != "1" ]; then
        echo "Error: VALUE must be 0 or 1"
        exit 1
    fi

    GPIO_PATH="/sys/class/gpio/gpio$GPIO_PIN"

    if [ ! -d "$GPIO_PATH" ]; then
        echo "$GPIO_PIN" > /sys/class/gpio/export
        sleep 0.1
    fi

    echo "out" > "$GPIO_PATH/direction"
    echo "$VALUE" > "$GPIO_PATH/value"
    ```

!!! tip "Info"
    You can access these codes on Lectron’s GitHub page through [this link](https://github.com/lectronuser/Lectron-Doc-Center/tree/main/docs); the files are named **gpio_set.sh** and **gpio_set.c**.

!!! danger "Warning"
    If you receive an error stating that `<gpiod.h>` cannot be found during compilation, it means the `libgpiod` development packages are not installed on your system.  
    To resolve this issue, install the required packages using:
     ```bash
    sudo apt-get install -y gpiod libgpiod-dev
    ```


### How to Calculate the Sysfs Value from a GPIO Name?

- Download the pinmux configuration file for your specific Jetson module. It is available on NVIDIA’s official [documentation page](https://developer.nvidia.com/embedded/downloads).
- Inside the downloaded `pinmux_config_template.xlsm` file, you will find two sheets:
    - The first sheet contains general notes and explanations.
    - The second sheet (**jetson_[xx]_module**) lists the GPIO names along with their detailed identifiers (e.g., `GPIO3_PI.01`).

!["image"](../../images/jetson_pinmux_gpio.png)

- In an identifier such as `GPIO3_PI.01`:
    - The letters (e.g., PI, where I is important) correspond to the `TEGRA_GPIO_PORT` value.
    - The number after the dot (`01`) represents the pin **offset**.
- The Sysfs GPIO number is computed using the following formula: `TEGRA_GPIO = (TEGRA_GPIO_PORT * 8) + pin_offset` 
    - You can find this formula in the `tegra194-gpio.h` header file.

```c title="tegra194-gpio.h" hl_lines="1"
#define TEGRA_GPIO(port, offset) \ ((TEGRA_GPIO_PORT_##port * 8) + offset)
#define TEGRA_GPIO_PORT_A 0
#define TEGRA_GPIO_PORT_B 1
#define TEGRA_GPIO_PORT_C 2
#define TEGRA_GPIO_PORT_D 3
#define TEGRA_GPIO_PORT_E 4
#define TEGRA_GPIO_PORT_F 5
#define TEGRA_GPIO_PORT_G 6
#define TEGRA_GPIO_PORT_H 7
#define TEGRA_GPIO_PORT_I 8
#define TEGRA_GPIO_PORT_J 9
#define TEGRA_GPIO_PORT_K 10
#define TEGRA_GPIO_PORT_L 11
#define TEGRA_GPIO_PORT_M 12
#define TEGRA_GPIO_PORT_N 13
#define TEGRA_GPIO_PORT_O 14
#define TEGRA_GPIO_PORT_P 15
#define TEGRA_GPIO_PORT_Q 16
#define TEGRA_GPIO_PORT_R 17
#define TEGRA_GPIO_PORT_S 18
#define TEGRA_GPIO_PORT_T 19
#define TEGRA_GPIO_PORT_U 20
#define TEGRA_GPIO_PORT_V 21
#define TEGRA_GPIO_PORT_W 22
#define TEGRA_GPIO_PORT_X 23
#define TEGRA_GPIO_PORT_Y 24
#define TEGRA_GPIO_PORT_Z 25
#define TEGRA_GPIO_PORT_AA 26
#define TEGRA_GPIO_PORT_BB 27
```

- After substituting the port index and the pin offset into the formula, you obtain the corresponding sysfs GPIO number.

!!! example "Example"
        GPIO09 sysfs value is 216
        GPIO09 -> GPIO3_PBB.00
        TEGRA_GPIO_PORT = BB 
        Offset = 0
        TEGRA_GPIO = (TEGRA_GPIO_PORT_BB * 8) + 0 -> (27 * 8) + 0 = 216

!!! danger "Warning"
    This Formula Does NOT Apply to PMIC GPIOs **(`max77620-gpio`)**
    ```bash
    sudo dmesg | grep "registered GPIO"
    [    0.534131] gpiochip_setup_dev: registered GPIOs 0 to 255 on device: gpiochip0 (tegra-gpio)
    [    0.591897] gpiochip_setup_dev: registered GPIOs 504 to 511 on device: gpiochip1 (max77620-gpio)
    ```

- Jetson platforms have two separate GPIO controllers: 
    - **tegra-gpio** -> [0-255] On-SoC Tegra GPIOs
    - **max77620-gpio** -> [504–511]  PMIC GPIOs
- If the GPIO belongs to tegra-gpio → Use Tegra Port Formula.
- If it belongs to max77620-gpio → The sysfs number is assigned directly by the kernel and the correct calculation is `offset = sysfs_gpio - gpiochip_base   # Example: 509 - 504 = 5`


## Networking
On Jetson (Ubuntu-based) systems, networking can be controlled by three different mechanisms:

1. **NetworkManager (NM)**
2. **`/etc/network/interfaces` (ifupdown)**
3. **Netplan (systemd-networkd or NetworkManager renderer)**

!!! danger "Warning"
    These systems can conflict with each other when active simultaneously, often resulting in issues such as:
    - eth0 being shown as DEVICE --
    - NetworkManager being unable to manage Ethernet
    - Misconfigured profiles being ignored

### NetworkManager
The default modern network management system.
- Location: `/etc/NetworkManager/system-connections/`
- Requires correct permissions and ownership
- Handles Ethernet, Wi-Fi, VPN, DHCP, static IP
- If NM does not manage eth0 → Connection appears as `DEVICE --`


#### Creating a Fresh eth0 Profile (Recommended)
```bash
# Delete old profile (ignore errors)
sudo nmcli connection delete eth0

# Create a new DHCP profile
sudo nmcli connection add type ethernet ifname eth0 con-name eth0 ipv4.method auto ipv6.method ignore

# Fix permissions
# Without these, NetworkManager can see the profile but cannot activate it.
sudo chmod 600 /etc/NetworkManager/system-connections/eth0
sudo chown root:root /etc/NetworkManager/system-connections/eth0

# Restart NM
sudo nmcli connection reload
sudo systemctl restart NetworkManager

# Bring up the interface
sudo nmcli connection down eth0
sudo nmcli connection up eth0

# Verify assigned IP
ip addr show eth0
```

#### Static Setup

```bash
    sudo nano /etc/NetworkManager/system-connections/eth0
```

```
[connection]
id=eth0
type=ethernet
interface-name=eth0
permissions=

[ethernet]
mac-address-blacklist=

[ipv4]
address1=192.168.1.3/24
dns-search=
method=manual

[ipv6]
method=ignore
```

#### DHCP Setup
```bash
    sudo nano /etc/NetworkManager/system-connections/eth0
```

```
[connection]
id=eth0
type=ethernet
interface-name=eth0
autoconnect=true

[ipv4]
method=auto

[ipv6]
method=ignore
```


!!! danger "What `DEVICE -` Means (eth0 Not Connecting)"  
    This indicates: NetworkManager sees the connection profile but cannot bind it to the actual eth0 interface.
    On Jetson devices, the eth0 interface may be managed by a different legacy configuration mechanism compared to other network interfaces. If `/etc/network/interfaces` contains an old-style configuration entry for **eth0**, NetworkManager will stop managing this interface, causing it to appear as `DEVICE --` in nmcli. To resolve this, comment out or remove the eth0 lines in the interfaces file. Once these entries are disabled, NetworkManager will correctly take control of the eth0 interface, and the connection will function as expected.



### ifupdown
Legacy networking method. If this file contains:

- Location: `/etc/network/interfaces`

```bash
auto eth0
iface eth0 inet dhcp
```

- Then:
    - NetworkManager will NOT manage eth0
    - eth0 becomes unmanaged
    - nmcli shows `DEVICE --`

```bash
auto lo
iface lo inet loopback
```

### Netplan

- Installing Netplan (if missing): `sudo apt install netplan.io`
- Controls which backend manages the network: 
    - `renderer: NetworkManager`
    - `renderer: networkd`
- Location: `/etc/netplan/*.yaml`

```yaml
network:
  version: 2
  renderer: NetworkManager
  ethernets:
      enp2s0:
          addresses:
              - 192.168.2.1/16
          nameservers:
              addresses: [192.168.2.1]
          routes:
              - to: 192.168.2.1
                via: 192.168.2.1
```

```bash
sudo netplan try
sudo netplan apply
```

- [Netplan Network Configuration](https://www.linux.com/topic/distributions/how-use-netplan-network-configuration-tool-linux/)
