
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bar;

var ball1,ball2,ball3,ball4,ball5;

var gameState="onChain";

function preload()
{
	
}

function setup() {
	createCanvas(1260, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1=new Ball(100,150);
	ball2=new Ball(500,550);
	ball3=new Ball(600,550);
	ball4=new Ball(700,550);
	ball5=new Ball(800,550);
	
	bar = createSprite(600,130,600,30);
    

	chain = new Chain(ball1.body,{x:400,y:130});
    chain2 = new Chain(ball2.body,{x:500,y:130});
	chain3 = new Chain(ball3.body,{x:600,y:130});
	chain4 = new Chain(ball4.body,{x:700,y:130});
	chain5 = new Chain(ball5.body,{x:800,y:130});


}


function draw() {
  background(230,230,230);
  Engine.update(engine)

  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  
	
	gameSate="launched";
		
		}



