//Create variables here
var dog,happyDog;
var database;
var foodS;
var foodStock;
var dogImg,ImgDog;


function preload()
{
  dogImg = loadImage("images/dogImg.png");
  ImgDog = loadImage("images/dogImg1.png")
  
}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database()
  foodStock = database.ref('food');
  //foodStock.on("value",readStock);

  dog = createSprite(200,200,50,50)
  dog.addImage(dogImg)
  dog.scale = 0.2
  
}


function draw() {  

  background(46,139,87)

  if(keyWentDown(UP_ARROW)){
   // writeStock(foodS);
    dog.addImage(ImgDog);
  }

  drawSprites();
  //add styles here
  textSize(20)
  fill("black")
  stroke("white")
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",50,100)
  text("food Availabe: " + foodS, 100, 400 )
  
}

//function to read value from db
function readStock(data){
  foodS = data.val();
}

//function to write values in db
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x -1;
  }

  database.ref('/').update({
  food: x
  })
}

