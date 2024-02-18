#define UNIT_LEN 160
#define DIT_LEN UNIT_LEN
#define DAH_LEN UNIT_LEN*3
#define IN_CHAR UNIT_LEN
#define IN_WORD UNIT_LEN*3
#define WORD_SPACE UNIT_LEN*7
#define SOUND_FREQ 350


#define BUZZ_PIN 2
#define LED_PIN 3

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUZZ_PIN, OUTPUT);
  Serial.begin(115200);

}

void loop() {
  if(Serial.available()){
    delay(2000);
    String data = Serial.readString();
    data.trim();
    data.toUpperCase();
    
    for(char i = 0; i<data.length(); i++){
      char c = data.charAt(i);
      if(c == ' '){
        delay(WORD_SPACE);
        continue;
      }
      morse(c);
      // jos kirjaimen jälkeen tulle toinen kirjain pidetään tauko niiden välissä
      if(i < data.length()-1 && data.charAt(i+1) != ' '){
        delay(IN_WORD);
      }
    }
  }
}

/** 
 kirjain A == 65, B == 66 ja sitä rataa, eli MORSE_LOOKUP[kirjain-65]
 vastaa oikeaa koodia listalla
*/
String MORSE_LOOKUP[]{
".-",   //A
"-...", //B
"-.-.", //C
"-..",  //D
".",    //E
"..-.", //F
"--.",  //G
"....", //H
"..",   //I
".---", //J
"-.-",  //K
".-..", //L
"--",   //M
"-.",   //N
"---",  //O
".--.", //P
"--.-", //Q
".-.",  //R
"...",  //S
"-",    //T
"..-",  //U
"...-", //V
".--",  //W
"-..-", //X
"-.--", //Y
"--.."  //Z
};
void morse(char c){
  // Poimitaaan kirjainta vastaava morsekoodi
  String ditdah = MORSE_LOOKUP[c-65];

  // Käydään morsekoodi merkki kerralla läpi 
  for(char i = 0; i<ditdah.length();i++){
    if(ditdah.charAt(i) == '.'){
      tone(BUZZ_PIN, SOUND_FREQ, DIT_LEN);
      digitalWrite(LED_PIN, 1);
      delay(DIT_LEN);
      digitalWrite(LED_PIN, 0);
    }else{
      tone(BUZZ_PIN, SOUND_FREQ, DAH_LEN);
      digitalWrite(LED_PIN, 1);
      delay(DAH_LEN);
      digitalWrite(LED_PIN, 0);

    }

    // Jos merkin jälkeen tulee toinen merkki pitää niiden välissä pitää tauko
    if(ditdah.length() != i-1){
        delay(IN_CHAR);
    }
  }
}
