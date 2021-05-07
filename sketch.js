const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polgonImg



function preload(){
  polygonImg = loadImage("polygon.png")
;}

function setup(){
    createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

    ground = new Ground(500, 480, 1000, 10);
    
    base1 = new Ground(400, 380, 270, 10);
    base2 = new Ground(800,200, 200, 10);

    //1st Level
    box1 = new Box(320, 360, 40, 40);
    box2 = new Box(340, 360, 40, 40);
    box3 = new Box(380, 360, 40, 40);
    box4 = new Box(420, 360, 40, 40);
    box5 = new Box(460, 360, 40, 40);
    box6 = new Box(500, 360, 40, 40);
    
    //2nd Level
    box7 = new Box(320, 320, 40, 40);
    box8 = new Box(360, 320, 40, 40);
    box9 = new Box(400, 320, 40, 40);
    box10 = new Box(440, 320, 40, 40);
    box11 = new Box(480, 320, 40, 40);

    //3rd Level
    box12 = new Box(340, 280, 40, 40);
    box13 = new Box(380, 280, 40, 40);
    box14 = new Box(420, 280, 40, 40);
    box15 = new Box(460, 280, 40, 40);

    //4th Level
    box16 = new Box(360, 240, 40, 40);
    box17 = new Box(400, 240, 40, 40);
    box18 = new Box(440, 240, 40, 40);

    //5th Level
    box19 = new Box(380, 200, 40, 40);
    box20 = new Box(420, 200, 40, 40);

    //6th Level
    box21 = new Box(400, 160, 40, 40); 

    //1st Level
    box22 = new Box(740, 170, 40, 40);
    box23 = new Box(780, 170, 40, 40);
    box24 = new Box(820, 170, 40, 40);
    box25 = new Box(860, 170, 40, 40);

    //2nd Level
    box26 = new Box(760, 130, 40, 40);
    box27 = new Box(800, 130, 40, 40);
    box28 = new Box(840, 130, 40, 40);

    //3rd level
    box29 = new Box(780, 90, 40, 40);
    box30 = new Box(820, 90, 40, 40);

    //4th Level
    box31 = new Box(800, 50, 40, 40);

    polygon = Bodies.circle(50, 200, 20)
    World.add(world, polygon);

    slingShot = new Slingshot(this.polygon, {x:100, y:200});


    Engine.run(engine);

}

function draw(){
 background("black");

   ground.display();
   
   base1.display();
   base2.display();
   fill("pink");

   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   fill("blue");
   
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   fill("purple");

   box12.display();
   box13.display();
   box14.display();
   box15.display();
   fill("yellow");

   box16.display();
   box17.display();
   box18.display();
   fill("orange");

   box19.display();
   box20.display();
   fill("red");

   box21.display();
   fill("green")

   box22.display();
   box23.display();
   box24.display();
   box25.display();
   fill("red");

   box26.display();
   box27.display();
   box28.display();
   fill("orange")

   box29.display();
   box30.display();
   fill("yellow")

   box31.display();
   fill("pink")

   imageMode(CENTER);
   image(polygonImg, polygon.position.x, polygon.position.y, 50, 50);
   slingShot.display();
   

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}