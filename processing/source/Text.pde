class Text {
  
  private int currentFontSize;
  
  public String region;
  public String date;
  
  
  void display() {
    
    font = createFont("Courier",12);
    
    if (width < height) {
      currentFontSize = width/5;
    } else {
      currentFontSize = height/5;
    }
    
    currentFontSize *= (arduino.analogRead(0)/1500.0)+0.2;
    currentFontSize = 200 - currentFontSize;
    textFont(font,currentFontSize);
    textAlign(CENTER);
    text(time, width/2, height/2+6);
    
    textFont(font,24);
    textAlign(LEFT);
    text(region, 50, height-50);
    textAlign(RIGHT);
    text(date, width-50, height-50);
    
    
    
  }
  
}
