class Cannon {
    constructor(x, y, w, h,angle) 
    {
      
      this.w = w;
      this.h = h;
      this.x = x;
      this.y = y;
      this.angle = angle;

      this.cannonimg = loadImage("./assets/canon.png");
      this.cannonBaseimg = loadImage("./assets/cannonBase.png");
    }
  
    display() {
      if(keyIsDown(RIGHT_ARROW)&&this.angle<70){
         this.angle+=1
      };

      if(keyIsDown(LEFT_ARROW)&&this.angle>-30){
        this.angle-=1
     };
         push(); 
         translate(this.x, this.y); 
         rotate(this.angle);
         imageMode(CENTER);
         image(this.cannonimg, 0, 0, this.w, this.h); 
         pop();
        image(this.cannonBaseimg,70, 20, 200, 200);
        noFill();
     }
    
  
  
}