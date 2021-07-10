  var ship, ship_floting;
  var seaImage
  var sea




  function preload(){
  ship_floting = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
  }

  function setup(){
  createCanvas(1250,600);

  sea = createSprite (400,200,20,20);
  sea.addImage("sea",seaImage);


  ship = createSprite(100,300,25,10);
  ship.addAnimation("floting", ship_floting);

  ship.x = 100
  ship.scale = 0.3;

  }

  function draw() {
  background("blue");

  sea.velocityX = -3
  if (sea.x<0){
  sea.x = sea.width /2;
  }
  drawSprites();
  }