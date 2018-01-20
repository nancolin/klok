import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.TimeZone;

import processing.serial.*;
import cc.arduino.*;

Arduino arduino;

Transform transform = new Transform();
TZ tz = new TZ();
Text myText = new Text();
PFont font;

String time = "";
Boolean toggle = true;
long lastTimeCheck = 1;

color black = color(255, 255, 255);
color white = color(  0,   0,   0);

int x = 0;

void setup() {
  size(displayWidth, displayHeight);
  if (frame != null) {
    frame.setResizable(true);
  }
  
  println(Arduino.list());
  arduino = new Arduino(this, Arduino.list()[0], 57600);
  
  for (int i = 0; i <= 13; i++) {
    arduino.pinMode(i, Arduino.INPUT);
  }
  
  Tick tick = new Tick(arduino);
  tick.start();
}

void draw() {  
  if (arduino.digitalRead(4) == Arduino.LOW) {
    background(black);
    fill(white);  
  } else {
    background(white);
    fill(black);
  }
  
  // for (int i = 0; i <= 13; i++); {
  //   line(x,20,x+20,20);
  //   x=x+40;
  // }
    
  
  tz.update();
  myText.display(); 
}

void mouseClicked() {
  switchToggle();
}

void keyPressed() {
  switchToggle();
  if (key == ESC) {
    exit();
  }
}

void switchToggle() {
  if (toggle) {
    toggle = false;
  } else {
    toggle = true;
  }
}

boolean timeCheck() {
  long time = System.currentTimeMillis();
  if (time - lastTimeCheck > 1000) {
    lastTimeCheck = time;
    return true;
  } else {
    return false;
  }
}
