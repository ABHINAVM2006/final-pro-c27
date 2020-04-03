const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball;
var chain;


 function setup()   {
     var canvas = createCanvas(400,400);
     engine = Engine.create();
     world = engine.world;

     ground = new Ground(200,50,200,10);
     ball = new Ball(350,350,50);
     chain = new Chain(ground.body,ball.body);

 }
    
 function draw()    {
    background(200);
    ball.body.position.x = mouseX;
    ball.body.position.y = mouseY;
    Engine.update(engine);

    ground.display();
    ball.display();
    chain.display();
}