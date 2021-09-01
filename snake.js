var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
var snakeH = 10;
var snakeW = 10;
var dir="right";
var score=0;

//snake

function drawsnake(x,y){
ctx.fillStyle= "lightblue";
ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
ctx.fillStyle= "black";
ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
}

//draw(5,2);
//defining snake length
var len = 4;
var snake = [];
for(var i=len-1;i>=0;i--)
{
    snake.push({
        x:i,
        y:0
    })
}

document.addEventListener("keydown",dirContral)
function dirContral(e){
    if(e.keyCode==37 && dir!="right" )
    {dir="left";}
    else if(e.keyCode==38 && dir!="down" ){
        dir="up";}
        else if(e.keyCode==39 && dir!="left" ){
            dir="right";}
            else if(e.keyCode==40 && dir!="up" ){
                dir="down";}

            }





            //draw food
            function drawfood(x,y){
                ctx.fillStyle= "red";
                ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
                ctx.fillStyle= "black";
                ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
                }
//create food
var food={
x : Math.floor(Math.random()*((cvs.width/snakeW)-1)+1),
 y : Math.floor(Math.random()*((cvs.height/snakeH)-1)+1)
}

function draw(){
    ctx.clearRect(0,0,cvs.width,cvs.height)
for(var i=0;i<snake.length;i++)
{
drawsnake(snake[i].x,snake[i].y)
}


//defining snake head
var snakeX = snake[0].x
var snakeY = snake[0].y


drawfood(food.x,food.y);

function has_game_ended()
{
for (let i = 4; i < snake.length; i++)
  {    
    const has_collided = snake[i].x === snake[0].x && snake[i].y === snake[0].y
    if (has_collided) 
   { alert('game over');
       window.location.reload();
    clearInterval(loop);

  }
  }


if(snakeX<0 || snakeY<0 || snakeX>=cvs.width/snakeW || snakeY>=cvs.height/snakeH )
{
   //alert("game Over");
   if(!alert('game over')){window.location.reload();
clearInterval(loop); }
    
}
}

if(has_game_ended())
return ;

if(dir=="right")
{snakeX++;}
else if(dir=="left")
{snakeX--;}
else if(dir=="up")
{snakeY--;}
else if(dir=="down")
{snakeY++;}

if(snakeX==food.x && snakeY==food.y){
    food={
        x: Math.floor(Math.random()*((cvs.width/snakeW)-1)+1),
        y: Math.floor(Math.random()*((cvs.height/snakeH)-1)+1)
        }
score +=10;
document.getElementById("score").innerHTML=score;

//new head
var newhead={
    x:snakeX,
    y:snakeY
}

}
else
{snake.pop();
//new head
var newhead={
    x:snakeX,
    y:snakeY
}

}
snake.unshift(newhead);

}

var loop = setInterval(draw,100);
