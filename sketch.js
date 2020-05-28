var thickness,wall;
var bullet,speed,weight;
var damage;
function setup() {
  createCanvas(1600,400);
 
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1300,200,thickness,height/2);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
    bullet.velocityX=speed;
}

function draw() {
  background(0,0,0);  
   
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    
    damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage<10)
    {
      wall.shapeColor="green";
      bullet.velocityX=0;

    }
    
    if(damage>10) {
      wall.shapeColor="red"; 
      bullet.velocityX=0;

    }
  }
  drawSprites();
}