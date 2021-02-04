
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1 , box2 , ground, stone1 , ball

function preload()
{

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1=new Stone(100,100,50,50)
	box1= new Box(300,100,100,50)
	ball= new rubber(300,100,20)



	ground = new Ground(600,height,1200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  box1.display();
  ground.display();
  stone1.display();
  ball.display();
  
  drawSprites();
 
}




