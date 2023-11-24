
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var ground;
var leftGround;
var rightGround;
var topGround;
function setup() {
  createCanvas(900, 500);

  engine = Engine.create();
  world = engine.world;

  ball = Bodies.circle(400,100,30,{isStatic:false});
  World.add(world,ball)

  ground = new Ground(450,490,900,12)
  leftGround = new Ground(450,490,900,12)
  rightGround = new Ground(450,490,900,12)
  topGround = new Ground(450,490,900,12)
  
}


function draw() 
{
  background("#66cc23");
  Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS)

  fill ("blue")
  ellipse(ball.position.x, ball.position.y, 30,30);


 
  ground.show()
}

