const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball, rope;
var ball2 , rope2;
var ball3, rope3;
var ball4 , rope4;


function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  ball = new Ball(200, 200, 80, 80);
  ball2 = new Ball(250, 200, 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 50 });
  rope2 = new Rope(ball2.body, { x: 550, y: 50 });
  ball3 = new Ball(300, 200, 80, 80);
  ball4 = new Ball(350, 200, 80, 80);
  rope3 = new Rope(ball3.body, { x: 600, y: 50 });
  rope4 = new Rope(ball4.body, { x: 650, y: 50 });
}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  ball.display();
  rope.display();
  ball2.display();
  rope2.display();
  ball3.display();
  rope3.display();
  ball4.display();
  rope4.display();



}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  } 

  function ball(){

ball2.restitution = null;

  }
