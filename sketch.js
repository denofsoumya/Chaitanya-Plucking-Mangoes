
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload(){
	boy1 = loadImage("boy.png")
}
{
	
}

function setup() {
	createCanvas(800, 800);
boy2 = createSprite(195, 475, 70, 70)
boy2.addImage(boy1)
boy2.scale=0.1


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  tree1 = new Tree(550, 350, 25, 25)
  mango2 = new MangoClass(500, 360, 5)
  mango3 = new MangoClass(400, 321, 5)
  mango4 = new MangoClass(675, 337, 5)
  mango5 = new MangoClass(496, 276, 5)
  mango6 = new MangoClass(582, 283, 5)
  mango1 = new MangoClass(596, 180, 5)
  mango7 = new MangoClass(485, 195, 5)
  mango8 = new MangoClass(731, 292, 5)
  mango9 = new MangoClass(684, 227, 5)
  mango10 = new MangoClass(416 , 260, 5)
ground1 = new GroundClass(400, 550, 800, 20)
stone1 = new StoneClass(400, 400, 10)
slingshot = new Slingshot(stone1.body,{x:144,y:419},1,0.004);

}


function draw() {
  fill("red")
	image(boy1, 200, 200)
	
  rectMode(CENTER);
  background(0);
  text(mouseX, 375, 400)
  text(mouseY, 400, 400)

  tree1.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  ground1.display()
  stone1.display()
  detectCollision(stone1, mango1)
detectCollision(stone1, mango2)

detectCollision(stone1, mango3)

detectCollision(stone1, mango4)
detectCollision(stone1, mango5)
detectCollision(stone1, mango6)
detectCollision(stone1, mango7)
detectCollision(stone1, mango8)
detectCollision(stone1, mango9)
detectCollision(stone1, mango10)


  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
  slingshot.fly();
}
function detectCollision(stoneObj, mangoObj){
  var distance = dist(stoneObj.body.position.x, stoneObj.body.position.y, mangoObj.body.position.x,  mangoObj.body.position.y)
  if (distance<=stoneObj.radius+mangoObj.radius){
    Matter.Body.setStatic(mangoObj.body, false)
   
  }
}



