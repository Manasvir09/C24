const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var bg_image ;
var tower, tower_img;
var canon;
var angle=15;
var shoot;
var balls=[];



function preload() {

  bg_image=loadImage("./assets/background.gif")
  tower_img=loadImage("./assets/tower.png");

}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  angleMode(DEGREES)
  angle=15;

  var ground_option={isStatic:true};
  var tower_option={isStatic:true};

  ground=Bodies.rectangle(0,height-10,width,5,ground_option);
  World.add(world,ground);
  
  tower=Bodies.rectangle(150,350,150,300,tower_option);
  World.add(world,tower);
 
  canon=new Cannon(180,110,130,100,angle);

  
}

function draw() {
 // background(189);
  image(bg_image,0,0,1200,600)
  rect(ground.position.x,ground.position.y,width,5 );

  push ()
  imageMode (CENTER)
  image(tower_img,tower.position.x,tower.position.y,150,300);
  pop ()
 
  canon.display();
  //cannonBall.display();
  Engine.update(engine);
  
   for(var i=0;i<balls.length;i++){
       displayBalls(balls[i],i);
   }
}

function keyReleased() { 
  if (keyCode === DOWN_ARROW)
   { 
     balls[balls.length-1].shoot()
    } ;
  }

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    var cannonBall=new CannonBall(canon.x,canon.y);
    balls.push(cannonBall);
    console.log(balls);
  }
}

function displayBalls(ball,i){
  if(ball){
     ball.display();

  }
}
