var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;


function preload(){
  //pre-load images
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite (200,400);
  path.addImage(pathImg);
  path.velocityY = 5.5;
  path.scale = 1.2;

  boy = createSprite (200,350,50,50);
  boy.addAnimation("running", boy_running);
  boy.scale = 0.05;

  leftBoundary = createSprite(20,200,100,800);
  leftBoundary.visible = false;

  rightBoundary = createSprite(380,200,100,800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  if (path.y > 600) {
    path.y = height/2;
  }
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  drawSprites();
}
