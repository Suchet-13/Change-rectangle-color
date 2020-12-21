  //defining the sprites
  var fixRect,movRect;

  function setup(){
  createCanvas(1200,800);
  //creating both the rectangles and giving them green color
  fixRect=createSprite(200,200,50,80);
  fixRect.shapeColor="green";
  movRect=createSprite(400,200,80,30);
  movRect.shapeColor="green";
  }

  function draw(){
  //changing background color
  background(255,255,255);
  //making the moving rectangle move using the mouse
  movRect.x=World.mouseX;
  movRect.y=World.mouseY;

  //changing the color of the rectangles if they are touching each other
  if(movRect.x-fixRect.x<fixRect.width/2+movRect.width/2 && fixRect.x-movRect.x<fixRect.width/2 + movRect.width/2 &&
    movRect.y-fixRect.y<fixRect.height/2+movRect.height/2 && fixRect.y-movRect.y<fixRect.height/2 + movRect.height/2){
    movRect.shapeColor="red";
    fixRect.shapeColor="red";
  }
  else{
    fixRect.shapeColor="green";
    movRect.shapeColor="green";
  }
  //display the sprites
  drawSprites();
  }