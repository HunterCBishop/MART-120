var fontsize = 32;
var fontmove = 5;
var count = 0;
var squarehor = 200;
var squarevert = 185;
var squaredirect = 3;
var armhor = 250;
var armhor2 = 290;
var armvert = 100;
var armdirect = 1;
var leghor = 200;
var legvert = 185;
var legdirect = 3;

var eyehor = 200;
var eyevery = 100;
var eyedirect = 2;

function setup()
{
createCanvas(500, 600);
}

function draw()
{
strokeWeight(6);
background(300,2,17);
fill(0, 204, 0);
circle(250,120,120);

textSize(32)
text("Hunter Bishop",300,40);

   
fill(0,204,0);
rect(150,squarehor,190,170)
squarehor += squaredirect;
if(squarehor <= 0 || squarehor >= 450 )
{
squaredirect *= -1;
}
line(armhor,400,175,200);
armhor+=armdirect;
if(armhor >= 418 || armhor <= 82)
{
armdirect *= -1;
}
line(325,200,armhor2,400);
armhor2+=armdirect;
if(armhor2 >= 400 || armhor2 <= 80)
{
armdirect *= -1;
}
line(209,145,240,145);
line(190,leghor,190,355);
leghor += legdirect;
if(leghor <= 0 || leghor >= 450 )
{
legdirect *= -1;
}
line(300,leghor,300,355);
leghor += legdirect;
if(leghor <= 0 || leghor >= 450 )
{
legdirect *= -1;
}


fill(0);
point(eyehor,eyevery);
eyehor+=eyedirect;
if(eyehor >= 418 || eyehor <= 82)
{
eyedirect *= -1;
}
eyevery += eyedirect;
if(eyevery <= 0 || eyevery >= 450 )
{
eyedirect *= -1;
}
point(235,120);

fill(400,400,400);
triangle(220,60,250,15,280,60)


fill(120);
textSize(fontsize);
fontsize+= fontmove;
count++;
if(count > 5)
{
fontmove *=-1;
count = 0;
}
text("ITS ME",125,550);




}
