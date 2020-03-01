var frect, mrect ;
var G1,G2,G3,G4,G5,G6;
function setup() {
  createCanvas(1200,800);
 frect = createSprite(200, 200, 50, 80);
 mrect = createSprite(400, 200, 80, 30);
 frect.shapeColor = "yellow";
 mrect.shapeColor = "yellow"; 
 mrect.velocityY = -5;
 frect.velocityY = 5;
G1 = createSprite(100,100,50,50);
G2 = createSprite(200,100,50,50);
G3 = createSprite(300,100,50,50);
G4 = createSprite(400,100,50,50);
G5 = createSprite(500,100,50,50);
G6 = createSprite(600,100,50,50);

G1.shapeColor = "green";
G2.shapeColor = "green";
G3.shapeColor = "green";
G4.shapeColor = "green";
G5.shapeColor = "green";
G6.shapeColor = "green";
}


function draw() {
  background(0); 
  mrect.x = World.mouseX;
  mrect.y = World.mouseY; 
  
if (isTouching(mrect,G5)){
  mrect.shapeColor = "red";
  G5.shapeColor = "red";
} 
else{
  G5.shapeColor = "yellow";
  mrect.shapeColor = "yellow";
} 

/*if (mrect.x - frect.x < frect.width/2 + mrect.width/2
    && frect.x - mrect.x < frect.width/2 + mrect.width/2)
{
    mrect.velocityX = mrect.velocityX*(-1);
    frect.velocityX = frect.velocityX*(-1);
}
if (mrect.y - frect.y < frect.height/2 + mrect.height/2
   && frect.y - mrect.y < frect.height/2 + mrect.height/2){
   
  mrect.velocityY = mrect.velocityY*(-1);
  frect.velocityY = frect.velocityY*(-1);
  }*/
  
  
  
  drawSprites();
}

function isTouching(ob1,ob2){
if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
   return true;
    }
else {
   return false;
 }
} 