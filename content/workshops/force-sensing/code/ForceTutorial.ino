{\rtf1\ansi\ansicpg1252\cocoartf2484
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\ri-340\sb100\sa100\partightenfactor0

\f0\fs20 \cf0 int FSR_Pin = A0; //analog pin 0\
void setup()\{\uc0\u8232 Serial.begin(9600);\u8232 \}\
void loop()\{\uc0\u8232 int FSRReading = analogRead(FSR_Pin); \
Serial.println(FSRReading);\uc0\u8232 delay(250); //just here to slow down the output for easier reading\u8232 \}\
}