const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;
var ground;
var hero;
var monster;

function preload() {
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  hero=new Hero(2100,400,50,50);
}

function draw() {
  Engine.update(engine);
  ground.display();
  hero.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}