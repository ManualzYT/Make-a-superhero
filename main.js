const { fabric } = require("./fabric");
var canvas = new fabric.Canvas ('myCanvas')

block_width = 20;
block_height = 20;

player_x = 10;
player_y = 10

var object_of_player = "";
var object_of_blockImage = "";

function player_update(){
fabric.Image.fromURL("SuperHero.png", function(Img) {
object_of_player = Img;    

object_of_player.scaleToWidth(150);
object_of_player.scaleToHeight(140);
object_of_player.set({
top: player_y , 
left: player_x   
});
canvas.add(object_of_player);
});
}



function new_image(get_image){
    
fabric.Image.fromURL(get_image, function(Img){
block_image_object = Img;
        
object_of_blockImage.scaleToWidth(block_width);
object_of_blockImage.scaleToHeight(block_height);
object_of_blockImage.set({
top: player_y , 
left: player_x   
});
canvas.add(object_of_blockImage);
});
        
}

window.addEventListener("keydown," , my_keydown)

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);   
}
if(e.shiftKey == true && keyPressed == '80')
  {
  console.log("p and shift pressed together");
  block_width = block_width + 10;
  block_height = block_height + 10;
  document.getElementById("current_width").innerHTML = block_width;
  document.getElementById("current_height").innerHTML = block_height; 
  }

  if(e.shiftKey == true && keyPressed == '77')
  {
  console.log("m and shift pressed together");
  block_width = block_width - 10;
  block_height = block_height - 10;
  document.getElementById("current_width").innerHTML = block_width;
  document.getElementById("current_height").innerHTML = block_height; 
  }


  if(keyPressed == '38')
  {
     up();
     console.log("up"); 
  }
  
  if(keyPressed == '40')
  {
     down();
     console.log("down")
  }
  
  if(keyPressed == '37')
  {
     left();
     console.log("left")
  }
  
  if(keyPressed == '39')
  {
     right();
     console.log("right")
  }

if(keyPressed == '70')
{
   new_image('IronMans_Helmet.png')
   console.log("f")   
}

if(keyPressed == '67')
{
   new_image('ironman_body.png')
   console.log("c")   
}

if(keyPressed == '71')
{
   new_image('ironman_left_hand.png')
   console.log("g")   
}

 if(keyPressed == '66')
  {
  new_image('spidermansBody.jpg');
  console.log("b"); 
 }

 if(keyPressed == '68')
  {
  new_image('spiderman_face.png');
  console.log("d"); 
 }

 if(keyPressed == '81')
  {
  new_image('spiderman_legs.png');
  console.log("q"); 
 }

 if(keyPressed == '66')
  {
  new_image('spiderman_right_hand.png');
  console.log("b"); 
 }

 if(keyPressed == '72')
  {
  new_image('hulk_legs.png');
  console.log("h"); 
 } 

 if(keyPressed == '76')
 {
 new_image('hulk_face.png');
 console.log("l"); 
} 

if(keyPressed == '82')
{
new_image('hulk_body.png');
console.log("r"); 
} 

if(keyPressed == '75')
{
new_image('hulk_left_hand.png');
console.log("k"); 
} 

if(keyPressed == '75')
{
new_image('hulk_right_hand.png');
console.log("a"); 
} 

if(keyPressed == '84')
{
new_image('thor_face.png');
console.log("t"); 
} 

if(keyPressed == '83')
{
new_image('thor_left_hand.png');
console.log("s"); 
}

if(keyPressed == '80')
{
new_image('thor_right_hand.png');
console.log("p"); 
}



function up()
 {
   if(player_y >= 0)
    {
      player_x = player_y - 10;
       console.log("When up arrow is pressed, x = " + player_x + " | y = " + player_y);
      new_image();
     } 
   }

   function down()
   {
      if(player_y <= 500)
      {
        player_y = player_y + 10;
        console.log("When up arrow is pressed, x = " + player_x + " | y = " + player_y);
        new_image();     
      } 
    }

   function left() 
   {
     if(player_x >= 0)
     {
       player_x = player_x - 10;
       console.log("When up arrow is pressed, x = " + player_x + " | y = " + rover_y);
       new_image();       
     } 
   }

  function right()
  {
    player_x = player_x + 10;
   console.log("When up arrow is pressed, x = " + player_x + " | y = " + player_y);
   new_image();     
 } 














