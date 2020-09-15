
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var mango1,mango2,mango3,mango4,mango5;
var tree;
var stone;
var boy;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

	//Create the Bodies Here.
    ground= new Ground(600,390,1200,20);
   // stone= new Stone();
   // mango1= new Mango();
   // mango2= new Mango();
  //  mango3= new Mango();
    //mango4= new Mango();
   //    mango5= new Mango();

  tree = new Tree(800,300,80,50);
  boy=new Boy(300,350,30,50);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
 // stone.display();
//  mango1.display();
  //mango2.display();
 // mango3.display();
 // mango4.display();
 // mango5.display();
  tree.display();
  boy.display();
  
  drawSprites();
 
}



