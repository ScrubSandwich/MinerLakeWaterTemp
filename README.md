# MinerLakeWaterTemp
## https://minerlakewatertemperature.web.app/


# Setup

## Clone Repository

#### `$ cd /home/pi`
#### `$ git clone https://github.com/ScrubSandwich/MinerLakeWaterTemp.git`


## Add Support for the OneWire library

### Open Boot Config File
#### `$ sudo nano /boot/config.txt`

### Add the this line at the bottom
#### `dtoverlay=w1-gpio`


## Run Python script on boot

### Open the .bashrc file
#### `$ sudo nano /home/pi/.bashrc`

###  Add the following lines: 
#### `echo Running MinerLakeWaterTemp Sensor Python Program from .bashrc file`
#### `sudo python /home/pi/MinerLakeWaterTemp/sensor/water_temp.py`


## Enter SSID's and Passwords of WiFi networks to connect to

### Open the Network Interfaces File
#### `$ sudo nano /etc/network/interfaces`

### Make sure the first line is the following:
#### `auto wlan0`

### Add the following lines at the bottom
#### `allow-hotplug wlan0`
#### `iface wlan0 inet dhcp`
#### `wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf`
#### `iface default inet dhcp`

### Open the wpa_supplicant.conf File
#### `$ sudo nano /etc/wpa_supplicant/wpa_supplicant.conf`

### Add these lines to the file

	network={
		ssid="YOUR_NETWORK_NAME"
		psk="YOUR_NETWORK_PASSWORD"
	}


## Reboot to Apply All Changes
#### `$ sudo reboot`

