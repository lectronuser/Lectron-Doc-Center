# Networking
On Jetson (Ubuntu-based) systems, networking can be controlled by three different mechanisms:

1. **NetworkManager (NM)**
2. **`/etc/network/interfaces` (ifupdown)**
3. **Netplan (systemd-networkd or NetworkManager renderer)**

!!! danger "Warning"
    These systems can conflict with each other when active simultaneously, often resulting in issues such as:
    - eth0 being shown as DEVICE --
    - NetworkManager being unable to manage Ethernet
    - Misconfigured profiles being ignored

## **NetworkManager**
The default modern network management system.
- Location: `/etc/NetworkManager/system-connections/`
- Requires correct permissions and ownership
- Handles Ethernet, Wi-Fi, VPN, DHCP, static IP
- If NM does not manage eth0 → Connection appears as `DEVICE --`


### Creating a Fresh eth0 Profile (Recommended)
```bash
# Delete old profile (ignore errors)
sudo nmcli connection delete eth0

# Create a new DHCP profile
sudo nmcli connection add type ethernet ifname eth0 con-name eth0 ipv4.method auto ipv6.method ignore

# Fix permissions
# Without these, NetworkManager can see the profile but cannot activate it.
sudo chmod 600 /etc/NetworkManager/system-connections/eth0
sudo chown root:root /etc/NetworkManager/system-connections/eth0

# Restart NM
sudo nmcli connection reload
sudo systemctl restart NetworkManager

# Bring up the interface
sudo nmcli connection down eth0
sudo nmcli connection up eth0

# Verify assigned IP
ip addr show eth0
```

### Static Setup

```bash
    sudo nano /etc/NetworkManager/system-connections/eth0
```

```
[connection]
id=eth0
type=ethernet
interface-name=eth0
permissions=

[ethernet]
mac-address-blacklist=

[ipv4]
address1=192.168.1.3/24
dns-search=
method=manual

[ipv6]
method=ignore
```

### DHCP Setup
```bash
    sudo nano /etc/NetworkManager/system-connections/eth0
```

```
[connection]
id=eth0
type=ethernet
interface-name=eth0
autoconnect=true

[ipv4]
method=auto

[ipv6]
method=ignore
```


!!! danger "What `DEVICE -` Means (eth0 Not Connecting)"  
    This indicates: NetworkManager sees the connection profile but cannot bind it to the actual eth0 interface.
    On Jetson devices, the eth0 interface may be managed by a different legacy configuration mechanism compared to other network interfaces. If `/etc/network/interfaces` contains an old-style configuration entry for **eth0**, NetworkManager will stop managing this interface, causing it to appear as `DEVICE --` in nmcli. To resolve this, comment out or remove the eth0 lines in the interfaces file. Once these entries are disabled, NetworkManager will correctly take control of the eth0 interface, and the connection will function as expected.



## **ifupdown**
Legacy networking method. If this file contains:

- Location: `/etc/network/interfaces`

```bash
auto eth0
iface eth0 inet dhcp
```

- Then:
    - NetworkManager will NOT manage eth0
    - eth0 becomes unmanaged
    - nmcli shows `DEVICE --`

```bash
auto lo
iface lo inet loopback
```

## **Netplan**

- Installing Netplan (if missing): `sudo apt install netplan.io`
- Controls which backend manages the network: 
    - `renderer: NetworkManager`
    - `renderer: networkd`
- Location: `/etc/netplan/*.yaml`

```yaml
network:
  version: 2
  renderer: NetworkManager
  ethernets:
      enp2s0:
          addresses:
              - 192.168.2.1/16
          nameservers:
              addresses: [192.168.2.1]
          routes:
              - to: 192.168.2.1
                via: 192.168.2.1
```

```bash
sudo netplan try
sudo netplan apply
```

- [Netplan Network Configuration](https://www.linux.com/topic/distributions/how-use-netplan-network-configuration-tool-linux/)
