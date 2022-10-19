x = 0;
y = 0;

draw_apple = "";
screen_height= 0;
screen_width= 0;
apple = "";
speak_data= "";
to_number= "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
    apple= loadImage('apples.png');
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

    console.log(event); 

    content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number = Number(content);


     if(Number.isInteger(to_number)){
        draw_apple = 'set';
    }
    else{
        document.getElementById("status").innerHTML= "Your speech has not been recognized as a number";
    }
}

function setup() {
    screen_width= window.innerWidth;
    screen_height = window.innerHeight;
 canvas= createCanvas(screen_width, screen_height-150);

}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = to_number + "Apples drawn";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

  
}


function draw(){
    if(draw_apple == "set")
    {
        document.getElementById("status").innerHTML= to_number + " Apples Drawn";
        speak();
      for(var i = 1; i <= to_number; i++){
          x= Math.floor(Math.random() * 1500);
          y= Math.floor(Math.random() * 500);
          image(apple,x,y,50,50);
          
    }
    
  
   console.log(to_number);
    draw_apple= " ";
  }
}









