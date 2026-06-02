
# FMU ↔ CM5 Serial Communication Guide

**UART / ROS 2 / uXRCE-DDS** — serial link between the Flight Management Unit (FMU) and the Raspberry Pi Compute Module 5 (CM5).

| | |
| :-- | :-- |
| **Platform** | Raspberry Pi CM5 |
| **Transport** | UART (USART2 / TELEM3 ↔ UART3) |
| **Baud Rate** | 921600 |
| **Middleware** | uXRCE-DDS v2.4.2 + ROS 2 |
| **OS** | Ubuntu 24.04 LTS |

---

## **Overview**

This document describes how to establish serial UART communication between the **FMU** and the **CM5**. Once the link is configured, ROS 2 topics are exposed via the uXRCE-DDS bridge, allowing the companion computer to read telemetry from the FMU and send commands back to it.

### **Architecture**

| FMU Side | Link | Port | CM5 Side |
| :------- | :--: | :--- | :------- |
| FMU USART2 (TELEM3) | ↔ | `/dev/ttyAMA3` | CM5 UART3 → MicroXRCEAgent → ROS 2 |

---

## **Prerequisites**

ROS 2 must be installed on the CM5 before proceeding. Install the distribution appropriate for Ubuntu 24.04 LTS (**ROS 2 Jazzy Jalisco**) by following the [official ROS 2 installation documentation](https://docs.ros.org/en/jazzy/Installation.html).

!!! note "Info"
    After installation, source the ROS 2 setup script in every terminal session: `source /opt/ros/jazzy/setup.bash`. Add this line to `~/.bashrc` for persistence.

### **Required Build Tools**

```bash
sudo apt install -y cmake gcc g++ git build-essential
```

### **Enable UART3 on CM5**
The UART3 device (`/dev/ttyAMA3`) is not enabled by default on the Raspberry Pi CM5. It must be activated by adding a device tree overlay to the boot configuration.

Open the boot configuration file:

```bash
sudo nano /boot/firmware/config.txt
```

Add the following line at the end of the file:

```ini
dtoverlay=uart3
```

Save the file and reboot the CM5:

```bash
sudo reboot
```

After rebooting, verify the device node is present:

```bash
ls /dev/ttyAMA3
```

!!! warning "Note"
    If `/dev/ttyAMA3` does not appear after reboot, confirm that the `dtoverlay=uart3` line was saved correctly and that no conflicting overlays are present in `config.txt`.

---

## **Micro XRCE-DDS Agent Installation**

The Micro XRCE-DDS Agent runs on the CM5 and bridges the serial UART link to ROS 2 DDS topics. It translates uORB messages from PX4 into standard ROS 2 topics.

The steps below follow the procedure used on this platform. You can also follow the [official PX4 documentation](https://docs.px4.io/main/en/middleware/uxrce_dds#install-standalone-from-source) for the standalone source installation.

### **Clone and Build**
Set a source directory variable and build from tag `v2.4.2`:

```bash
cd $SOURCE_DIR
git clone -b v2.4.2 https://github.com/eProsima/Micro-XRCE-DDS-Agent.git
cd Micro-XRCE-DDS-Agent
mkdir build && cd build
cmake ..
make
sudo make install
sudo ldconfig /usr/local/lib/
```

### **Known Build Issue — FastDDS Checkout Error**

!!! warning "Note"
    During the `make` step you may encounter: `Failed to checkout tag: '2.12.x'`. Follow the fix below before re-running `make`.

Open the top-level `CMakeLists.txt` in the Micro-XRCE-DDS-Agent repository and locate the FastDDS version lines. Change them as follows:

```cmake
# BEFORE (causes error)
set(_fastdds_version 2.12)
set(_fastdds_tag 2.12.x)

# AFTER (working fix)
set(_fastdds_version 2.10)
set(_fastdds_tag v2.10.6)
```

After making this change, re-run `make` and `sudo make install` from the `build` directory.

---

## **FMU Configuration (QGroundControl)**

The FMU must be configured to output uXRCE-DDS traffic on its **TELEM3 (USART2)** port. Connect the FMU to your computer via USB, open QGroundControl, and apply the following parameters.

### **Enable uXRCE-DDS on TELEM3**

| Parameter | Value | Description |
| :-------- | :---- | :---------- |
| `UXRCE_DDS_CFG` | TELEM 3 | Enables uXRCE-DDS bridge on TELEM3 port |
| `SER_TEL2_BAUD` | 921600 | Sets TELEM3 baud rate to match CM5 agent |

### **Reboot Sequence**

1. Set `UXRCE_DDS_CFG = TELEM 3` and reboot the FMU.
2. After reboot, set `SER_TEL2_BAUD = 921600`.
3. Reboot the FMU a second time.

!!! warning "Note"
    If the USB cable remains connected after configuration, the serial bridge may not initialise correctly. In that case, disconnect USB, then power-cycle the entire system (power off → power on) before starting the agent on the CM5.

---

## **Starting the Micro XRCE-DDS Agent**

On the CM5, run the agent pointing at UART3 with the same baud rate configured on the FMU:

```bash
MicroXRCEAgent serial --dev /dev/ttyAMA3 -b 921600
```

Successful output looks similar to:

```text
[1780390531.449572] info     | TermiosAgentLinux.cpp | init                  | running... | fd: 3
[1780390531.449965] info     | Root.cpp              | set_verbose_level     | logger setup | verbose_level: 4
[1780390531.975687] info     | Root.cpp              | create_client         | create | client_key: 0x00000001, session_id: 0x81
[1780390531.975743] info     | SessionManager.hpp    | establish_session     | session established | client_key: 0x00000001, address: 1
[1780390531.982647] info     | ProxyClient.cpp       | create_participant    | participant created | client_key: 0x00000001, participant_id: 0x001(1)
[1780390531.985464] info     | ProxyClient.cpp       | create_topic          | topic created | client_key: 0x00000001, topic_id: 0x800(2), participant_id: 0x001(1)
[1780390531.985575] info     | ProxyClient.cpp       | create_subscriber     | subscriber created | client_key: 0x00000001, subscriber_id: 0x800(4), participant_id: 0x001(1)
[1780390531.987579] info     | ProxyClient.cpp       | create_datareader     | datareader created | client_key: 0x00000001, datareader_id: 0x800(6), subscriber_id: 0x800(4)
```

---

## **Verifying the Connection**

### **List Available Topics**
In a new terminal (with ROS 2 sourced), run:

```bash
ros2 topic list
```

You should see the full set of `/fmu/in/*` and `/fmu/out/*` topics. A verified output from this platform is shown below:

```text
/fmu/in/actuator_motors
/fmu/in/actuator_servos
/fmu/in/arming_check_reply
/fmu/in/aux_global_position
/fmu/in/config_control_setpoints
/fmu/in/config_overrides_request
/fmu/in/differential_drive_setpoint
/fmu/in/goto_setpoint
/fmu/in/manual_control_input
/fmu/in/message_format_request
/fmu/in/mode_completed
/fmu/in/obstacle_distance
/fmu/in/offboard_control_mode
/fmu/in/onboard_computer_status
/fmu/in/register_ext_component_request
/fmu/in/sensor_optical_flow
/fmu/in/telemetry_status
/fmu/in/trajectory_setpoint
/fmu/in/unregister_ext_component
/fmu/in/vehicle_attitude_setpoint
/fmu/in/vehicle_command
/fmu/in/vehicle_command_mode_executor
/fmu/in/vehicle_mocap_odometry
/fmu/in/vehicle_rates_setpoint
/fmu/in/vehicle_thrust_setpoint
/fmu/in/vehicle_torque_setpoint
/fmu/in/vehicle_trajectory_bezier
/fmu/in/vehicle_trajectory_waypoint
/fmu/in/vehicle_visual_odometry
/fmu/out/battery_status
/fmu/out/estimator_status_flags
/fmu/out/failsafe_flags
/fmu/out/manual_control_setpoint
/fmu/out/position_setpoint_triplet
/fmu/out/sensor_combined
/fmu/out/timesync_status
/fmu/out/vehicle_attitude
/fmu/out/vehicle_control_mode
/fmu/out/vehicle_local_position
/fmu/out/vehicle_odometry
/fmu/out/vehicle_status
/parameter_events
/rosout
```

### **Echo a Topic**
To verify live data is flowing from the FMU, echo a telemetry topic:

```bash
# Vehicle attitude (quaternion)
ros2 topic echo /fmu/out/vehicle_attitude

# Local position (NED frame)
ros2 topic echo /fmu/out/vehicle_local_position

# Battery status
ros2 topic echo /fmu/out/battery_status
```

### **Check Topic Frequency**

```bash
ros2 topic hz /fmu/out/vehicle_attitude
```

---

## **References**

- [Micro XRCE-DDS Agent](https://github.com/eProsima/Micro-XRCE-DDS-Agent)
- [PX4 uXRCE-DDS](https://docs.px4.io/main/en/middleware/uxrce_dds.html)
- [PX4 ROS 2 User Guide](https://docs.px4.io/main/en/ros2/user_guide.html)
- [PX4 Parameter UXRCE_DDS_CFG](https://docs.px4.io/main/en/advanced_config/parameter_reference#UXRCE_DDS_CFG)
- [PX4 Parameter SER_TEL2_BAUD](https://docs.px4.io/main/en/advanced_config/parameter_reference#SER_TEL2_BAUD)
- [ROS 2 Jazzy Installation](https://docs.ros.org/en/jazzy/Installation.html)
