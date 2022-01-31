
let x, y, r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  r = random(20);
  g = 0; 
  b = random (50);
  x = random(width);
  y = random(height);
  fill(r, g, b, 100);
  circle (x, y, 9);
  noStroke();
}
  