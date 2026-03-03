# Specification


## **Jetson & System Support**

<div class="image-row">
  <img src="/images/jetson/board_7.png" alt="Jetson Board">
  <img src="/images/jetson/board_8.png" alt="Jetson Board">
</div>



| Feature | Description |
|-------|---------------|
| Supported Jetson Modules | Jetson Nano, Xavier NX, AGX Xavier, Orin |
| SoM Connector            | 260-Pin DDR4 SODIMM |
| Power Regulation         | Dedicated 5.1 V – 5 A rail |
| Cooling                  | Active & passive advanced rail cooling |
| Camera Interface         | 2 × 15-Pin, 1 mm pitch CSI |
| USB                      | USB 3.0 Type-C (2 A), USB 2.0 Mini-B |
| Debug                    | Debug UART, Force Recovery & Reset |
| Ethernet                 | 2 × 4-Pin, 100 Mbps |
| GPIO                     | 1 × 10-Pin |
| I2C                      | 2 × 4-Pin (isolated buses) |
| UART                     | 1 × 4-Pin (isolated buses) |
| CAN                      | 1 × 4-Pin |
| SPI                      | 1 × 6-Pin |
| CSI Camera               | 2x 15-pin FFC |
| Sensor                   | BMI270 (SPI) |



## **Pixhawk & System Support**

<div class="image-row">
  <img src="/images/jetson/board_9.png" alt="Jetson Board">
  <!-- <img src="/images/jetson/board_2.png" alt="Jetson Board"> -->
</div>


| Feature | Description |
|-------|---------------|
| Supported Autopilots   | Pixhawk 5X, Pixhawk 6X |
| FMU Processor          | STM32H753IIK6TR (32-bit Arm® Cortex®-M7, 480MHz, 2MB flash memory, 1MB RAM)|
| IO Processor           | STM32F103 (32 Bit Arm® Cortex®-M3, 72MHz, 64KB SRAM) |
| Power Regulation       | Dedicated 5.1 V – 3 A rail |
| Power Distribution     | Onboard regulated |
| Ethernet               | Embedded 100 Mbps |
| Port Compatibility     | Pixhawk & Jetson standards |
| Cooling                | Designed for heavy workloads |
| Main Connectors        | 100-Pin & 50-Pin Hirose DF40 |
| TELEM                  | 2 × 6-Pin JST-GH (UART4 and I2C3) |
| GPS                    | Full (10-Pin), Basic (6-Pin) |
| CAN                    | 1 × 4-Pin |
| I2C                    | 1 × 4-Pin |
| UART                   | 1 × 4-Pin |
| FMU USB                | USB Type-C, 5V VBUS sense |
| RC / SBUS              | PPM, S.BUS, DSM (5-Pin JST-GH) |
| PWM Outputs            | 8 Channels FMU + 8 Channels IO (10-Pin JST-GH) |
| Ethernet               | 1 × 4-Pin |
| FMU/IO Debug Interface | SWD (10-Pin JST-SH) |
| Jetson Link            | UART or Ethernet |
| FMU Onboard Sensors    | IMU: ICM-42670-P (SPI) | Barometer: BMP390 (SPI) | FRAM: FM25V02A | EEPROM: AT24C02D |
| Sensor Board           | IMU1: BMI270 (SPI), IMU2: ICM-42670-P (SPI), Barometer:BMP390 (SPI), Magnetometer: BMM350 (I2C), EEPROM: 24LC64T |


## **Power Architecture**


<div class="image-row">
  <img src="/images/jetson/board_10.png" alt="Jetson Board">
  <img src="/images/jetson/board_6.png" alt="Jetson Board">
</div>


| Feature | Description |
|-------|---------------|
| Power-In           | XT30 with reverse protection, soft-start |
| Input Voltage      | 7V – 28V (3S-6S LiPo) |
| Power Monitor      | Internal Voltage & external I2C Current Monitor |
| Bulk Capacitor     | 220 uF |
| 5.0 V Rail         | 5.0 V – 3 A (Pixhawk & outputs) |
| 5.1 V Rail         | 5.1 V – 5 A (Jetson & peripherals) |
| 12 V Rail          | 12 V – 2 A (sensors/actuators) |
| Protection         | Over-current & short-circuit sensing |
| Battery Monitoring | Input voltage sensing |


## **Thermal Management**

<div class="image-row">
  <img src="/images/jetson/board_4.png" alt="Jetson Board">
  <img src="/images/jetson/board_5.png" alt="Jetson Board">
</div>

| Feature | Description |
|-------|---------------|
| Fans           | 2 × 12 VDC, 12 W Intake Blower |
| Fan Control    | Jetson fan framework or On/Off |
| Airflow        | Forced convection over heat-sink |


![Jetson Custom Board](../../images/jetson/board_12.png)