/*
Christian-Thomas Dougas De Guzman Johnson
CSC 2463
Drawing With P5
*/

//Example 3
function setup() 
{
  createCanvas(400, 200);
}
  
function draw() 
{
  //Background
  background('#000000');
  //Pac-man
  fill('rgb(230, 230, 0)');
  arc(100, 100, 160, 160, 85.5, PI-QUARTER_PI, PIE);
  //Ghost
  fill('rgb(350, 30, 30)');
  ellipse(300, 100, 160, 160);
  noStroke();
  rect(220, 100, 160, 80);
  //Iris
  fill(255);  
  ellipse(260, 100, 50, 50); 
  ellipse(340, 100, 50, 50);
  //Pupil
  fill('rgb(30, 30, 230)');  
  ellipse(260, 100, 30, 30);  
  ellipse(340, 100, 30, 30);
}