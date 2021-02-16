class Hero{
  constructor(x, y,radius){
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
  }
  this.body = Bodies.circle(x, y, radius,options);
  this.x=x;
  this.y=y;
  this.radius=radius;
  World.add(world,this.body);
  this.image=loadImage("pro-c34+images\Superhero-01.png");
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
  