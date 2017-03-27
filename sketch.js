var color = {
  r: 0,
  g: 0,
  b: 0
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  color.r = random(255);
  color.g = random(255);
  color.b = random(255);
  strokeWeight(4);
  stroke(255);
  
  if (mouseIsPressed) {
    background(0);
  }
  for (var x = 0; x <= mouseX; x += 50) {
    for (var y = 0; y <= mouseY; y += 50) {
      fill(color.r,color.g,color.b);
      ellipse(x,y,25,25);
    }
  }
}