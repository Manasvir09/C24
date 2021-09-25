class CannonBall 
{
  constructor(x, y) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.circle(x, y,30, options);
    this.image=loadImage("./assets/cannonball.png");
    this.r=30;
    World.add(world, this.body);
  }

  display(){
      var pos=this.body.position
      push()
    imageMode(CENTER);
    image(this.image,pos.x,pos.y, this.r,this.r);
    pop ()
  }
  shoot(){
    Matter .Body. setStatic(this.body,false); 
    var angle=canon.angle;
    angle=angle*(3.14/180)
    var velocity=p5.Vector.fromAngle(angle);
    velocity.mult(0.5);
    Matter.Body.setVelocity(this.body,{ x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)})
  }
}
