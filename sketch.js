
function preload(){
  //pre-load images
  pathImage = loadImage("path.png")
  boyImage = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path = createSprite(200,200)
path.addImage(pathImage)
path.velocityY = 4

boy = createSprite(180,340,30,30)
boy.addAnimation("running",boyImage)
boy.scale = 0.08
leftBoundry = createSprite(0,0,100,800)
rightBoundry = createSprite(410,0,100,800)
leftBoundry.visible = false
rightBoundry.visible = false
}

function draw() {
  background(0);
if(path.y>400){
  path.y = height/2
}
boy.x = World.mouseX
edges = createEdgeSprites()
boy.collide(leftBoundry)
boy.collide(rightBoundry)
boy.collide(edges[3])
  drawSprites()
}
