const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var rcbi,back;

function preload(){
 rcbi=loadImage("rcb.png");
}

function setup(){
   
   createCanvas(800,600);
   back=createSprite(400,220,1000,800);
   back.addImage(rcbi);
   back.scale=1.21;
   engine = Engine.create();
   world = engine.world;
   //fill("#8F754D");
   ground2=new Ground(400,480,800,20);
   shooter=new Shooter(25,315,30,30);
   chain=new SlingShot(shooter.body,{x:106,y:180});
   

   block8=new Box(330,235,30,40);
   block9=new Box(360,235,30,40);
   block10=new Box(390,235,30,40);
   block11=new Box(420,235,30,40);
   block12=new Box(450,235,30,40);


   block13=new Box(360,195,30,40);
   block14=new Box(390,195,30,40);
   block15=new Box(420,195,30,40);

   
   block16=new Box(390,155,30,40);

   ground=new Ground(380,305,180,30);
}

function draw(){
  background(255);
  drawSprites();
  Engine.update(engine);
  fill("green")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("white")
  block13.display();
  fill("blue")
  block14.display();
  fill("white")
  block15.display();
  fill("#ff5f03")
  block16.display();
  
  ground.display();

  shooter.display();
  chain.display();
  ground2.display();
}

function mouseDragged(){
 
  Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  chain.fly();
  
}