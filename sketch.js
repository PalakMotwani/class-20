var moving,fixed;
var movingXStart,movingXEnd,fixedXStart,fixedXEnd;
var movingYStart,movingYEnd,fixedYStart,fixedYEnd;
function setup() {
  createCanvas(800,400);
 moving= createSprite(50, 50, 150, 100);
  fixed=createSprite(50,50,20,20)
}

function draw() {
  background(255,255,255);  

  movingXStart=moving.x-moving.width/2;
  movingXEnd=moving.x+moving.width/2;
  fixedXStart=fixed.x-fixed.width/2;
  fixedXEnd=fixed.x+fixed.width/2;
  
  0
  fixedYEnd=fixed.y+fixed.height/2;
  if(movingXEnd>fixedXStart&& movingXStart<fixedXEnd&& movingYEnd>fixedYStart&& movingYStart<fixedYEnd){
moving.shapeColor="red";
fixed.shapeColor="red";
}
else{
  moving.shapeColor="green";
  fixed.shapeColor="green";

}
  if (keyDown("up")){
    moving.velocityX=0;
    moving.velocityY=-4;
  }
  else if (keyDown("down")){
    moving.velocityX=0;
    moving.velocityY=4;
  }
  else if (keyDown("right")){
    moving.velocityX=2;
    moving.velocityY=0;
  }
  else if (keyDown("left")){
    moving.velocityX=-2;
    moving.velocityY=0;
  }
  else{

      moving.velocityX=0;
      moving.velocityY=0;
  
  }


  drawSprites();
}
