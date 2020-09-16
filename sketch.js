const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var bob1,bob2,bob3,bob4,bob5,ground;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    roof = new Roof(600,200,200,20);
    bob1 = new Bob(550,400);
    bob2 = new Bob(575,400);
    bob3 = new Bob(600,400);
    bob4 = new Bob(625,400);
    bob5 = new Bob(650,400);
    rope1 = new Rope(bob1.body,roof.body,-80,0);
    rope2 = new Rope(bob2.body,roof.body,-40,0);
    rope3 = new Rope(bob3.body,roof.body,0,0);
    rope4 = new Rope(bob4.body,roof.body,40,0);
    rope5 = new Rope(bob5.body,roof.body,80,0);

   
    ground = new Ground(600,590,1200,20,"yellow");
    
}

function draw(){
    background(0);
    Engine.update(engine);
   
    
    ground.display();
    
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(bob1.body,bob1.body.postion,{x:-50,y:-45})
    }
}