var car, wall;
var speed, weight;
var D;

function setup() {
  createCanvas(1600,400);

  speed = random(55,95);
  weight = random(400, 1500);

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor = "blue";

  wall = createSprite(1300,200,100,200);
  wall.shapeColor = "brown";
}

function draw() {

    background(0,0,0);

   if(car.x - wall.x < car.width/2 + wall.width/2
    && wall.x - car.x < car.width/2 + wall.width/2
    && car.y - wall.y < car.height/2 + wall.height/2
    && wall.y - car.y < car.height/2 + wall.height/2){

      D = 0.5*weight*speed*speed/22500
      car.velocityX = 0;
      console.log("Car collided");
      console.log(D);
      
      if(D<=100){
        car.shapeColor = "green";
      }
      else if (D<=180){
        car.shapeColor = "orange";
      }
      else{
        car.shapeColor = "red";
      }
    }
  drawSprites();

}