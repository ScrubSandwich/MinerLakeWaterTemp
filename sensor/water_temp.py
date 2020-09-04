# Miner Lake Water Temperature Sensor

import os
import glob
import time
import requests

os.system('modprobe w1-gpio')
os.system('modprobe w1-therm')

base_dir = '/sys/bus/w1/devices/'
device_folder = glob.glob(base_dir + '28*')[0]
device_file = device_folder + '/w1_slave'

MINUTE = 60
# Delay in seconds between readins to be sent to server
rate = 15 * MINUTE

# Time to wait in seconds on first run to make sure wifi is connected
initial_time = 1 * MINUTE

url = "https://us-central1-minerlakewatertemperature.cloudfunctions.net/api/addTemperature"
log = "../log/log.txt"

# Used for running 'git pull' to update the software
updateCount = 0
updateFrequency = 55

status_code = -1

def write_file(message):
    f = open(log, "a")  # append mode 
    f.write(message)
    f.write("\n") 
    f.close()
    
    print(message)

def read_data():
    f = open(device_file, 'r')
    lines = f.readlines()
    f.close()

    return lines

def reboot():
    write_file("Rebooting...")
    os.popen('sudo reboot')

def update():
    try:
        write_file("Checking for Update...\n")
        git_pull_output = os.popen('sudo git pull')
        write_file("\nUpdate complete.")
    except Exception as e:
        write_file("Update Failed: " + str(e))
        #reboot()

def read_temp():
    lines = read_data()
    while lines[0].strip()[-3:] != 'YES':
        lines = read_data()
    equals_pos = lines[1].find('t=')
    if equals_pos != -1:
        temp_string = lines[1][equals_pos+2:]
        temp_c = float(temp_string) / 1000.0
        temp_f = temp_c * 9.0 / 5.0 + 32.0

        return temp_f

# Wait for wifi to connect
write_file("Waiting for wifi to connect on boot...")
time.sleep(initial_time)
write_file("Finished waiting for wifi to connect...")

update()

while True:
    temp_f = read_temp()
    cpu_temp = os.popen('vcgencmd measure_temp').read()

    try:
        x = requests.post(url, data = {'tempF': temp_f})
        status_code = x.status_code
    except:
        write_file("Cannot POST to server")
        reboot()

    write_file("Water Temp: " + str(temp_f) + " degrees F")
    write_file("CPU Temp: " + cpu_temp)

    updateCount = updateCount + 1
    if (updateCount == updateFrequency):
        update()
        reboot()

    if (status_code == 200):
        write_file("POST Success")
    else:
        write_file("Bad request")
        reboot()
    write_file("")

    time.sleep(rate)
