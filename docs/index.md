---
hide:
  - navigation
  - toc
---

<div class="section section--hero" markdown>

# Welcome to Lectron Documentation

This documentation will help you understand Lectron's autopilot products technical specifications, pinouts, block diagrams, assembly guides, software setup, and integration tutorials.


</div>


<div class="section section--products" markdown>

## Autopilot Product

<div class="grid cards product-grid" markdown>
-   :material-raspberry-pi:{ .lg .middle } **Pi5 Light Autopilot**

    ---

    Cost-optimized CM5 autopilot with a small and compact design.

    [:octicons-arrow-right-24: Overview](md/pi5-light/index.md)

-   :material-raspberry-pi:{ .lg .middle } **Pi5 Autopilot**

    ---

    Pixhawk V6X compatible autopilot built around the Raspberry Pi Compute Module 5.

    [:octicons-arrow-right-24: Overview](md/raspberry/index.md)

-   :material-raspberry-pi:{ .lg .middle } **Jetson Autopilot**

    ---

    GPU-accelerated autopilot pairing NVIDIA Jetson onboard computing with real-time flight control.

    [:octicons-arrow-right-24: Overview](md/jetson/index.md)


</div>

</div>

<div class="section section--controllers" markdown>

## Flight Controller Product

<div class="grid cards product-grid" markdown>

-   :material-quadcopter:{ .lg .middle } **H7 FPV**

    ---

    Cost-focused flight controller.

    [:octicons-arrow-right-24: Overview](md/h7-fpv/index.md)
    
-   :material-quadcopter:{ .lg .middle } **H7 FPV Pro**

    ---

    Cost-focused flight controller.

    [:octicons-arrow-right-24: Overview](md/h7-fpv-pro/index.md)

-   :material-quadcopter:{ .lg .middle } **H7 Matrix**

    ---

    Cost-focused flight controller.
    
    [:octicons-arrow-right-24: Overview](md/h7-matrix/index.md)

</div>

</div>

<div class="section section--comparison" markdown>

## Product Comparison { .heavy-heading }

| Feature                   | Lectron Jetson Autopilot                                                                          | Lectron Pi5 Autopilot                                                                          | Lectron PI5 Light Autopilot                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Mission Computer**      | Jetson Modules (Orin, TX2 NX, Xavier NX)                                                          | Raspberry Compute Module 5                                                                     | Raspberry Compute Module 5                                          |
| **FMU Processor**         | STM32H753                                                                                         | STM32H753                                                                                      | STM32H753                                                           |
| **IO Processor**          | STM32F103                                                                                         | STM32F103                                                                                      | -                                                                   |
| **Power Input**           | 3S - 12S (9V - 54V) & XT30 Connector                                                              | 3S - 12S (9V - 54V) & XT30 Connector                                                           | 3S - 12S (9V - 54V) & XT30 Connector                                |
| **Case**                  | Aluminum / Sensor Damping                                                                         | Aluminum / Sensor Damping                                                                      | Aluminum (Optional)                                                 |
| **Camera Interface**      | 2 × 22Pin CSI                                                                                     | 2 × 22Pin CSI                                                                                  | 2 × 22Pin CSI                                                       |
| **Display Outputs**       | Mini HDMI                                                                                         | Mini HDMI                                                                                      | -                                                                   |
| **PCIe**                  | NMVE SSD<br>Wifi & Bluetooth                                                                      | HAILO, SSD, DX-M1M                                                                             | HAILO, SSD, DX-M1M                                                  |
| **IMU**                   | ICM-42688-P<br>ICM-45686<br>Bosch BMI088                                                          | ICM-42688-P<br>ICM-45686<br>Bosch BMI088                                                       | ICM-42688-P<br>LSM6DSV16BXTR                                        |
| **Barometer**             | Bosch BMP581<br>MS561101BA03-50                                                                   | Bosch BMP581<br>Bosch BMP390                                                                   | Bosch BMP581                                                        |
| **Magnetometer**          | Bosch BMM350<br>Bosch IST8310                                                                     | Bosch BMM350                                                                                   | IST8310                                                             |
| **Storage**               | FMU microSD & FRAM                                                                                | CM5 eMMC & microSD<br>FMU microSD & FRAM                                                       | CM5 eMMC & microSD<br>FMU microSD & FRAM                            |
| **Software Support**      | PX4<br>ArduPilot                                                                                  | PX4<br>ArduPilot                                                                               | PX4<br>ArduPilot                                                    |
| **PWM Outputs**           | 8 × FMU & 8 × IO                                                                                  | 8 × FMU & 8 × IO                                                                               | 9 × FMU                                                             |
| **Ports**                 | Jetson GPIO Ports<br>RC IN(SBUS)<br>UART Ports<br>GPS1, GPS2<br>11Pin SPI<br>2 × Telem<br>2 × I2C | CM5 GPIO Ports<br>RC IN(SBUS)<br>UART Ports<br>GPS1, GPS2<br>11Pin SPI<br>2 × Telem<br>2 × I2C | CM5 GPIO Ports<br>RC IN(SBUS)<br>GPS1, GPS2<br>2 × Telem<br>2 × I2C |
| **Operating Temperature** | -25°C to +85°C                                                                                    | -25°C to +85°C                                                                                 | -25°C to +85°C                                                      |
| **USB**                   | FMU Type-C USB3.0<br>Jetson 2 × Type-C USB3.2                                                     | FMU Type-C USB3.0<br>CM5 2 × Type-C USB3.0 & Micro USB2.0                                      | FMU Type-C USB2.0                                                   |
| **CAN**                   | 1 × Jetson<br>2 × FMU                                                                             | 1 × CM5<br>1 × FMU                                                                             | 1 × FMU                                                             |
| **Dimensions**            | 63.4 × 103.5 × 43.6 mm                                                                            | 67.1 × 118.9 × 30.1 mm                                                                         | 58 × 60 × 10 mm                                                     |
| **Weight**                | 224.4 g (without Jetson module)                                                                   | 147.6 g (without CM5 and Hailo)                                                                | 20 g (without CM5 and Hailo)                                        |
| **Ethernet**              | 2 × 100 Mbps (onboard switch)                                                                     | FMU 100 Mbps <br>CM5 1 Gbps                                                                    | CM5 2 × 100 Mbps (FMU no ethernet)                                  |

| Feature                   | Lectron V6X & Carrier                                             | H7 MATRIX                                                         | H7 FPV Pro                                                        | H7 FPV                                                            |
| ------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| **FMU Processor**         | STM32H753                                                         | STM32H743                                                         | STM32H743                                                         | STM32H743                                                         |
| **IO Processor**          | STM32F103                                                         | -                                                                 | -                                                                 | -                                                                 |
| **Power Input**           | 5V - 5.5V (2 × I2C Power Port)                                    | 5V - 5.5V (1 × I2C Power Port)                                    | 3S - 12S (9V - 54V)                                               | 3S - 12S (9V - 54V)                                               |
| **Case**                  | Aluminum / Sensor Damping                                         | Aluminum                                                          | Aluminum                                                          | Aluminum                                                          |
| **IMU**                   | ICM-42688-P<br>ICM-45686<br>BMI088                                | ICM-42688-P<br>LSM6DSV16BXTR                                      | ICM-42688-P                                                       | ICM-42688-P                                                       |
| **Barometer**             | Bosch BMP581<br>MS561101BA03-50                                   | Bosch BMP581                                                      | Bosch BMP581                                                      | Bosch BMP581                                                      |
| **Magnetometer**          | IST8310<br>RM3100                                                 | IST8310                                                           | IST8310                                                           | IST8310                                                           |
| **Storage**               | microSD & FRAM                                                    | microSD & FRAM                                                    | microSD                                                           | microSD                                                           |
| **Software Support**      | PX4<br>ArduPilot                                                  | PX4<br>ArduPilot                                                  | PX4<br>ArduPilot<br>Inav<br>Betaflight                            | PX4<br>ArduPilot<br>Inav<br>Betaflight                            |
| **PWM Outputs**           | 8 × FMU & 8 × IO                                                  | 14 × FMU                                                          | 9 × FMU                                                           | 9 × FMU                                                           |
| **Ports**                 | RC IN(SBUS)<br>GPS1, GPS2<br>3 × Telem<br>11Pin SPI<br>I2C & UART | RC IN(SBUS)<br>GPS1, GPS2<br>2 × Telem<br>11Pin SPI<br>2 × I2C    | RC IN(SBUS)<br>GPS<br>Telem                                       | RC IN(SBUS)<br>GPS<br>Telem                                       |
| **Operating Temperature** | -25°C to +85°C                                                    | -25°C to +85°C                                                    | -25°C to +85°C                                                    | -25°C to +85°C                                                    |
| **USB**                   | Type-C USB2.0                                                     | Type-C USB2.0                                                     | Type-C USB2.0                                                     | Type-C USB2.0                                                     |
| **CAN**                   | 2 × FMU                                                           | 3 × FMU                                                           | 1 × FMU                                                           | -                                                                 |
| **Dimensions**            | 45 × 85 × 30 mm                                                   | 40 × 40 × 18 mm                                                   | 36 × 36 mm                                                        | 36 × 36 mm                                                        |
| **Weight**                | 100 g                                                              | 35 g                                                              | 10 g                                                              | 10 g                                                              |
| **Ethernet**              | FMU 100 Mbps                                                      | FMU 100 Mbps                                                      | -                                                                 | -                                                                 |

</div>

