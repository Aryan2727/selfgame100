var square1,square1IMG
var ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10,ground11,ground12,groundIMG
var obstacle1,obstacleIMG
var flag1

function preload(){
  square1IMG = loadImage("images/square.png")
  groundIMG = loadImage("images/ground.png")
  obstacleIMG = loadImage("images/obstacle.png")
}
function setup() {
  createCanvas(1200, 600);
 
//pc
  square1 = createSprite(60,30,30,30)
  square1.addImage(square1IMG)
  square1.scale = 0.3

//grounds
  ground1 = createSprite(0,100,300,20)
  ground1.addImage(groundIMG)
  ground1.shapeColor = "brown"
  ground1.scale = 0.3

  ground2 = createSprite(300,100,300,20)
  ground2.addImage(groundIMG)
  ground2.shapeColor = "brown"
  ground2.scale = 0.3

  ground3 = createSprite(600,100,300,20)
  ground3.addImage(groundIMG)
  ground3.shapeColor = "brown"
  ground3.scale = 0.3

  ground4 = createSprite(900,100,300,20)
  ground4.addImage(groundIMG)
  ground4.shapeColor = "brown"
  ground4.scale = 0.3

  ground5 = createSprite(1200,250,300,20)
  ground5.addImage(groundIMG)
  ground5.shapeColor = "brown"
  ground5.scale = 0.3

  ground6 = createSprite(900,250,300,20)
  ground6.addImage(groundIMG)
  ground6.shapeColor = "brown"
  ground6.scale = 0.3

  ground7 = createSprite(600,250,300,20)
  ground7.addImage(groundIMG)
  ground7.shapeColor = "brown"
  ground7.scale = 0.3

  ground8 = createSprite(300,250,300,20)
  ground8.addImage(groundIMG)
  ground8.shapeColor = "brown"
  ground8.scale = 0.3
  
  ground9 = createSprite(0,400,300,20)
  ground9.addImage(groundIMG)
  ground9.shapeColor = "brown"
  ground9.scale = 0.3

  ground10 = createSprite(300,400,300,20)
  ground10.addImage(groundIMG)
  ground10.shapeColor = "brown"
  ground10.scale = 0.3

  ground11 = createSprite(600,400,300,20)
  ground11.addImage(groundIMG)
  ground11.shapeColor = "brown"
  ground11.scale = 0.3

  ground12 = createSprite(900,400,300,20)
  ground12.addImage(groundIMG)
  ground12.shapeColor = "brown"
  ground12.scale = 0.3

  //setting collider for all sprites
  square1.setCollider("rectangle",-50,10,50,50)
  square1.debug = true
  ground1.setCollider("rectangle",230,-60,500,40)
  ground1.debug = true
  ground2.setCollider("rectangle",0,-60,1000,40)
  ground2.debug = true
  ground3.setCollider("rectangle",0,-60,1000,40)
  ground3.debug = true
  ground4.setCollider("rectangle",0,-60,1000,40)
  ground4.debug = true
  ground5.setCollider("rectangle",0,-60,1000,40)
  ground5.debug = true
  ground6.setCollider("rectangle",0,-60,1000,40)
  ground6.debug = true
  ground7.setCollider("rectangle",0,-60,1000,40)
  ground7.debug = true
  ground8.setCollider("rectangle",0,-60,1000,40)
  ground8.debug = true
  ground9.setCollider("rectangle",0,-60,1000,40)
  ground9.debug = true
  ground10.setCollider("rectangle",0,-60,1000,40)
  ground10.debug = true
  ground11.setCollider("rectangle",0,-60,1000,40)
  ground11.debug = true
  ground12.setCollider("rectangle",0,-60,1000,40)
  ground12.debug = true
  
  
}

function draw() {
 
background("black")
//console.log(square1.y)
if(keyDown("space") && square1.y > 50) {
  square1.velocityY = -12;
}
if(square1.isTouching(ground2)){
  flag1 = true
}
if(flag1 === true){
  console.log("j")
  if(keyDown("space") && square1.y < 220 && square1.y > 85) {
    square1.velocityY = -8;
  }
}

square1.velocityY += 1

colliding()
keys()



drawSprites(); 
   }
function keys(){
  if(keyDown(RIGHT_ARROW)){
  square1.x += 5
  }
  if(keyDown(LEFT_ARROW)){
    square1.x -= 5
    }
}
function colliding(){
  square1.collide(ground1)
  square1.collide(ground2)
  square1.collide(ground3)
  square1.collide(ground4)
  square1.collide(ground5)
  square1.collide(ground6)
  square1.collide(ground7)
  square1.collide(ground8)
  square1.collide(ground9)
  square1.collide(ground10)
  square1.collide(ground11)
  square1.collide(ground12)
}
function obstacles(){
  
}