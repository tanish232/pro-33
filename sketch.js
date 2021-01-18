var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[];
var divisionHeight=300;
var score =0;
var particle;
var turn=0;
gameState="play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  text("SCORE "+ score,100,50)
  text("100",420,550)
  text("100",500,550)
  text("100",340,550)
  text("200",580,550)
  text("200",660,550)
  text("200",740,550)
  text("500",260,550)
  text("500",180,550)
  text("500",100,550)
  text("500",20,550)
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  if(particle!=null){
   particle.display(); 
  }
  if(turn>=5){
   gameState="end"; 
  }  
  
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePresssed(){
if(gameState!==end)
turn++;
particle=new Particle(mouseX,10,10,10)
}