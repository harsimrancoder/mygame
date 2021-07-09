const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bg,textbox;
var bgimg;
var canvas;
var girl,sleeping;
var gameState = 0
var bubbleimg
var girl2,girlimg;
var tunnel,tunnleimg
var walking,walkingimg
var house,houseimg
var girlshock,shockedimg

function preload(){

bgimage= loadAnimation("images/img1.gif","images/img2.gif","images/img3.gif","images/img4.gif","images/img5.gif","images/img6.gif","images/img7.gif","images/img8.gif","images/img9.gif","images/img10.gif","images/img11.gif","images/img12.gif","images/img13.gif","images/img14.gif")
sleeping=loadImage("images/sleeping.gif")
bubbleimg=loadImage("images/bubble.png")
girlimg=loadImage("images/girl.jpg")
tunnelimg=loadImage("images/room.jpg")
walkingimg = loadAnimation("images/1.gif","images/2.gif","images/3.gif","images/4.gif","images/5.gif","images/4.gif","images/3.gif","images/2.gif","images/1.gif")
houseimg=loadImage("images/house.jpg")
shockedimg=loadImage("images/shocked girl.png")
}
function setup(){
    canvas = createCanvas(1000,550);
    engine = Engine.create();
    world = engine.world;
    
    bg=createSprite(500,275)
    bg.addAnimation("a",bgimage)
    bg.scale = 2;
    bg.visible = true;

    textbox = createSprite(500,500,700,80)
    textbox.shapeColor = "black";
    textbox.visible = true;

    girl = createSprite(500,275);
    girl.addImage(sleeping);
    girl.visible = false;
    girl.scale=4.5;

    textbox1 = createSprite(650,100,600,90)
    textbox1.shapeColor = "black";
    textbox1.visible = false;

    girl2 = createSprite(500,275);
    girl2.addImage(girlimg);
    girl2.visible = false;
    //girl2.scale=4.5;

    textbox2 = createSprite(650,100,600,90)
    textbox2.shapeColor = "black";
    textbox2.visible = false;

    tunnel=createSprite(500,275,)
    tunnel.addImage(tunnelimg);
    tunnel.visible=false;
    tunnel.scale=3
   
    textbox3 = createSprite(650,100,600,90)
    textbox3.shapeColor = "black";
    textbox3.visible = false;

    
    walking=createSprite(900,275)
    walking.addAnimation("walk",walkingimg)
    walking.visible = false
    walking.scale = 0.6
    walking.velocityX = -3;
   
    textbox4 = createSprite(650,100,600,90)
    textbox4.shapeColor = "black";
    textbox4.visible = false;

    house = createSprite(500,275);
    house.addImage(houseimg);
    house.visible = false;
    house.scale = 4.5;
   
    girlshock = createSprite(200,375);
    girlshock.addImage(shockedimg);
    girlshock.visible = false;

    textbox5 = createSprite(650,400,600,90)
    textbox5.shapeColor = "white";
    textbox5.visible = false;


   //girlshock.scale = 0.5;
    // bubble = createSprite(500,275);
    // bubble.addImage(bubbleimg);
    // bubble.visible = false;
    // bubble.scale=1;   
}

function draw(){
   if(gameState ===0){
    background(0);
    drawSprites();

    textSize(15)
    fill("white");
    text("Today is a rainy day and the sky is dark.The clouds seems very heavy and  the wind is strong.",200,490)
    text("This is the first time raining this HARD in this area as i recently shiffted here. ",200,510)
    textSize(16)
    fill("red");
    text("Press S to continue",669,527)

    if(keyDown("S")){
        gameState = 1;
    }

}

    if(gameState === 1){
        background(0);
        bg.visible = false;
        textbox.visible = false;
        girl.visible = true;
        textbox1.visible = true;
        drawSprites();

    textSize(15)
    fill("white");
    text("I usually like this kind of weather, but today I can not enjoy the weather because.. ",360,80)
    text("i am working on my company spy mission.I don't know how but I unfortunatly felt ASLEEP...",360,100)    
    textSize(16);
    fill("red");
    text("Press E to continue",800,130)

    if(keyDown("E")){
        gameState = 2;
    }
    }
    if(gameState === 2){
        background(0);
        girl.visible = false;
        textbox1.visible = false;
        girl2.visible = true;
        textbox2.visible = true;
        drawSprites();

    textSize(15)
    fill("white");
    text(" ",360,80)
    text("",360,100)    
    textSize(16);
    fill("red");
    text("Press A to continue",800,130)

    if(keyDown("A")){
        gameState = 3;
    }
    }
    if(gameState === 3){
        background(0);
        girl2.visible = false;
        textbox2.visible = false;
        tunnel.visible = true;
        walking.visible = true;
        textbox3.visible = true;
        drawSprites();

    textSize(15)
    fill("white");
    text(" ",360,80)
    text("",360,100)    
    textSize(16);
    fill("red");
   

    if(walking.x <-10){
        gameState = 4;
    }
    
}
if(gameState ===4){
    background(0);
    drawSprites();
    girl2.visible = false;
    textbox2.visible = false;
    tunnel.visible = false;
    walking.visible = false;
    textbox3.visible = false;
    textbox5.visible = true;
    house.visible = true;
    girlshock.visible =  true;

    
    textSize(15)
    fill("black");
    text("",200,490)
    text("",200,510)
    textSize(16)
    fill("red");
    text("Press W to continue",669,400)

    if(keyDown("W")){
        gameState = 5;
    }

 
}

if(gameState ===5){
    background(0);
    drawSprites();
}

}