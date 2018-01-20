class DateFormat {
  
  public DateFormat() {
  }
  
   public DateFormat(TimeZone zone) {
     hm12.setTimeZone(zone);
     hm24.setTimeZone(zone);
     hms12.setTimeZone(zone);
     hms24.setTimeZone(zone);
     hm12j.setTimeZone(zone);
     hm24j.setTimeZone(zone);
     hms12j.setTimeZone(zone);
     hms24j.setTimeZone(zone);
     date.setTimeZone(zone);
   }
  
  public SimpleDateFormat hm12 = new SimpleDateFormat("hh:mm a");
  public SimpleDateFormat hm24 = new SimpleDateFormat("HH:mm");

  public SimpleDateFormat hms12 = new SimpleDateFormat("hh:mm:ss a");
  public SimpleDateFormat hms24 = new SimpleDateFormat("HH:mm:ss");
  
  public SimpleDateFormat hm12j = new SimpleDateFormat("a hh時mm分");
  public SimpleDateFormat hm24j = new SimpleDateFormat("HH時mm分");
  
  public SimpleDateFormat hms12j = new SimpleDateFormat("a hh時mm分ss秒");
  public SimpleDateFormat hms24j = new SimpleDateFormat("HH時mm分ss秒");
  
  // Dates:
  public SimpleDateFormat date = new SimpleDateFormat("dd/MM/yy");
  
}
