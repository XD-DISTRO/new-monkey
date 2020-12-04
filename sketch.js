
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas( 500, 500);
  
  monkey = createSprite(50, 400, 10, 10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.15;
  ground = createSprite(250, 465, 500, 10)

  
}


function draw() {

  background(180);
  
  //jump when the space key is pressed
    if(keyDown("space")) {
        monkey.velocityY = -20;}
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  if(frameCount % 80 === 0) {
    eat();
  }
  if (frameCount % 360 === 0) {
    rocks();
  }
  drawSprites();
}


function rocks() {
  obstacle = createSprite(500, 440, 10, 10);
  obstacle.velocityX= -5;
  obstacle.lifetime=500;
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.15;
}

function eat(){
  banana = createSprite(450, 380, 10, 10);
  banana.velocityX = -5;
  banana.y = Math.round(random(480,300));
  banana.addImage(bananaImage);
  banana.scale=0.10;
}







