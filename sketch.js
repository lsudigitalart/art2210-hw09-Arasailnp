var racer1
var racer2
var racer3
var racer4
var y
var x

function preload(){
  racer1 = loadImage("snail.gif")
  racer2 = loadImage("snail.gif")
  racer3 = loadImage("snail.gif")
  racer4 = loadImage("snail.gif")
  bg = loadImage("bg.jpg");
  flag1 = loadImage("flag.gif");
  flag2 = loadImage("flag.gif");
  mySound = loadSound("clock.mp3");
}


function setup() {
  createCanvas(1215,595);
  racer1 = new Snail(racer1, 1100, 0, random(0.001,0.5), 200)
  racer2 = new Snail(racer2, 1100, 100, random(0.001,0.5), 200)
  racer3 = new Snail(racer3, 1100, 200, random(0.001,0.5), 200)
  racer4 = new Snail(racer4, 1100, 300 ,random(0.001,0.5), 200)
  
  mySound.play()
}

function draw() {
  image(bg, 0,0,1215,595)
  
  
          
      racer1.display()
      racer1.move()
      
      racer2.display()
       racer2.move()
      
      racer3.display()
      racer3.move()
      
       racer4.display()
       racer4.move()
      
  }
  


function Snail(img,x,y,speed,size){
  this.speed = speed 
  this.y = y
  this.x = x
  this.img = img
  this.size = size
  
  this.display = function(){
    image(this.img,this.x, this.y, this.size)
  }
  
  this.move = function(){
    
    this.x = this.x - this.speed
  }
  
}

function move(){
  
  
}
// function draw() {
//   background(240);
//   fill(255, 60, 100);
//   text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
// }

