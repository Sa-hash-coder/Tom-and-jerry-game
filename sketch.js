
var background;
var tom,tomMovingImage,tomCollide,tomStableImage
var jerry,jerryMovingImage,jerryCollide,jerryStableImage


function preload() {
    //load the images here

    backgroundImage=loadImage("images/garden.png");   

    jerryStableImage=loadImage("images/jerryOne.png");
    tomStableImage=loadImage("images/tomOne.png");

    jerryImage=loadAnimation("images/jerryTwo.png","images/jerryFour.png");
   tomMovingImage=loadAnimation("images/tomTwo.png","images/tomThree.png");

   jerryCollide=loadImage("images/jerryThree.png");
   tomCollide=loadImage("images/tomFour.png");

}

function setup(){
    createCanvas(1000,800);

   
   
   // create tom and jerry sprites here

    tom=createSprite(800,600)
    tom.addImage("tom",tomStableImage);
    tom.scale=0.2;
  
    tom.addImage("tomcollide",tomCollide);

    jerry=createSprite(100,560);
    jerry.addImage("jerry",jerryStableImage);
    jerry.scale=0.2;
    jerry.addImage("jerrycollide",jerryCollide);


}

function draw() {


    background(backgroundImage)
    keyPressed();

    if(jerry.isTouching(tom)){
        tom.velocityX=0
        jerry.changeImage("jerrycollide");
        tom.changeImage("tomcollide");
     }
    //Write condition here to evalute if tom and jerry collide
   
    jerry.setCollider("circle",20,20,500)
    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
     tom.velocityX=-5;
     tom.addAnimation("tomMoving",tomMovingImage)
     tom.changeAnimation("tomMoving");
     jerry.addAnimation("jerryMoving",jerryImage);
     jerry.changeAnimation("jerryMoving")
    }

  


}
