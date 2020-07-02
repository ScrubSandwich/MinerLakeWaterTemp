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
# Delay between readins to be sent to server in seconds
rate = 15 * MINUTE

# Time to wait on first run to make sure wifi is connected
initial_time = 2 * MINUTE

url = "https://us-central1-minerlakewatertemperature.cloudfunctions.net/api/addTemperature"
payload = {}

def read_data():
    f = open(device_file, 'r')
    lines = f.readlines()
    f.close()

    return lines

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


# WAIT for some time to make sure wifi is connected!
print("Waiting for wifi to connect on boot...")
time.sleep(initial_time)
print("Finished waiting for wifi to connect...\nStarting process now...")

while True:
    temp_f = read_temp()
    payload = {'tempF': temp_f}
    x = requests.post(url, data = payload)
    stream = os.popen('vcgencmd measure_temp')
    cpu_temp = stream.read()
    print("Water Temp: " + str(temp_f) + " degrees F")
    print("CPU Temp: " + cpu_temp)
    if (x.status_code == 200):
        print("Success")
    else:
        print("Fail")
    print("________________________")

    time.sleep(rate)