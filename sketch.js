
var trex ;
var treximg;
function preload(){
  treximg=loadAnimation("trex1.png","trex3.png","trex4.png")
   groungimg=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(100,180,10,10)
 trex.addAnimation("running",treximg)
 trex.scale=0.5
  ground=createSprite(300,190,600,10)
  ground.addImage(groungimg)
}

function draw(){
  background("white")
  //press sapce for jump
  if(keyDown("space")){
    trex.velocityY=-10
  }
  //gravity
  trex.velocityY=trex.velocityY+0.8
  trex.collide(ground)
drawSprites();
}
