  var bullet;
  var wall;
  var speed;
  var weight;

  var randomspeed;
  
  var randomweight;

  var thickness;

  



function setup() {
  createCanvas(800,400);

  speed = random(55, 90);
  weight = random(400, 1500);

   thickness = random(22, 83);

  bullet = createSprite(50, 200, 20, 10);
  wall = createSprite(700, 200, thickness, height/2);
  bullet.shapeColor = "#ffffff";
  wall.shapeColor = (80, 80, 80);

  randomspeed = random(223, 321);

  randomweight = random(30, 52);

  //bullet.velocityX = randomspeed;

  console.log("random value: " + thickness)

  console.log(`randomspeed: ${randomspeed} pixels per second and randomweight: ${randomweight} kg's`)

}

function hasCollided(obj1,obj2){
  obj1RightEdge = obj1.x + obj1.width ;
  obj2LeftEdge = obj2.x - obj2.width ;
  if(obj1RightEdge >= obj2LeftEdge){
    return true;
  }
  else {
    return false;
  }
   
}

function checkCollision(speed, weight) {
  bullet.velocityX = speed;

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

    if (damage > 10) {
      wall.shapeColor = color (255, 0, 0);
      textSize(20);
      fill("orange");
      text("This wall is not good. It broke easily.", 300, 280);
    } else if (damage < 10) {
      wall.shapeColor = color (0, 255, 0);
      textSize(20);
      fill("orange");
      text("This wall is good!", 300, 280);
    }
  }
}

function draw() {
  background("darkblue");
  textSize(20);
      fill("lime");
      stroke(3);
      text("Wall Strength Checker", 250, 50);

  drawSprites();

  checkCollision(randomspeed, randomweight);

}