# MinerLakeWaterTemp
## https://minerlakewatertemperature.web.app/


# Setup

## Clone Repository

### `cd /home/pi`
### `git clone https://github.com/ScrubSandwich/MinerLakeWaterTemp.git`


## Add Support for the OneWire library

### Open Boot Config File
### `sudo nano /boot/config.txt`

### Add the this line at the bottom
### dtoverlay=w1-gpio


## Run Python script on boot

### Open the .bashrc file
### `sudo nano /home/pi/.bashrc`

###  Add the following lines: 
### `echo Running MinerLakeWaterTemp Sensor Python Program from .bashrc file`
### `sudo python /home/pi/MinerLakeWaterTemp/sensor/water_temp.py`


## Enter SSID's and Passwords of WiFi networks to connect to



## Reboot to Apply All Changes
### `sudo reboot`

