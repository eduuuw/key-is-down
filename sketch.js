var quadrado;

function setup() {
  createCanvas(windowWidth, windowHeight);
  quadrado= createSprite(200, 200, 20, 20)
}

function draw() 
{
  background("black");

if(keyIsDown(RIGHT_ARROW)) {

quadrado.position.x = quadrado.position.x + 5;


}

if(keyIsDown(LEFT_ARROW)) {

  quadrado.position.x = quadrado.position.x - 5;
  
  
  }

  if(keyIsDown(UP_ARROW)) {

    quadrado.position.y = quadrado.position.y - 5;
    
    
    }

    if(keyIsDown(DOWN_ARROW)) {

      quadrado.position.y = quadrado.position.y + 5;
      
      
      }


  drawSprites();

}









