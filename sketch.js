var sC1;
var sC2;
var sC3;
var sC4;
var issImg,spaceBg;
var iss;
var spaceCraft,hasDocked=false;



function preload(){
sC1=loadImage("spacecraft1.png")
sC2=loadImage("spacecraft2.png")
sC3=loadImage("spacecraft3.png")
sC4=loadImage("spacecraft4.png")
issImg=loadImage("iss.png")
spaceBg=loadImage("spacebg.jpg")
}




function setup() {
  createCanvas(800,400);
  iss=createSprite(330,130);
  iss.addImage(issImg)
  spaceCraft=createSprite(285,240);
  spaceCraft.addImage(sC1)
  spaceCraft.scale=0.15;

}

function draw() {
  background(spaceBg);
  if(!hasDocked){
spaceCraft.x=spaceCraft.x+random(-1,1)

if(keyDown("UP_ARROW"))
     { spaceCraft.y = spaceCraft.y -2; }
if(keyDown("DOWN_ARROW"))
     { spaceCraft.addImage(sC2);}
if(keyDown("LEFT_ARROW"))
     { spaceCraft.x = spaceCraft.x -2;
      spaceCraft.addImage(sC3);
     }
if(keyDown("RIGHT_ARROW"))
     { spaceCraft.x = spaceCraft.x +2; 
      spaceCraft.addImage(sC4);
    }


  }  
   if(spaceCraft.y<=(iss.y+70)&&spaceCraft.x<=(iss.x-10))
   {
     hasDocked=true;
     textSize(25);
     text("DOCKED SUCCESFULLY",200,300)
   }






  drawSprites();
}