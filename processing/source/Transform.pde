class Transform {
  
  private String[] kanji = {"〇","一","二","三","四","五","六","七","八","九","十","午前","午後"};
  
  public String toKanji(String time) {
    
    time = time.replaceFirst("(^|(?<=(AM|PM)\\s))0+(?!$)", "");

    time = time.replaceFirst("AM", kanji[11]);
    time = time.replaceFirst("PM", kanji[12]);

    time = time.replaceAll("(?<=[2-9])(?=[1-9])", kanji[10]); // Add a 十 between numbers 20 or greater
    time = time.replaceAll("(?<=[2-5])0", kanji[10]); // Transform 0 to 十 when minutes are 20 or greater by 10*?
    time = time.replaceAll("1(?=[1-9])", kanji[10]); // When 1 is followed by a number from 1-9, transforms to 十
    time = time.replaceAll("10", kanji[10]); // Transform 10 to 十
    time = time.replaceAll("0", kanji[0]); // Transform remaining 0s
    
    time = time.replaceAll("1", kanji[1]);
    time = time.replaceAll("2", kanji[2]);
    time = time.replaceAll("3", kanji[3]);
    time = time.replaceAll("4", kanji[4]);
    time = time.replaceAll("5", kanji[5]);
    time = time.replaceAll("6", kanji[6]);
    time = time.replaceAll("7", kanji[7]);
    time = time.replaceAll("8", kanji[8]);
    time = time.replaceAll("9", kanji[9]);
    
    return time;
    
  }
  
  public String toSimpleKanji(String time) {

    time = time.replaceFirst("AM", kanji[11]);
    time = time.replaceFirst("PM", kanji[12]);

    time = time.replaceAll("0", kanji[0]);
    time = time.replaceAll("1", kanji[1]);
    time = time.replaceAll("2", kanji[2]);
    time = time.replaceAll("3", kanji[3]);
    time = time.replaceAll("4", kanji[4]);
    time = time.replaceAll("5", kanji[5]);
    time = time.replaceAll("6", kanji[6]);
    time = time.replaceAll("7", kanji[7]);
    time = time.replaceAll("8", kanji[8]);
    time = time.replaceAll("9", kanji[9]);
    
    return time;
    
  }
  
  public String toJapanese(String time) {

    time = time.replaceFirst("(^|(?<=(AM|PM)\\s))0+(?!$)", "");

    time = time.replaceFirst("AM", kanji[11]);
    time = time.replaceFirst("PM", kanji[12]);
    
    return time;
    
  }
}
