
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground;
var dustobj, paperObject;
// function preload()
// {
	
// }  

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	// groundSprite=createSprite(width/2, height-35, width,10);
	// groundSprite.shapeColor= "yellow"

	dustobj = new Dustbin(1200,610)

	paperObject = new Paper(200, 450 , 40 );
	ground = new Ground(800,670,1600,20)
	

	//bucket = new Dustbin(600, 550);

	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background("yellow");
  paperObject.display();
  dustobj.display();
  ground.display();
//   drawSprites();
 
}

function keyPressed(){
		if(keyCode === UP_ARROW){
			Matter.Body.applyForce(paperObject.body,paperObject.position,{x:85,y:-85});
		}
}


