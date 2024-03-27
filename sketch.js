function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(135, 206, 235); // Cer albastru



  // Soare
  fill(255, 255, 0); // Soare galben
  ellipse(200, 200, 80, 80); 
  
  // Raze de soare
  fill(255, 255, 0); // Raze galbene
  for (let i = 0; i < 12; i++) {
    let angle = TWO_PI / 12 * i;
    let rayX = 200 + cos(angle) * 40;
    let rayY = 200 + sin(angle) * 40;
    triangle(200, 200, rayX, rayY, 200 + cos(angle + PI/8) * 60, 200 + sin(angle + PI/8) * 60);
  }
  
  // Dimensiuni casa
  let casaW = 200;
  let casaH = 150;
  
  // Poziționare casa în centrul ecranului
  let casaX = width / 2 - casaW / 2;
  let casaY = height / 2 - casaH / 2;
  
  // Casa
  fill(255, 0, 0); // Casa rosie
  rect(casaX, casaY, casaW, casaH); // Corpul casei
  
  fill(0, 255, 0); // Acoperis verde
  triangle(casaX, casaY, casaX + casaW, casaY, casaX + casaW / 2, casaY - casaW / 2); // Acoperis
  
  fill(255); // Fereastra alba
  rect(casaX + 50, casaY + 50, 50, 50); // Fereastra
  
  fill(139, 69, 19); // Ușa maro
  rect(casaX + 120, casaY + 75, 50, 75); // Ușa
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
