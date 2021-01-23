var fixedrect,fixedrekt

function setup() {
  createCanvas(800,400);

  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor = ("white")

  fixedrekt=createSprite(400, 200, 50, 50);
  fixedrekt.shapeColor = ("white")
}
function draw() {
  background("cyan");  
  fixedrect.x = mouseX
  fixedrect.y = mouseY

  if (fixedrect.x-fixedrekt.x <fixedrect.width/2 + fixedrekt.width/2
    && fixedrekt.x - fixedrect.x <fixedrect.width/2 + fixedrekt.width/2
    &&fixedrekt.y - fixedrect.y <fixedrect.height/2 + fixedrekt.height/2
    &&fixedrect.y-fixedrekt.y <fixedrect.height/2 + fixedrekt.height/2){
      fixedrect.shapeColor="yellow"
      fixedrekt.shapeColor="yellow"

    }
else{
  fixedrect.shapeColor="white"
      fixedrekt.shapeColor="white"

}
        drawSprites();
}