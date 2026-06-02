
# Intel RealSense Integration Guide

**Intel RealSense depth-camera integration for the Lectron PI5 Autopilot.**

| | |
| :-- | :-- |
| **Board** | Lectron PI5 Autopilot |
| **Camera** | Intel RealSense D456i Depth Camera |
| **Middleware** | ROS 2 Jazzy |
| **OS** | Ubuntu |

---

## **Prerequisites**

- Intel RealSense **D456i** depth camera (or compatible RealSense model)
- USB 3.0 Type-C to Type-C cable
- Lectron PI5 Autopilot board
- ROS 2 Jazzy *(required only if using the ROS 2 wrapper)*

!!! note "Info"
    If you plan to use the ROS 2 wrapper, install **ROS 2 Jazzy** before proceeding. Follow the [official installation guide](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html).

---

## **Installation**

### **RealSense SDK 2.0**

**Step 1 — Register the Repository Public Key**

Create the keyring directory and download the signing key:

```bash
sudo mkdir -p /etc/apt/keyrings

curl -sSf https://librealsense.realsenseai.com/Debian/librealsenseai.asc | \
  gpg --dearmor | sudo tee /etc/apt/keyrings/librealsenseai.gpg > /dev/null
```

**Step 2 — Add the Repository**

Register the Intel RealSense APT repository and refresh the package index:

```bash
echo "deb [signed-by=/etc/apt/keyrings/librealsenseai.gpg] \
  https://librealsense.realsenseai.com/Debian/apt-repo \
  $(lsb_release -cs) main" | \
  sudo tee /etc/apt/sources.list.d/librealsense.list

sudo apt-get update
```

**Step 3 — Install the SDK Libraries**

Install the core utilities package (this will also configure udev rules automatically):

```bash
sudo apt-get install librealsense2-utils
```

**Step 4 — Install Optional Packages**

For development headers and debug symbols, install the following additional packages:

```bash
sudo apt-get install librealsense2-dev
sudo apt-get install librealsense2-dbg
```

### **RealSense ROS 2 Wrapper**
Install the RealSense ROS 2 packages for the Jazzy distribution. This provides both the underlying library bindings and the camera node packages:

```bash
sudo apt install ros-jazzy-librealsense2*
sudo apt install ros-jazzy-realsense2*
```

!!! note "Info"
    Replace `jazzy` with your ROS 2 distribution name if you are running a different version.

---

## **Quick Usage**

### **Launching the Camera Node**
Run the following command to start the RealSense camera node. This configuration enables stereo infrared streams, depth output, point cloud generation, and IMU data:

```bash
source /opt/ros/jazzy/setup.bash
ros2 run realsense2_camera realsense2_camera_node \
  --ros-args -r __ns:=/d456 \
  -r __node:=d456 \
  -p unite_imu_method:=2 \
  -p enable_infra1:=true \
  -p enable_infra2:=true \
  -p depth_module.infra_profile:=640x480x30 \
  -p depth_module.depth_profile:=640x480x30 \
  -p pointcloud.enable:=true \
  -p gyro_fps:=200 \
  -p accel_fps:=200
```

### **Parameter Reference**
The table below summarises the key parameters used in the launch command:

| Parameter | Description |
| :-------- | :---------- |
| `__ns:=/d456` | Sets the ROS namespace for the node |
| `__node:=d456` | Assigns a custom node name |
| `unite_imu_method:=2` | Combines accelerometer and gyroscope data into a unified IMU topic using linear interpolation |
| `enable_infra1` / `enable_infra2` | Enables left and right stereo infrared streams |
| `depth_module.infra_profile` | Sets infrared stream resolution and frame rate (640×480 at 30 fps) |
| `depth_module.depth_profile` | Sets depth stream resolution and frame rate (640×480 at 30 fps) |
| `pointcloud.enable` | Enables 3D point cloud generation from the depth stream |
| `gyro_fps` / `accel_fps` | Sets gyroscope and accelerometer sampling rates (200 Hz) |

---

## **References**

Consult the following resources for further information:

- [Linux distribution guide](https://github.com/realsenseai/librealsense/blob/master/doc/distribution_linux.md)
- [librealsense (GitHub)](https://github.com/realsenseai/librealsense)
- [realsense-ros (GitHub)](https://github.com/realsenseai/realsense-ros)
- [ROS 2 Jazzy installation](https://docs.ros.org/en/jazzy/Installation/Ubuntu-Install-Debs.html)
