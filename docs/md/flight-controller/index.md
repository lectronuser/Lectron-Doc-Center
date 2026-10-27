# Flight Controllers

Lectron standalone flight controllers are built around the STM32H7 family and run PX4 and ArduPilot, with the FPV boards also supporting iNav and Betaflight.

## **Products**

| Product | Description |
| --- | --- |
| [Lectron H7 FPV](../h7-fpv/index.md) | Compact, lightweight FPV flight controller for racing and freestyle builds. |
| [Lectron H7 FPV Pro](../h7-fpv-pro/index.md) | High-performance FPV flight controller with 3S - 12S input and CAN. |
| [Lectron H7 Matrix](../h7-matrix/index.md) | High channel count flight controller with 14 PWM outputs and 3 × CAN. |

## **Comparison**

| Feature | H7 FPV | H7 FPV Pro | H7 Matrix |
| --- | --- | --- | --- |
| **FMU Processor** | STM32H743 | STM32H743 | STM32H743 |
| **IO Processor** | - | - | - |
| **Power Input** | 3S - 12S (9V - 54V) | 3S - 12S (9V - 54V) | 5V - 5.5V (1 × I2C Power Port) |
| **Case** | Aluminum | Aluminum | Aluminum |
| **IMU** | ICM-42688-P | ICM-42688-P | ICM-42688-P<br>LSM6DSV16BXTR |
| **Barometer** | Bosch BMP581 | Bosch BMP581 | Bosch BMP581 |
| **Magnetometer** | IST8310 | IST8310 | IST8310 |
| **Storage** | microSD | microSD | microSD & FRAM |
| **Software Support** | PX4<br>ArduPilot<br>Inav<br>Betaflight | PX4<br>ArduPilot<br>Inav<br>Betaflight | PX4<br>ArduPilot |
| **PWM Outputs** | 9 × FMU | 9 × FMU | 14 × FMU |
| **Ports** | RC IN(SBUS)<br>GPS<br>Telem | RC IN(SBUS)<br>GPS<br>Telem | RC IN(SBUS)<br>GPS1, GPS2<br>2 × Telem<br>11Pin SPI<br>2 × I2C |
| **Operating Temperature** | -25°C to +85°C | -25°C to +85°C | -25°C to +85°C |
| **USB** | Type-C USB2.0 | Type-C USB2.0 | Type-C USB2.0 |
| **CAN** | - | 1 × FMU | 3 × FMU |
| **Dimensions** | 36 × 36 mm | 36 × 36 mm | 40 × 40 × 18 mm |
| **Weight** | 10 g | 10 g | 35 g |
| **Ethernet** | - | - | FMU 100 Mbps |
