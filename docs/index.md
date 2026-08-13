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

| Feature          | Jetson Autopilot                      | Pi5 Autopilot                           | FPV            | FPV Pro                     |
| ---------------- | ------------------------------------- | ----------------------------------------| ---------------| --------------------------- |
| Mission Computer | Jetson Nano / Xavier NX / TX2 NX      | Raspberry Pi CM5                        | -              | -                           |
| Camera Interface | 2 × 15Pin CSI                         | 2 × 22Pin CSI                           | -              | -                           |
| FMU Processor    | STM32H753                             | STM32H753                               | STM32H743      | STM32H743                   |
| IO Processor     | STM32F103                             | STM32F103                               | -              | -                           |
| Power Input      | 9V - 26V (3S-6S LiPo), XT30           | 9V - 26V (3S-6S LiPo), XT30             | -              | -                           |
| USB 2.0          | 1 × Mini-B                            | 1 × Micro (host)                        | -              | -                           |
| USB 3.0          | 2 × Type-C                            | 3 × Type-C                              | 1 × Type-C     | 1 × Type-C                  |
| CAN              | 1 × Jetson, 1 × FMU                   | 1 × Rpi, 1 × FMU                        | -              | 1                           |
| Telem            | 3                                     | 2                                       | -              | 1                           |
| Ethernet         | 2 × 100 Mbps (onboard switch)         | 1 × 1 Gbps (CM5) + 1 × 100 Mbps (FMU)   | -              | 1 × 100 Mbps                |
| PWM Outputs      | 8 FMU + 8 IO                          | 8 FMU + 8 IO                            | 9 FMU          | 9 FMU                       |
| IMU              | Dual ICM-42670-P & Bosch BMI270       | Dual ICM-42670-P & Bosch BMI270         | ICM-42688-P    | ICM-42688-P & LSM6DSV16BXTR |
| Barometer        | Dual Bosch BMP390                     | Dual Bosch BMP390                       | BMP581         | BMP581                      |
| Magnetometer     | Bosch BMM350                          | Bosch BMM350                            | IST8310        | IST8310                     |
| Size             | 63.4 × 103.5 × 43.6 mm                | 67.1 × 118.9 × 30.1 mm                  | 36 × 36 mm     | 36 × 36 mm                  |
| Weight           | 224.4 g (without Jetson module)       | 147.6 g (without CM5 and Hailo)         | 8 g            | 9 g                         |
