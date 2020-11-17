var squarehor = 20;
var squarevert = 20;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
var circlehor = 30;
var circlehors = [];
var circlevert = 50;
var circleverts = [];
var circlehorSpeed;
var circlehorSpeeds=[];
var circlevertSpeed;
var circlevertSpeeds=[];
var enemy2hor = 30;
var enemy2hors = [];
var enemy2vert = 50;
var enemy2verts = [];
var enemy2horspeed;
var enemy2horspeeds = [];
var enemy2vertspeed;
var enemy2vertspeeds = [];
var mouseShapeX;
var mouseShapeY;
var shapeXSpeeds=[];
var shapeYSpeeds=[];
var diameters=[];
function setup()
{
createCanvas(500, 600);
circlehorSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 20)) + 1);
circlevertSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 20)) + 1);
enemy2horspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 20)) + 1);
enemy2vertspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 20)) + 1);
for (var i = 0; i < 50; i++) {
circlehorSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
circlevertSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
enemy2horspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
enemy2vertspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
circlehors[i] = getRandomNumber(500);
circleverts[i] = getRandomNumber(600);
diameters[i] = getRandomNumber(30);
enemy2verts[i] = getRandomNumber(600)
enemy2hors[i] = getRandomNumber(500)
}
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
CreateBorders();
MoveGuy();
Win();
for (var i = 0; i < circlehors.length; i++) {
fill(25,25,255);
circle(circlehors[i], circleverts[i], diameters[i]);
circlehorSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
circlevertSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
circlehors[i] += circlehorSpeeds[i];
circleverts[i] -= circlevertSpeeds[i];
if (circlehors[i] > width) {
circlehors[i] = 0;
}
if (circlehors[i] < 0) {
circlehors[i] = width;
}
if (circleverts[i] > height) {
circleverts[i] = 0;
}
if (circleverts[i] < 0) {
circleverts[i] = height;
}
}
for (var i = 0; i < enemy2hors.length; i++) {
fill(255,25,255);
circle(enemy2hors[i], enemy2verts[i], diameters[i]);
enemy2horspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
enemy2vertspeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
enemy2hors[i] += circlehorSpeeds[i];
enemy2verts[i] += circlevertSpeeds[i];
if (enemy2hors[i] > width) {
enemy2hors[i] = 0;
}
if (enemy2hors[i] < 0) {
enemy2hors[i] = width;
}
if (enemy2verts[i] > height) {
enemy2verts[i] = 0;
}
if (enemy2verts[i] < 0) {
enemy2verts[i] = height;
}
}
}

fill(255,255,255);
rect(mouseShapeX, mouseShapeY, 30);

function CreateBorders()
{
fill(255,255,255);
rect(0,0,width,30);
rect(0,0,30,height);
rect(0, height-30,width, 30); 
rect(width-30,0,30,height-90);
textSize(30);
text("EXIT", width-70,height-50)
}

function MoveGuy()
{
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
}



function Win()
{
if(squarehor > width && squarevert > width-50)
{
fill(255,255,255);
stroke(20);
textSize(50);
text("Success", width/2-25, height/2-25);
}
}function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}

