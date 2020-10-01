
var bullet,wall;
var speed,height,thickness;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  bullet=createSprite(200,200, thickness,height/2);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor= color (80,80,80)
  speed=random(233,321);
  weight= random(30,52);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  

 
if(hasColided(bullet,wall)){

bullet.velocityX=0;
var damage=0.5 *weight *speed *speed/(thickness *thickness *thickness)

if(damage>10){
  wall.shapeColor=color(255,0,0)
}
if(damage<10){
  wall.shapeColor=color(0,255,0)
}


}
drawSprites();
}



function hasColided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width
wallLeftEdge=lwall.x
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false
}








