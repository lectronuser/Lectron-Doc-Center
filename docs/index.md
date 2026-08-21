---
hide:
  - navigation
  - toc
---

<div class="hero">
  <div class="hero__content">
    <h1>Welcome to Lectron Documentation</h1>
    <p>
      This documentation will help you understand Lectron's autopilot products - technical specifications, pinouts, block diagrams, assembly guides, software setup, and integration tutorials.
    </p>
    <p style="font-size:0.8rem; opacity:0.6;">
      Questions or feedback? Contact us at <a href="mailto:contact@lectrontech.com">contact@lectrontech.com</a>
    </p>
  </div>
</div>

<details>
  <summary style="padding:1rem 1.2rem; cursor:pointer; list-style:none; font-weight:700; font-size:1rem;">
    Jetson Autopilot
    <span style="display:block; font-weight:400; font-size:0.8rem; opacity:0.6;">Jetson Nano/Xavier NX/TX2 NX · FMUv6X · GPU-based autopilot</span>
  </summary>
  <ul style="margin:0; padding:0.5rem 1.2rem 0.8rem 2rem; border-top:1px solid rgba(128,128,128,0.15); list-style:disc;">
    <li><a href="md/jetson/">Overview</a></li>
    <li><a href="md/jetson/dimension/">Dimension</a></li>
    <li><a href="md/jetson/block-diagram/">Block Diagram</a></li>
    <li><a href="md/jetson/specification/">Specification</a></li>
    <li><a href="md/jetson/pinout/">Pinout</a></li>
    <li><a href="md/jetson/assembly/">Assembly</a></li>
    <li><a href="md/jetson/setup/">Initial Installation</a></li>
    <li><a href="md/jetson/commands/">Commands</a></li>
    <li><a href="md/jetson/gpio/">GPIO Control</a></li>
    <li><a href="md/jetson/network/">Network</a></li>
    <li><a href="md/jetson/mavlink_setup_uart/">MAVLink UART Setup</a></li>
    <li><a href="md/jetson/fan_control/">Fan Control</a></li>
  </ul>
</details>

<details>
  <summary style="padding:1rem 1.2rem; cursor:pointer; list-style:none; font-weight:700; font-size:1rem;">
    Pi5 Autopilot
    <span style="display:block; font-weight:400; font-size:0.8rem; opacity:0.6;">CM5 · Hailo-8 Edge AI · FMUv6X</span>
  </summary>
  <ul style="margin:0; padding:0.5rem 1.2rem 0.8rem 2rem; border-top:1px solid rgba(128,128,128,0.15); list-style:disc;">
    <li><a href="md/raspberry/">Overview</a></li>
    <li><a href="md/raspberry/dimension/">Dimension</a></li>
    <li><a href="md/raspberry/block-diagram/">Block Diagram</a></li>
    <li><a href="md/raspberry/specification/">Specification</a></li>
    <li><a href="md/raspberry/pinout/">Pinout</a></li>
    <li><a href="md/raspberry/assembly/">Assembly</a></li>
    <li><a href="md/raspberry/setup/">Initial Installation</a></li>
    <li><a href="md/raspberry/cm5-gpio/">CM5 GPIO</a></li>
    <li><a href="md/raspberry/cam1-setup/">Camera Setup</a></li>
    <li><a href="md/raspberry/hailo-setup/">Hailo-8 Integration</a></li>
    <li><a href="md/raspberry/realsense-setup/">RealSense Integration</a></li>
    <li><a href="md/raspberry/fmu-cm5-comm/">FMU ↔ CM5 Communication</a></li>
  </ul>
</details>

## Product Comparison

| Feature                   | Lectron Jetson Autopilot                                                                          | Lectron Pi5 Autopilot                                                                          | Lectron PI5 Light Autopilot                                         | Lectron V6X & Carrier                                             | H7 MATRIX                                                         | H7 FPV Pro                                                        | H7 FPV                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Mission Computer**      | Jetson Modules (Orin, TX2 NX, Xavier NX)                                                          | Raspberry Compute Module 5                                                                     | Raspberry Compute Module 5                                          | -                                                                 | -                                                                 | -                                                                 | -                                                                 |
| **FMU Processor**         | STM32H753                                                                                         | STM32H753                                                                                      | STM32H753                                                           | STM32H753                                                         | STM32H743                                                         | STM32H743                                                         | STM32H743                                                         |
| **IO Processor**          | STM32F103                                                                                         | STM32F103                                                                                      | -                                                                   | STM32F103                                                         | -                                                                 | -                                                                 | -                                                                 |
| **Power Input**           | 3S - 12S (9V - 54V) & XT30 Connector                                                              | 3S - 12S (9V - 54V) & XT30 Connector                                                           | 3S - 12S (9V - 54V) & XT30 Connector                                | 5V - 5.5V (2 × I2C Power Port)                                    | 5V - 5.5V (1 × I2C Power Port)                                    | 3S - 12S (9V - 54V)                                               | 3S - 12S (9V - 54V)                                               |
| **Case**                  | Aluminum / Sensor Damping                                                                         | Aluminum / Sensor Damping                                                                      | Aluminum (Optional)                                                 | Aluminum / Sensor Damping                                         | Aluminum                                                          | Aluminum                                                          | Aluminum                                                          |
| **Camera Interface**      | 2 × 22Pin CSI                                                                                     | 2 × 22Pin CSI                                                                                  | 2 × 22Pin CSI                                                       | -                                                                 | -                                                                 | -                                                                 | -                                                                 |
| **Display Outputs**       | Mini HDMI                                                                                         | Mini HDMI                                                                                      | -                                                                   | -                                                                 | -                                                                 | -                                                                 | -                                                                 |
| **PCIe**                  | NMVE SSD<br>Wifi & Bluetooth                                                                      | HAILO, SSD, DX-M1M                                                                             | HAILO, SSD, DX-M1M                                                  | -                                                                 | -                                                                 | -                                                                 | -                                                                 |
| **IMU**                   | ICM-42688-P<br>ICM-45686<br>Bosch BMI088                                                          | ICM-42688-P<br>ICM-45686<br>Bosch BMI088                                                       | ICM-42688-P<br>LSM6DSV16BXTR                                        | ICM-42688-P<br>ICM-45686<br>BMI088                                | ICM-42688-P<br>LSM6DSV16BXTR                                      | ICM-42688-P                                                       | ICM-42688-P                                                       |
| **Barometer**             | Bosch BMP581<br>MS561101BA03-50                                                                   | Bosch BMP581<br>Bosch BMP390                                                                   | Bosch BMP581                                                        | Bosch BMP581<br>MS561101BA03-50                                   | Bosch BMP581                                                      | Bosch BMP581                                                      | Bosch BMP581                                                      |
| **Magnetometer**          | Bosch BMM350<br>Bosch IST8310                                                                     | Bosch BMM350                                                                                   | IST8310                                                             | IST8310<br>RM3100                                                 | IST8310                                                           | IST8310                                                           | IST8310                                                           |
| **Storage**               | FMU microSD & FRAM                                                                                | CM5 eMMC & microSD<br>FMU microSD & FRAM                                                       | CM5 eMMC & microSD<br>FMU microSD & FRAM                            | microSD & FRAM                                                    | microSD & FRAM                                                    | microSD                                                           | microSD                                                           |
| **Software Support**      | PX4<br>ArduPilot                                                                                  | PX4<br>ArduPilot                                                                               | PX4<br>ArduPilot                                                    | PX4<br>ArduPilot                                                  | PX4<br>ArduPilot                                                  | PX4<br>ArduPilot<br>Inav<br>Betaflight                            | PX4<br>ArduPilot<br>Inav<br>Betaflight                            |
| **PWM Outputs**           | 8 × FMU & 8 × IO                                                                                  | 8 × FMU & 8 × IO                                                                               | 9 × FMU                                                             | 8 × FMU & 8 × IO                                                  | 14 × FMU                                                          | 9 × FMU                                                           | 9 × FMU                                                           | 
| **Ports**                 | Jetson GPIO Ports<br>RC IN(SBUS)<br>UART Ports<br>GPS1, GPS2<br>11Pin SPI<br>2 × Telem<br>2 × I2C | CM5 GPIO Ports<br>RC IN(SBUS)<br>UART Ports<br>GPS1, GPS2<br>11Pin SPI<br>2 × Telem<br>2 × I2C | CM5 GPIO Ports<br>RC IN(SBUS)<br>GPS1, GPS2<br>2 × Telem<br>2 × I2C | RC IN(SBUS)<br>GPS1, GPS2<br>3 × Telem<br>11Pin SPI<br>I2C & UART | RC IN(SBUS)<br>GPS1, GPS2<br>2 × Telem<br>11Pin SPI<br>2 × I2C    | RC IN(SBUS)<br>GPS<br>Telem                                       | RC IN(SBUS)<br>GPS<br>Telem                                       |
| **Operating Temperature** | -25°C to +85°C                                                                                    | -25°C to +85°C                                                                                 | -25°C to +85°C                                                      | -25°C to +85°C                                                    | -25°C to +85°C                                                    | -25°C to +85°C                                                    | -25°C to +85°C                                                    |
| **USB**                   | FMU Type-C USB3.0<br>Jetson 2 × Type-C USB3.2                                                     | FMU Type-C USB3.0<br>CM5 2 × Type-C USB3.0 & Micro USB2.0                                      | FMU Type-C USB2.0                                                   | Type-C USB2.0                                                     | Type-C USB2.0                                                     | Type-C USB2.0                                                     | Type-C USB2.0                                                     |
| **CAN**                   | 1 × Jetson<br>2 × FMU                                                                             | 1 × CM5<br>1 × FMU                                                                             | 1 × FMU                                                             | 2 × FMU                                                           | 3 × FMU                                                           | 1 × FMU                                                           | -                                                                 |
| **Dimensions**            | 63.4 × 103.5 × 43.6 mm                                                                            | 67.1 × 118.9 × 30.1 mm                                                                         | 58 × 60 × 10 mm                                                     | 45 × 85 × 30 mm                                                   | 40 × 40 × 18 mm                                                   | 36 × 36 mm                                                        | 36 × 36 mm                                                        |
| **Weight**                | 224.4 g (without Jetson module)                                                                   | 147.6 g (without CM5 and Hailo)                                                                | 20 g (without CM5 and Hailo)                                        | 100 g                                                             | 35 g                                                              | 10 g                                                              | 10 g                                                              |
| **Ethernet**              | 2 × 100 Mbps (onboard switch)                                                                     | FMU 100 Mbps <br>CM5 1 Gbps                                                                    | CM5 2 × 100 Mbps (FMU no ethernet)                                  | FMU 100 Mbps                                                      | FMU 100 Mbps                                                      | -                                                                 | -                                                                 |
