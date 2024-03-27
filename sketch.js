function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(135, 206, 235); 



  
  fill(255, 255, 0); 
  ellipse(200, 200, 80, 80); 
  

  fill(255, 255, 0); 
  for (let i = 0; i < 12; i++) {
    let angle = TWO_PI / 12 * i;
    let rayX = 200 + cos(angle) * 40;
    let rayY = 200 + sin(angle) * 40;
    triangle(200, 200, rayX, rayY, 200 + cos(angle + PI/8) * 60, 200 + sin(angle + PI/8) * 60);
  }
  
 
  let casaW = 200;
  let casaH = 150;
  
 
  let casaX = width / 2 - casaW / 2;
  let casaY = height / 2 - casaH / 2;
  

  fill(255, 0, 0); 
  rect(casaX, casaY, casaW, casaH); 
  
  fill(0, 255, 0); 
  triangle(casaX, casaY, casaX + casaW, casaY, casaX + casaW / 2, casaY - casaW / 2); 
  
  fill(255); 
  rect(casaX + 50, casaY + 50, 50, 50); 
  
  fill(139, 69, 19); 
  rect(casaX + 120, casaY + 75, 50, 75); 
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
