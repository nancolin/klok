import cc.arduino.*;

class Tick extends Thread {
  
  private volatile boolean running = true;
  Arduino _arduino;
  
  public Tick(Arduino arduino) {
    _arduino = arduino;
  }
  
  @Override
  public void run() {
    
    String tempTime;
    
    while (running) {
      
        DateFormat style = new DateFormat(tz.current);
        Date date = Calendar.getInstance().getTime();
  
        if (_arduino.digitalRead(2) == Arduino.LOW) {
          if (_arduino.digitalRead(7) == Arduino.HIGH) {
             tempTime = style.hms24.format(date);
             if (_arduino.digitalRead(3) == Arduino.HIGH) {
               time = transform.toSimpleKanji(tempTime);
             } else {
               time = transform.toKanji(tempTime);
             }
          } else {
            time = style.hms24.format(date);
          }
        } else {
           if (_arduino.digitalRead(7) == Arduino.HIGH) {
             tempTime = style.hms12.format(date);
             if (_arduino.digitalRead(3) == Arduino.HIGH) {
               time = transform.toSimpleKanji(tempTime);
             } else {
               time = transform.toKanji(tempTime);
             }
          } else {
            time = style.hms12.format(date);
          }
        }
        
        myText.date = style.date.format(date);
        
        try {
          Thread.sleep(100);
        } catch (InterruptedException e) {
          e.printStackTrace();
        }
        
     }
    
  }
  
  public void shutdown() {
    running = false;
  }
  
}
