# Commands

## **Jetson Power Model**

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

## **Jetson Temperature Monitoring**
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

## **Kernel DebugFS (debugfs) Overview**

-  The **`gpio`** file lists the current state of all GPIO lines in the system. It shows each line’s associated controller (gpiochip), direction (input/output), current value, and usage status. It is one of the most reliable diagnostic sources for verifying which physical pin corresponds to which GPIO line on Jetson platforms.
```bash
sudo cat /sys/kernel/debug/gpio
```

- The **`tegra_pinctrl_reg`** file contains the current pinmux configuration and pin controller register values for all pins on the Jetson platform. It is a critical reference for determining whether each pin is configured as GPIO, I2C, SPI, or another function, and for verifying that hardware configuration has been correctly applied.
```bash
sudo cat /sys/kernel/debug/tegra_pinctrl_reg
```

## **Low-Level Register Access with `devmem2`**

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
