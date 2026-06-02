
# Hailo-8 AI Accelerator Integration Guide

**Integration Guide and Application Examples for the Hailo-8 AI accelerator on the Lectron PI5 Autopilot (CM5).**

| | |
| :-- | :-- |
| **Platform** | Raspberry Pi CM5 |
| **Accelerator** | Hailo-8 (26 TOPS) |
| **HailoRT** | v4.23.0 |
| **TAPPAS Core** | v5.1.0 |
| **OS** | Ubuntu 24.04 LTS |

---

## **Prerequisites**

Ensure a Hailo device is connected to the board:

```bash
lspci
# Output:
# 0000:01:00.0 Co-processor: Hailo Technologies Ltd. Hailo-8 AI Processor (rev 01)
```

!!! note "Dual Cameras"
    If you are planning to use dual cameras, follow the [CAM1 Port Setup Guide](cam1-setup.md) to enable the second camera first.

Ensure the following packages are installed before proceeding:

```bash
sudo apt update
sudo apt-get install libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev \
  libgstreamer-plugins-bad1.0-dev gstreamer1.0-plugins-base \
  gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly \
  gstreamer1.0-libav gstreamer1.0-tools gstreamer1.0-x gstreamer1.0-alsa \
  gstreamer1.0-gl gstreamer1.0-gtk3 gstreamer1.0-qt5 gstreamer1.0-pulseaudio \
  gstreamer1.0-plugins-base-apps

sudo apt install -y cmake gcc g++ git build-essential \
  linux-headers-$(uname -r) libcamera-dev gstreamer1.0-libcamera libcamera-ipa

sudo add-apt-repository ppa:marco-sonic/rasppios
sudo apt update
sudo apt install rpicam-apps
```

---

## **HailoRT Installation (From Source)**

### **PCIe Driver**
Download `hailort-pcie-driver-<version>.deb` from the Hailo Developer Zone.

!!! note "Info"
    Since the Hailo-8 device is the one used for this document, version **v4.23.0** is downloaded.

If you are working on a headless server, transfer the downloaded `.deb` file using `scp` or a similar tool. Then install the PCIe driver:

```bash
sudo dpkg -i hailort-pcie-driver_4.23.0_all.deb
```

When prompted for DKMS, select **Y**. After installation, reboot directly, or load the driver and verify:

```bash
sudo modprobe hailo_pci
ls /dev/hailo0
```

### **HailoRT Library**

```bash
git clone https://github.com/hailo-ai/hailort.git
cd hailort
git checkout v4.23.0
cmake -S. -Bbuild -DCMAKE_BUILD_TYPE=Release && sudo cmake --build build --config release --target install
```

### **Verify Device**

```bash
hailortcli scan
# Expected: Hailo Devices:
#           [-] Device: 0000:01:00.0
```

!!! warning "Kernel Updates"
    If the kernel is updated, rebuild the PCIe driver with `sudo dpkg-reconfigure hailort-pcie-driver` or reinstall the `.deb` package.

---

## **TAPPAS Core Installation**

Install TAPPAS Core with apt:

```bash
sudo apt install hailo-tappas-core
```

Verify the GStreamer Hailo plugins are loaded:

```bash
gst-inspect-1.0 | grep -i hailo
# Expected: hailonet, hailofilter, hailooverlay, etc.
```

---

## **Camera Verification**

Connected cameras should appear in the kernel log:

```bash
sudo dmesg | grep "Using sensor"
# rp1-cfe 1f00110000.csi: Using sensor imx219 10-0010 for capture
# rp1-cfe 1f00128000.csi: Using sensor imx219 0-0010 for capture
```

Or list cameras with the `rpicam` tools:

```bash
rpicam-hello --list-cameras
```

Test a camera stream with GStreamer:

```bash
gst-launch-1.0 libcamerasrc ! \
  video/x-raw,format=NV12,width=640,height=480 ! \
  fakesink
```

!!! note "Dual-Camera Setups"
    For dual-camera setups, use the `camera-name` property to select a specific sensor. Before running the command, make sure you added the following lines to `/boot/firmware/config.txt` and rebooted the system:
    ```ini
    dtoverlay=imx219,cam0
    dtoverlay=imx219-cam1-custom   # if dual camera
    ```

---

## **Hailo Model Zoo**

Pre-compiled HEF model files for various tasks are available at the [Hailo Model Zoo](https://github.com/hailo-ai/hailo_model_zoo).

| Task | Example Model | Post-Process Library |
| :--- | :------------ | :------------------- |
| Object Detection | `yolov5m` / `yolov8m` | `libyolo_hailortpp_post.so` |
| Pose Estimation | `yolov8m_pose` | `libyolov8pose_post.so` |
| Segmentation | `yolov5seg` | `libyolov5seg_post.so` |
| Classification | `resnet50` | `libclassification.so` |
| Face Detection | `lightface_slim` | `libface_detection_post.so` |

!!! tip "Info"
    Post-process libraries are installed to `/usr/lib/aarch64-linux-gnu/hailo/tappas/post_processes/`.

---

## **GStreamer Pipeline Examples**

### **Object Detection**
Real-time YOLOv5 object detection with bounding-box overlay, displayed locally:

```bash
gst-launch-1.0 \
  libcamerasrc ! video/x-raw,format=NV12,width=640,height=480,framerate=30/1 ! \
  videoconvert ! videoscale ! \
  queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
  hailonet hef-path=yolov5m.hef is-active=true ! \
  queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
  hailofilter function-name=filter \
    so-path=/usr/lib/aarch64-linux-gnu/hailo/tappas/post_processes/libyolo_hailortpp_post.so \
    qos=false ! \
  queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
  hailooverlay ! videoconvert ! \
  fpsdisplaysink video-sink=autovideosink sync=false text-overlay=true
```

### **Dual Camera Pipeline (Object Detection)**
Running inference on two CSI cameras simultaneously using the Hailo-8 round-robin scheduler:

```bash
gst-launch-1.0 \
  libcamerasrc camera-name="<CAMERA_1_NAME>" ! \
  video/x-raw,format=NV12,width=640,height=480,framerate=30/1 ! \
  videoconvert ! videoscale ! \
  queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
  hailonet hef-path=yolov5m.hef scheduling-algorithm=1 vdevice-group-id=shared ! \
  queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
  hailofilter function-name=filter \
    so-path=/usr/lib/aarch64-linux-gnu/hailo/tappas/post_processes/libyolo_hailortpp_post.so \
    qos=false ! \
  queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
  hailooverlay ! videoconvert ! \
  fpsdisplaysink video-sink=autovideosink sync=false text-overlay=true \
  libcamerasrc camera-name="<CAMERA_2_NAME>" ! \
  video/x-raw,format=NV12,width=640,height=480,framerate=30/1 ! \
  videoconvert ! videoscale ! \
  queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
  hailonet hef-path=yolov5m.hef scheduling-algorithm=1 vdevice-group-id=shared ! \
  queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
  hailofilter function-name=filter \
    so-path=/usr/lib/aarch64-linux-gnu/hailo/tappas/post_processes/libyolo_hailortpp_post.so \
    qos=false ! \
  queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
  hailooverlay ! videoconvert ! \
  fpsdisplaysink video-sink=autovideosink sync=false text-overlay=true
```

!!! warning "Note"
    When using `scheduling-algorithm=1` (round-robin), do **not** set `is-active=true`. Both properties are mutually exclusive. Camera names can be obtained from `libcamera-hello --list-cameras` or `gst-device-monitor-1.0 Video | grep name`.

### **Stream over UDP**
**Sender (on the board):**

```bash
gst-launch-1.0 \
  libcamerasrc ! video/x-raw,format=NV12,width=640,height=480,framerate=30/1 ! \
  videoconvert ! videoscale ! \
  queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
  hailonet hef-path=yolov5m.hef is-active=true ! \
  queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
  hailofilter function-name=filter \
    so-path=/usr/lib/aarch64-linux-gnu/hailo/tappas/post_processes/libyolo_hailortpp_post.so qos=false ! \
  queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
  hailooverlay ! videoconvert ! \
  video/x-raw,format=I420 ! x264enc tune=zerolatency bitrate=3000 \
  speed-preset=ultrafast ! rtph264pay config-interval=1 pt=96 ! udpsink \
  host=<host_ip> port=5000 sync=false
```

**Receiver (on the viewing machine):**

```bash
gst-launch-1.0 \
  udpsrc port=5000 caps="application/x-rtp,encoding-name=H264,payload=96" ! \
  rtph264depay ! h264parse ! avdec_h264 ! videoconvert ! autovideosink sync=false
```

!!! note "Info"
    When using a dual camera, add the part after `videoconvert` to the second camera pipeline after changing the port.

### **File Input**
First download the provided sample video:

```bash
wget https://hailo-csdata.s3.eu-west-2.amazonaws.com/resources/video/example_640.mp4
```

=== "Stream the result over UDP"

    ```bash
    gst-launch-1.0 \
      filesrc location=example_640.mp4 ! decodebin ! \
      videoconvert ! videoscale ! \
      video/x-raw,format=NV12,width=640,height=480 ! \
      queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
      hailonet hef-path=yolov5m.hef is-active=true ! \
      queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
      hailofilter function-name=filter \
        so-path=/usr/lib/aarch64-linux-gnu/hailo/tappas/post_processes/libyolo_hailortpp_post.so qos=false ! \
      queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
      hailooverlay ! videoconvert ! \
      video/x-raw,format=I420 ! x264enc tune=zerolatency bitrate=3000 \
      speed-preset=ultrafast ! rtph264pay config-interval=1 pt=96 ! udpsink \
      host=<host_ip> port=5000 sync=false
    ```

=== "Save the result to a file"

    ```bash
    gst-launch-1.0 \
      filesrc location=example_640.mp4 ! qtdemux ! h264parse ! avdec_h264 ! \
      videoconvert ! videoscale ! \
      video/x-raw,format=RGB,width=640,height=640 ! \
      queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
      hailonet hef-path=yolov5m.hef is-active=true force-writable=true ! \
      queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
      hailofilter function-name=filter \
        so-path=/usr/lib/aarch64-linux-gnu/hailo/tappas/post_processes/libyolo_hailortpp_post.so \
        qos=false ! \
      queue leaky=no max-size-buffers=30 max-size-bytes=0 max-size-time=0 ! \
      hailooverlay ! videoconvert ! \
      video/x-raw,format=I420 ! x264enc tune=zerolatency bitrate=3000 \
      speed-preset=ultrafast ! mp4mux ! \
      filesink location=output_detection.mp4
    ```

Send the result video to your computer and play it:

```bash
# Send the video (scp example)
scp output_detection.mp4 <target_place>

# On the computer
vlc output_detection.mp4
```

---

## **Pipeline Element Reference**

| Element | Description |
| :------ | :---------- |
| `libcamerasrc` | Captures video from CSI cameras via libcamera |
| `videoscale` | Resizes frames to match the neural-network input dimensions |
| `hailonet` | Sends frames to the Hailo-8 accelerator for inference |
| `hailofilter` | Applies post-processing to extract detections from raw output tensors |
| `hailooverlay` | Draws bounding boxes, keypoints, and labels on the video frame |
| `fpsdisplaysink` | Displays video with an FPS counter overlay |

---

## **References**

| Resource | Link |
| :------- | :--- |
| Hailo Model Zoo | [github.com/hailo-ai/hailo_model_zoo](https://github.com/hailo-ai/hailo_model_zoo) |
| TAPPAS Documentation | [github.com/hailo-ai/hailo-apps-core](https://github.com/hailo-ai/hailo-apps-core) |
| HailoRT Documentation | [hailo.ai/developer-zone](https://hailo.ai/developer-zone) |
| Hailo RPi5 Examples | [github.com/hailo-ai/hailo-rpi5-examples](https://github.com/hailo-ai/hailo-rpi5-examples) |
| Hailo Developer Zone | [hailo.ai/developer-zone](https://hailo.ai/developer-zone/) |
