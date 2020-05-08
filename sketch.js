var bullet, wall;
var speed, weight, thickness;
var d;


function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(100,200,30,5);
  bullet.shapeColor = "white";
  bullet.debug = true;
  

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  wall.debug = true;

  
    
}

function draw() {
  background(0,0,0);  
  bullet.velocityX = speed;
    d= 0.5*weight*speed*speed/(thickness*thickness*thickness);
    text("Weight = " + int(weight) + " - Speed=  " + int(speed) + " Thickness = " + int(thickness) + " d = " + int(d), 500,20);
    text.color ="white";
  
     if (hasCollided(bullet,wall)) {
      
      bullet.velocityX=0;
      bullet.x = wall.x-thickness/2;
     

         if (d>10) {
        wall.shapeColor = color(255,0,0)
        }
        else if (d<10) { 
        wall.shapeColor = color(0,255,0);
        }
    }   
  
  drawSprites();
}