var fixedRect, movingRect;

var test1,test2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  test1=createSprite(100,100,50,50)
  test1.shapeColor="green"

  test2=createSprite(300,100,50,50)
  test2.shapeColor="green"
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  isTouching(test1,movingRect)
  isTouching(movingRect,fixedRect)
  drawSprites();
}

function isTouching(object1,object2){

  if ( object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y -object2.y<object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      object1.shapeColor="blue";
      object2.shapeColor="blue"
  }
  else {
    object1.shapeColor="green";
    object2.shapeColor="green"
  }

}
