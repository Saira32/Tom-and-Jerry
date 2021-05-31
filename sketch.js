var cat, catImage;
var mouse, mouseImage;
var setting, settingImage;

//HOW DO I DEBUG AN ERROR MESSAGE

function preload() {
    catImage = loadAnimation("images/cat1.png")
    mouseImage = loadAnimation("images/mouse1.png")
    settingImage = loadImage("images/garden.png")
    mouseImg1 = loadAnimation("images/mouse2.png" , "images/mouse3.png")
    catImg1 = loadAnimation("images/cat2.png" , "images/cat3.png") 
    catImage4 = loadAnimation("images/cat4.png")
    mouseImage4 = loadAnimation("images/mouse4.png")


}

function setup(){
    createCanvas(1000,800);
//Create cat spirte here 
    cat=createSprite(900,700);
    cat.addAnimation(catImage);
    cat.scale = 0.15
//Create mouse spirte here 
    mouse=createSprite(100,700);
    mouse.addAnimation(mouseImage);
    mouse.scale = 0.15
}

function draw() {

    background(settingImage);

    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
       cat.velocityX = 0
       cat.addAnimation("catRunning", catImage4) 
       cat.changeAnimation("catRunning")
       mouse.addAnimation("mouseWaiting", mouseImage4)
       mouse.changeAnimation("mouseWaiting")
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode == LEFT_ARROW){
        cat.velocityX = -5
        cat.addAnimation("catTeasing", catImg1)
        cat.changeAnimation("catTeasing")
        mouse.addAnimation("mouseTeasing", mouseImg1)
        .frameDelay = 25;
        mouse.changeAnimation(mouseImg1)

}          


}
