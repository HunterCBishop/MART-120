var squarehor = 20;
var squarevert = 20;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
var circlehor = 30;
var circlevert = 50;
var circlehorSpeed;
var circlevertSpeed;
var enemy2hor = 30;
var enemy2vert = 50;
var enemy2horspeed;
var enemy2vertspeed;
var mouseShapeX;
var mouseShapeY;
function setup()
{
createCanvas(500, 600);
circlehorSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 20)) + 1);
circlevertSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 20)) + 1);
enemy2horspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 20)) + 1);
enemy2vertspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 20)) + 1);
}
function mouseClicked()
{
mouseShapeX = mouseX;
mouseShapeY = mouseY;
}
function draw()
{
background(40,40,40);
stroke(0);
fill(255,255,255);
rect(0,0,width,30);
rect(0,0,30,height);
rect(0, height-30,width, 30); 
rect(width-30,0,30,height-90);

textSize(30);
text("EXIT", width-70,height-50)

fill(255,255,255);
rect(mouseShapeX, mouseShapeY, 30);

fill(255,25,25);
rect(squarehor,squarevert,25);
if(keyIsDown(w))
{
squarevert -= 3;   
}
if(keyIsDown(s))
{
squarevert += 3;   
}
if(keyIsDown(a))
{
squarehor -= 3;   
}
if(keyIsDown(d))
{
squarehor += 3;   
}

fill(25,25,255);
circle(circlehor, circlevert, 50);

 
circlehorSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
circlevertSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
circlehor += circlehorSpeed;
circlevert -= circlevertSpeed;
 
if(circlehor > width)
{
circlehor = 0;
}
if(circlehor < 0)
{
circlehor = width;
}
if(circlevert > height)
{
circlevert = 0;
}
if(circlevert < 0)
{
circlevert = height;
}

fill(255,25,255);
circle(enemy2hor, enemy2vert, 50);
enemy2horspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
enemy2vertspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
enemy2hor += enemy2horspeed;
enemy2vert += enemy2vertspeed;
if(enemy2hor > width)
{
enemy2hor = 0;
}
if(enemy2hor < 0)
{
circlehor = width;
}
if(enemy2vert > height)
{
enemy2vert = 0;
}
if(enemy2vert < 0)
{
enemy2vert = height;
} 
if(squarehor > width && squarevert > width-50)
{
fill(255,255,255);
stroke(20);
textSize(50);
text("Success", width/2-25, height/2-25);
}
}

