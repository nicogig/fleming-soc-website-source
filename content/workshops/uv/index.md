---
title: UV
featured_image: "./uv-intro.png"
description: Learn more about the UV Spectrum, the UV sensor, and how to use it with Arduino.
---
## Overview
This sensor is capable of detecting light in the UV, visible and infrared frequencies. 

If you'd like to know more about the UV scale and when UV rays start to become dangerous, <a href="./materials/UVExplained.pdf" class="external-link" download>click here</a>.


## Wiring
To wire the sensors up we have to connect the power supply for the sensor and the connections that are used to send data between the sensor and the Arduino.

**REMEMBER! ALWAYS DISCONNECT THE ARDUINO FROM THE PC WHEN CHANGING WIRES.**

The following table shows the connections you need to make:

| UV Sensor     | Arduino |
| ------------- | ------- |
| GND           | GND     |
| VIN / 5V      | 5V      |
|SCL|SCL|
|SDA|SDA|

![UV Sensor LEDs Connections](./images/uv-connections.png)

## Getting Ready To Code

First we need to install the library for the sensor if it is not already installed. To do this open the Library Manager by clicking “Sketch>Include Library>Manage Libraries…”

![Arduino Program](./images/screen-1.png)

Using the search box in the top right hand corner of the window that has popped up search for “Adafruit SI1145”. It may already be installed but if not click the install button.

![Arduino Library Manager](./images/screen-2.png)

Once the install is complete it should now say the library is installed as shown below. 

![Installed Library](./images/screen-3.png)

Once this is all installed you can now download the demo code from our website and begin working out how to use the sensor!

***

Congrats! You are now ready to tackle the tutorial code.

<button class="mdc-button mdc-button--raised">
  <a href="./code/UVTutorialCode.ino" class="mdc-button__label" style="text-decoration: none;" download>Download the Code</a>
</button> 

***