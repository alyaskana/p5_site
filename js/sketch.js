function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("canvas");
  background(250, 211, 228)
}

function draw() {
  fill(250, 211, 228, 15);
  rect(0, 0, width, height);
  fill(250, 211, 228);
  stroke('#24408F');
  ellipse(mouseX, mouseY, 60, 60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}