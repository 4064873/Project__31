const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var base1,base2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var box10,box11,box12,box13,box14,box15;
var box16,box17,box18,box19;
var box20,box21,box22,box23,box34,box25,box26;
var box27,box28,box29,box30,box31;
var box32,box33,box34,box35;

var polygon,ground,slingshot;
var score = 0;

function setup() {
  createCanvas(1435,700);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
  base1 = new Ground(700,600,300,20)
  base2 = new Ground(1000,300,250,20)

  //First level
  box1 = new Box(700,580,30,40,PI)
  box2 = new Box(680,580,30,40,PI)
  box3 = new Box(660,580,30,40,PI)
  box4 = new Box(640,580,30,40,PI)
  box5 = new Box(620,580,30,40,PI)
  box6 = new Box(720,580,30,40,PI)
  box7 = new Box(740,580,30,40,PI)
  box8 = new Box(760,580,30,40,PI)
  box9 = new Box(760,580,30,40,PI)

  //Second level
  box10 = new Box2(700,540,30,40,PI)
  box11 = new Box2(680,540,30,40,PI)
  box12 = new Box2(670,540,30,40,PI)
  box13 = new Box2(664,540,30,40,PI)
  box14 = new Box2(720,540,30,40,PI)
  box15 = new Box2(740,540,30,40,PI)

  //Third level 
  box16 = new Box3(699,480,30,40,PI)
  box17 = new Box3(667,480,30,40,PI)
  box18 = new Box3(731,480,30,40,PI)

  //Fourth level
  box19 = new Box4(700,440,30,40,PI)

  //First lvel, base2
  box20 = new Box5(1000,280,30,40,PI)
  box21 = new Box5(960,280,30,40,PI)
  box22 = new Box5(950,280,30,40,PI)
  box23 = new Box5(920,280,30,40,PI)
  box24 = new Box5(1030,280,30,40,PI)
  box25 = new Box5(1060,280,30,40,PI)
  box26 = new Box5(1090,280,30,40,PI)

  //Second level, base2
  box27 = new Box6(1000,240,30,40,PI)
  box28 = new Box6(970,240,30,40,PI)
  box29 = new Box6(940,240,30,40,PI)
  box30 = new Box6(1030,240,30,40,PI)
  box31 = new Box6(1060,240,30,40,PI)

  //Third level,base2
  box32 = new Box7(1000,200,30,40,PI)
  box33 = new Box7(970,200,30,40,PI)
  box34 = new Box7(1030,200,30,40,PI)

  //Fourth level,base2
  box35 = new Box8(1000,155,30,40,PI)

  ground = new Ground(717.5,680,1435,50)
  polygon = new Polygon(70,300,45)

  slingshot = new Slingshot(polygon.body,{x:70,y:300})

}

function draw() {
  background(201,208,224);  

  noStroke()
    textSize(20)
    fill("white")
    text("score " +score,750,40)

  base1.display();
  base2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  //score1
  box1.score() 
  box2.score()
  box3.score()
  box4.score()
  box5.score()
  box6.score()
  box7.score()
  box8.score()
  box9.score()
  
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  //score2  
  box10.score()
  box11.score()
  box12.score()
  box13.score()
  box14.score()
  box15.score()

  box16.display();
  box17.display();
  box18.display();

  //score3
  box16.score()
  box17.score()
  box18.score()

  box19.display();

  //score4
  box19.score()

  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  //score5
  box20.score()
  box21.score()
  box22.score()
  box23.score()
  box24.score()
  box25.score()
  box26.score()

  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  
  //score6
  box27.score()
  box28.score()
  box29.score()
  box30.score()
  box31.score()

  box32.display();
  box33.display();
  box34.display();

  //score7
  box32.score()
  box33.score()
  box34.score()

  box35.display();

  //score8
  box35.score()
  
  ground.display();
  slingshot.display();
  polygon.display();
  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  slingshot.fly()
}

function keyPressed(){
  if(keyCode === 32) {
    slingshot.attach(polygon.body)
  }
}