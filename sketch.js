var fixedRect, movingRect, gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  
  fixedRect=createSprite(200,400,50,80);
  fixedRect.shapeColor="green";
  fixedRect.velocityX = 2;
  movingRect= createSprite(400,200,80,50);
  movingRect.shapeColor= 'green';
  gameObject1 = createSprite(600, 100, 60, 60);
  gameObject1.shapeColor= "pink";
  gameObject2 = createSprite(1000, 400);
  gameObject2.velocityX = -2;
  gameObject2.shapeColor= "pink";

}

function draw() {
  background(0,0,0); 
  movingRect.x= mouseX;
  movingRect.y= mouseY;

  if (touching(fixedRect, movingRect)) {
    movingRect.shapeColor= "blue";
    fixedRect.shapeColor= "blue";
  } else {
    movingRect.shapeColor= "red";
    fixedRect.shapeColor= "red"
  }

  if (touching(gameObject1, movingRect)) {
    movingRect.shapeColor= "blue";
    gameObject1.shapeColor= "yellow";
  } else {
    movingRect.shapeColor= "red";
    gameObject1.shapeColor= "pink";
  }

  bounceOff(gameObject2, fixedRect);
 
  drawSprites();
  
}

