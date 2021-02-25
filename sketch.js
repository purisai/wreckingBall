const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


function setup(){
    var canvas = createCanvas(1300,900);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,850,1200,20)

    box1=new Box(900,100,80,80);
    box2=new Box(900,100,80,80);
    box3=new Box(900,100,80,80);
    box4=new Box(900,100,80,80);
    box5=new Box(900,100,80,80);
    box6=new Box(900,100,80,80);
    box7=new Box(800,100,80,80);
    box8=new Box(800,100,80,80);
    box9=new Box(800,100,80,80);
    box10=new Box(800,100,80,80);
    box11=new Box(800,100,80,80);
    box12=new Box(800,100,80,80);
    box13=new Box(800,100,80,80);
    box14=new Box(700,100,80,80);
    box15=new Box(700,100,80,80);
    box16=new Box(700,100,80,80);
    box17=new Box(700,100,80,80);
    box18=new Box(700,100,80,80);
    box19=new Box(700,100,80,80);
    box20=new Box(700,100,80,80);
    box21=new Box(700,100,80,80);

    ball=new Ball(250,250,100,100)
    rope=new Rope(ball.body,{x:500, y:50});

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    ball.display()
    rope.display();
}