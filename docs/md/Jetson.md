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


## **GPIO Control**

### Jetson Nano GPIO-to-Sysfs Mapping Table
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
    You can access these codes on Lectron’s GitHub page through this [link]().

!!! danger "Warning"
    If you receive an error stating that `<gpiod.h>` cannot be found during compilation, it means the `libgpiod` development packages are not installed on your system.  
    To resolve this issue, install the required packages using:
     ```bash
    sudo apt-get install -y gpiod libgpiod-dev
    ```



### Controlling GPIO with Libgpiod
```bash
sudo apt-get install -y gpiod
```
```c
#include <gpiod.h>

struct gpiod_chip *gpChip; 
struct gpiod_line *gpLine; 

int main() {
  // Set up the GPIO
  gpChip = gpiod_chip_open_by_name("gpiochip3"); 
  gpLine = gpiod_chip_get_line(gpChip, 107);
  
  // Set GPIO low
  gpiod_line_request_output(gpLine, "gpLine", 0);
  // Or
  gpiod_line_set_value(gpLine, 0); 
}
```

```bash
sudo cat /sys/kernel/debug/tegra_pinctrl_reg

# Search for a specific pin, e.g., GPIO_CAM4
sudo cat /sys/kernel/debug/tegra_pinctrl_reg | grep cam4

# Set GPIO to HIGH
sudo devmem2 0x02430038 w 0x1
```

```bash
sudo cat /sys/kernel/debug/gpio # List all GPIO
```

### Checking GPIO and Sysfs Mapping
- Use `sudo dmesg | grep` **"registered GPIO"** to view how GPIO pins are mapped in the system.
- The output shows how pins are grouped into ranges (e.g., tegra-gpio mapped to `gpiochip0` and `max77620-gpio` mapped to gpiochip1).
- Offset calculation: Example: Pin **509** in `max77620-gpio` → `offset = 509 - 504`
- Formula (from tegra194-gpio.h): `sysfs_number = [GPIO Base] + [Port * 8] + [Offset]`

## Networking

- **Installing Netplan (if missing):**  `sudo apt install netplan.io`
- **Setting a Static IP:** Edit `sudo nano /etc/netplan/01-network-manager-all.yaml`

```
[connection]
id=eth0
uuid=7d28fc79-6ae3-4e18-96b3-8fdd8a4296f8
type=ethernet
interface-name=eth0
permissions=

[ethernet]
mac-address-blacklist=

[ipv4]
address1=10.223.5.4/24
dns-search=
method=manual

[ipv6]
addr-gen-mode=stable-privacy
dns-search=
method=auto
```

```
[connection]
id=ethernet
type=ethernet
autoconnect=true
interface-name=eth0

[ipv4]
method=auto

[ipv6]
method=ignore
```