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