var form;
var gameState = 0;
var pic1, pic2;
var invisibleSprite1, invisibleSprite2;
var player, name, input;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28;

function preload() {
  pic1 = loadImage("Picture1.jpg");
  pic2 = loadImage("Picture2.jpg");
}

function setup() {
  createCanvas(1200, 600);
  form = new Form;
  sprites();
}

function draw() {
 
  if (gameState === 0) {
    background("green");
    form.display();
  }

  if (gameState === 1) {
    background("yellow");
    fill("black");
    textSize(20)
    text("Infinite Running Game", 300, 420);
    invisibleSprite1.addImage(pic1);
    invisibleSprite1.scale = 0.295;
    text("Maze Game", 797, 420);
    invisibleSprite2.addImage(pic2);
    invisibleSprite2.scale = 0.250;

    if (mousePressedOver(invisibleSprite1)) {
      gameState = 2;
      invisibleSprite1.destroy();
      invisibleSprite2.destroy();
    }

    if (mousePressedOver(invisibleSprite2)) {
      gameState = 3;
      invisibleSprite1.destroy();
      invisibleSprite2.destroy();
    }
    
    drawSprites();
  }
  
   if (gameState === 2) {
      background("red");
    }
    if (gameState === 3){
      background("red");
    }
 
}

function sprites() {
  if (mousePressedOver(invisibleSprite2)){
    wall1 = createSprite(100, 100, 10, 50);
    wall2 = createSprite(100, 100, 10, 50);
    wall3 = createSprite(100, 100, 10, 50);
    wall4 = createSprite(100, 100, 10, 50);
    wall5 = createSprite(100, 100, 10, 50);
    wall6 = createSprite(100, 100, 10, 50);
    wall7 = createSprite(100, 100, 10, 50);
    wall8 = createSprite(100, 100, 10, 50);
    wall9 = createSprite(100, 100, 10, 50);
    wall10 = createSprite(100, 100, 10, 50);
    wall11 = createSprite(100, 100, 10, 50);
    wall12 = createSprite(100, 100, 10, 50);
    wall13 = createSprite(100, 100, 10, 50);
    wall14 = createSprite(100, 100, 10, 50);
    wall15 = createSprite(100, 100, 10, 50);
    wall16 = createSprite(100, 100, 10, 50);
    wall17 = createSprite(100, 100, 10, 50);
    wall18 = createSprite(100, 100, 10, 50);
    wall19 = createSprite(100, 100, 10, 50);
    wall20 = createSprite(100, 100, 10, 50);
    wall21 = createSprite(100, 100, 10, 50);
    wall22 = createSprite(100, 100, 10, 50);
    wall23 = createSprite(100, 100, 10, 50);
    wall24 = createSprite(100, 100, 10, 50);
    wall25 = createSprite(100, 100, 10, 50);
    wall26 = createSprite(100, 100, 10, 50);
    wall27 = createSprite(100, 100, 10, 50);
    wall28 = createSprite(100, 100, 10, 50);
  }
}