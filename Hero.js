class Hero{
  constructor(x, y,radius){
      var options = {
          frictionAir: 1,
          density: 1
  };
  this.x=x;
  this.y=y;
  this.radius=radius;
  this.image=loadImage("Superhero-01.png");
  this.body = Bodies.circle(this.x, this.y,(this.radius)/2,options);
  World.add(world,this.body);
}
display(){
  var pos=this.body.position;
  push();
  translate(pos.x,pos.y);
  stroke("white");
  imageMode(CENTER);
  image(this.image, 0,0,this.radius, this.radius)
  pop();
  }
};
  