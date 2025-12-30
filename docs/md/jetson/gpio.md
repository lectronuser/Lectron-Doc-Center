
# GPIO Control

## **Jetson Nano GPIO to Sysfs Mapping Table**
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

## **What is `sysfs`?**
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


## **How to Calculate the Sysfs Value from a GPIO Name?**

- Download the pinmux configuration file for your specific Jetson module. It is available on NVIDIA’s official [documentation page](https://developer.nvidia.com/embedded/downloads).
- Inside the downloaded `pinmux_config_template.xlsm` file, you will find two sheets:
    - The first sheet contains general notes and explanations.
    - The second sheet (**jetson_[xx]_module**) lists the GPIO names along with their detailed identifiers (e.g., `GPIO3_PI.01`).

!["image"](../../images/jetson/pinmux_gpio.png)

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