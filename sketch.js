
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,paper,dustbinBase,dustbinLeft,dustbinRight;


function preload()
{
	
}

function setup() {
	createCanvas(1250, 650);
	engine = Engine.create();
	world = engine.world;
	ground=createSprite(width/2, 620, width,20);
	ground.shapeColor=color(255);

	dustbinBase=createSprite(1100,602,150,15);
	dustbinBase.shapeColor=color("blue");

	dustbinLeft=createSprite(1180,524,15,170);
	dustbinLeft.shapeColor=color("blue");

	dustbinRight=createSprite(1019,524,15,170);
	dustbinRight.shapeColor=color("blue");

	paper = new Paper(200,580,30);
	



	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:500,y:-500})
	}
}

