# Setup

This document describes the Linux for Tegra (L4T) installation process for a **custom Jetson Nano based carrier board**. The packages used are derived from NVIDIA’s official releases and adapted to support board specific hardware components.

!!! tip "Note"
    The steps are written for Jetson Nano. The same procedure applies to other Jetson models; only the Ubuntu version and package names differ.

## **Requirements**

1. [Jetson-210_Linux_R32.7.6_aarch64.tbz2]()
2. [Tegra_Linux_Sample-Root-Filesystem_R32.7.6_aarch64.tbz2]()
3. Host system:
    - Ubuntu 18.04
    - Or Ubuntu 18.04 running inside Docker


!!! info "Info"
    By default, the installation is performed under a `workspace` directory in the user’s home path. A custom directory may be used if preferred

1. **Extracting the L4T Package:** Create the workspace and extract the L4T package (This will create the **Linux_for_Tegra** directory.)
```bash
mkdir ~/workspace
cd ~/workspace
tar xf Jetson-210_Linux_R32.7.6_aarch64.tbz2
```

2. **Installing the Root Filesystem:** Extract the root filesystem into the rootfs directory:
```bash
cd ~/workspace/Linux_for_Tegra/rootfs
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.6_aarch64.tbz2
```

3. **Applying NVIDIA Binary Files:** Run the following script to install NVIDIA-specific binaries into the root filesystem
```bash
cd ~/workspace/Linux_for_Tegra
sudo ./apply_binaries.sh
```

4. **Verifying the Installation:** Verify that the base system was created successfully. (If the file exists, the setup is valid.)
```bash
ls -l rootfs/etc/nv_tegra_release
```

5. **Creating a Default User:** To predefine the default user credentials (`-u`: Username, `-p`: Password, `-n`: Hostname)
```bash
cd ~/workspace/Linux_for_Tegra

sudo ./tools/l4t_create_default_user.sh \
  -u ems \                                       
  -p '1234!' \
  -n lectorn
```

6. **Entering Force Recovery Mode (RCM):**  To flash the device, Jetson Nano must be placed into Force Recovery Mode (RCM).
    - Press and hold Recovery and Reset pins together
    - Wait 15–30 seconds
    - Release Reset first
    - Then release Recovery
    - Connect the board to the host PC via USB Type-B and verify: `lsusb` If NVIDIA Corp. appears, the device is ready for flashing.

7. **Flashing the Device:**
```bash
cd ~/workspace/Linux_for_Tegra
sudo ./flash.sh lectron-nano-emmc mmcblk0p1
```