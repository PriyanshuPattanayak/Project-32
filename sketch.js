
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ball,blower,blowerMouth, blowButton;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
//ball = new Ball(200,200,30);
blowButton = createButton("Click to blow")
blowButton.position(width/2,height-100);
blowButton.class("blowbutton")
blowButton.mousePressed(blow);
}

function draw() {
  Engine.update(engine);
  background(255,255,255); 
  ball.show(); 
  drawSprites();
}
function blow(){
  Matter.body.applyForce()
}