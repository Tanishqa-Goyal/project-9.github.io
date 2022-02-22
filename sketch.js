var box;

function setup() {
  createCanvas(400,400);

  box = createSprite(200,200,30,30);
  box.shapeColor= "white"
}

function draw(){ 

  background("black")

  if (keyIsDown(RIGHT_ARROW)) 
  {
    background("red");
    box.position.x = box.position.x +5;

  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.position.x= box.position.x -5;
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("silver");
    box.position.y = box.position.y - 5;
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("purple");
    box.position.y = box.position.y + 5;
  }

   
  

    
    
 
  drawSprites();




}
