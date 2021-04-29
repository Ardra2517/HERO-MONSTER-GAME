const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;
var ground;
var hero;
var monster;
var sling;
var bgImg;

function preload() {
 bgImg=loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,height,1200,20);
  hero=new Hero(200,400,100,100);
  sling= new Fly(hero.body,{x:200, y:50});

}

function draw() {
  if(bgImg){
        background(bgImg);
        }
    
  Engine.update(engine);
  ground.display();
  hero.display();
  sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.flying();
}