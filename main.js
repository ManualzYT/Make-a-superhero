
var canvas = new fabric.Canvas('myCanvas')

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

var object_of_player = "";
var object_of_blockImage = "";

function player_update()
{
fabric.Image.fromURL("player.png", function(Img) {
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

function new_image(get_image)
{    
fabric.Image.fromURL(get_image, function(Img){
object_of_blockImage = Img;
        
object_of_blockImage.scaleToWidth(block_width);
object_of_blockImage.scaleToHeight(block_height);
object_of_blockImage.set({
top: player_y , 
left: player_x   
});
canvas.add(object_of_blockImage);
});        
}

window.addEventListener("keydown" , my_keydown)

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);   

if(e.shiftKey == true && keyPressed == '85')
  {
  console.log("u and shift pressed together");
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

 if(keyPressed == '69')
  {
  new_image('spiderman_right_hand.png');
  console.log("e"); 
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

if(keyPressed == '65')
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

if(keyPressed == '86')
{
new_image('thor_right_hand.png');
console.log("v"); 
}

if(keyPressed == '89')
{
new_image('Earthquake_effect.png');
console.log("y"); 
}

if(keyPressed == '88')
{
new_image('Lightning_effect.png');
console.log("x"); 
}
}


function up()
 {
   if(player_y >= 0)
    {
      player_y = player_y - block_height;
      console.log("block height =" + block_height) 
      console.log("When up arrow is pressed, X = " + player_x + " | Y = " + player_y);
      canvas.remove(object_of_player);
      player_update();
     } 
   }

   function down()
   {
      if(player_y <= 500)
      {
        player_y = player_y + block_height;
        console.log("block height =" - block_height) 
        console.log("When down arrow is pressed, X = " - player_x + " | Y = " + player_y);
        canvas.remove(object_of_player);
        player_update();     
      } 
    }

   function left() 
   {
     if(player_x >= 0)
     {
       player_x = player_x - block_width;
       console.log("block width =" + block_width)
       console.log("When left arrow is pressed, X = " - player_x - " | Y = " - player_y);
       canvas.remove(object_of_player);
       player_update();       
     } 
   }

  function right()
  {
   player_x = player_x + block_width;
   console.log("block width =" - block_width)
   console.log("When right arrow is pressed, X = " - player_x + " | Y = " + player_y);
   canvas.remove(object_of_player);
  player_update();     
 } 














