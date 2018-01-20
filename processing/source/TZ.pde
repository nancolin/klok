class TZ {
  
  private int toggleTZ = 0;
  
  public TimeZone current = TimeZone.getDefault();

  public final TimeZone Default = TimeZone.getDefault();
  public final TimeZone PST = TimeZone.getTimeZone("America/Los_Angeles"); // -8 UTC
  public final TimeZone MST = TimeZone.getTimeZone("America/Denver");      // -7 UTC
  public final TimeZone CST = TimeZone.getTimeZone("America/Chicago");     // -6 UTC
  public final TimeZone EST = TimeZone.getTimeZone("America/Toronto");     // -5 UTC
  public final TimeZone AST = TimeZone.getTimeZone("Atlantic/Bermuda");    // -4 UTC
  public final TimeZone GMT = TimeZone.getTimeZone("Europe/London");       //  0 UTC
  public final TimeZone CET = TimeZone.getTimeZone("Europe/Amsterdam");    // +1 UTC
  public final TimeZone EET = TimeZone.getTimeZone("Europe/Athens");       // +2 UTC
  public final TimeZone MSK = TimeZone.getTimeZone("Europe/Moscow");       // +3 UTC
  public final TimeZone CNT = TimeZone.getTimeZone("Asia/Shanghai");       // +8 UTC
  public final TimeZone JST = TimeZone.getTimeZone("Asia/Tokyo");          // +9 UTC
  public final TimeZone ACT = TimeZone.getTimeZone("Australia/ACT");       // +10 UTC
  
  public boolean TZToggled = false;
  public void update() {
    
    if (arduino.digitalRead(8) == Arduino.HIGH) {
      if(TZToggled == false){
        toggleTZ++;
        TZToggled = true;
      }
    }
    if (arduino.digitalRead(8) == Arduino.LOW) {
      if(TZToggled == true){
        toggleTZ++;
        TZToggled = false;
      }
    }
    
    switch (toggleTZ) {
      case 1 : 
        current = PST;
        myText.region = "Pacific Standard Time (UTC-8)";
        break;
      case 2 : 
        current = GMT;
        myText.region = "Greenwich Mean Time (UTC)";
        break;
      case 3 : 
        current = CNT;
        myText.region = "China Standard Time (UTC+8)";
        break;
      default : 
        current = Default;
        myText.region = "Local Time";
        toggleTZ = 0;
        break;
    }
    
  }
  
}
