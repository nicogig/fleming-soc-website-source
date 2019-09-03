---
title: Enviromental Sensor
featured_image: "./temp-pres-hum-intro.png"
description: Learn more about the BME280 Enviromental Sensor, which includes Temperature, Humidity and Pressure sensors.
---
## Overview
This sensor is an environmental sensor that monitors temperature, humidity and air pressure.


## Wiring
To wire the sensors up we have to connect the power supply for the sensor and the connections that are used to send data between the sensor and the Arduino.

**REMEMBER! ALWAYS DISCONNECT THE ARDUINO FROM THE PC WHEN CHANGING WIRES.**

The following table shows the connections you need to make:

| BME280 Sensor | Arduino |
| ------------- | ------- |
| GND           | GND     |
| VIN / 5V      | 5V      |
|SCK|SCL|
|SDI|SDA|

![BME280 Sensor LEDs Connections](./images/sensor-connections.png)

## Getting Ready To Code

First we need to install the library for the sensor if it is not already installed. To do this open the Library Manager by clicking “Sketch>Include Library>Manage Libraries…”

![Arduino Program](./images/screen-1.png)

Using the search box in the top right hand corner of the window that has popped up search for “Adafruit BME280”. It may already be installed but if not click the install button.

![Arduino Library Manager](./images/screen-2.png)

Once the install is complete it should now say the library is installed as shown below. 

![Installed Library](./images/screen-3.png)

Next you have to install a second library called “Adafruit Unified Sensor”. Search for it as you did before and then scroll to the bottom until you find the correct library as shown in the image below.

![Arduino Library Manager](./images/screen-4.png)

Once this is all installed you can now download the demo code from our website and begin working out how to use the sensor!


***

Congrats! You are now ready to tackle the tutorial code.

<button class="mdc-button mdc-button--raised">
  <a href="./code/TempPressHumidTutorial.ino" class="mdc-button__label" style="text-decoration: none;" download>Download the Code</a>
</button> 

***