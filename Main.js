canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

cars_image_array=["car1.jpg","car3.jpg","car2.jpg","car4.jpg"];
random_number=Math.floor(Math.random()*5);
console.log (random_number);

car_width=100;
car_height=90;

sprite_image=cars_image_array[random_number];
console.log ("sprite_image="+sprite_image);
car_image=cars_image_array;

rover_x=10;
rover_y=10;

function add()
{
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
}

function uploadrover()
{
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width, rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    
    if(keypressed=='37')
    {
        console.log("left");
        left();
    }
    if(keypressed=='38')
    {
        up();
        console.log("up");
    }
    if(keypressed=='39')
    {
        right();
        console.log("right");
    }
    if(keypressed=='40')
    {
        down();
        console.log("down");
    }
}
 
function up()
 {
     if(rover_y>=0)
     {
         rover_y=rover_y-10;
         console.log ("When up is pressed,x="+rover_x+"| y="+rover_y);
         uploadBackground();
         uploadrover();
     }
 }

 function down()
 {
     if(rover_y<=500)
     {
         rover_y=rover_y+10;
         console.log ("When down is pressed,x="+rover_x+"| y="+rover_y);
         uploadBackground();
         uploadrover();
     }
 }

 function right()
 {
     if(rover_x<=700)
     {
         rover_x=rover_x+10;
         console.log ("When up is pressed,x="+rover_x+"| y="+rover_y);
         uploadBackground();
         uploadrover();
     }
 }

 function left()
 {
     if(rover_x>=0)
     {
         rover_x=rover_x-10;
         console.log ("When up is pressed,x="+rover_x+"| y="+rover_y);
         uploadBackground();
         uploadrover();
     }
 }