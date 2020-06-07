const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball;
var bin1, bin2, bin3;
var land;
var backImg;
var keyCode = 0;

function preload() {
  backImg = loadImage("back.jpg");

  ballImg = loadImage("ball.png")
}

function setup() {
  createCanvas(1340,500);
  
  
  engine = Engine.create();
  world = engine.world;

 
  /*d1 = new Bin1(850, 325, 10, 50);
  d2 = new Bin2(850, 450, 225, 15);
  d3 = new Bin3(1063, 325, 10, 60);*/
  ball = new Ball(160,420,50,50);
  

  land = new Land(750,470,2000,20);


  /*var ball_opt = {
    isStatic : false,
    restitution : 0.3,
    friction : 0.5,
    density : 1.2
  }

  ball = Bodies.circle(160,420,30,ball_opt);
  World.add(world,ball);*/


  var bin_opt = {
    isStatic: true,
    restitution: 0.1
  }

  bin1 = Bodies.rectangle(850, 460, 10, 60, bin_opt);
  World.add(world,bin1);

  bin2 = Bodies.rectangle(925, 450, 150, 10, bin_opt);
  World.add(world,bin2);
  
  bin3 = Bodies.rectangle(990, 460, 10, 60, bin_opt);
  World.add(world,bin3);

}

function draw() {
  background(backImg);
  Engine.update(engine);
  
  
  
  /*console.log(d1.body.position.x)
  console.log(d1.body.position.y)
  d1.display();
  d2.display();
  d3.display();*/

  /*image(ballImg, ball.position.x, ball.position.y, 50, 50);*/

  fill(124, 9, 9);
  strokeWeight(0);
  rect(860, 400, 10, 60);
  rect(860, 460, 150, 10);
  rect(1000, 400, 10, 60);

  ball.display();

  land.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(ball.body, ball.position, {x:53, y:-53});
  }
}