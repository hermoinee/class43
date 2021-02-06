var gameState=1;
var greeting,input,button,userName;
function setup() {
  createCanvas(displayWidth,displayHeight);
  input=createInput("Enter Name");
  button=createButton("play");
 input.position(displayWidth/2,displayHeight/2);
 button.position(displayWidth/2+30,displayHeight/2+40);
}

function draw() {
  background("white"); 
  if(gameState===1) {
  
  
  button.mousePressed(()=>{
    input.hide();
    button.hide();
    greeting=createElement("h2");
    userName = input.value();
    greeting.html("Hello " + userName);
    greeting.position(displayWidth/2 - 70, displayHeight/4);
    gameState=2;
  }
  )
  } 
  if(gameState===2){
  
  }
  drawSprites();
}