const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var ball, ground;
var world, engine;

function setup() 
{

  var canvas = createCanvas(500, 500);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(250,380,500,20);

  box1 = new Box(200,360,70,70);
  box2 = new Box(240,100,70,120);
}

function draw() 
{
  background(0);
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();

}