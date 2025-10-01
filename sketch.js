function setup() {
  // crea un lienzo de 600x400 píxeles
  createCanvas(600, 400);
}

function draw() {
  // fondo azul marino
  background(25, 25, 112); // Midnight Blue

  // luna submarina en la esquina superior derecha
  fill(173, 216, 230); // Light Blue
  stroke(0, 191, 255); // Deep Sky Blue
  strokeWeight(10);
  circle(550, 50, 80);

  stroke(0);
  strokeWeight(1);

  // agua en la mitad inferior
  fill(0, 105, 148); // Ocean Blue
  rect(0, 200, 600, 200);

  // emojis marinos
  textSize(220);
  text("🪸", 10, 370); // coral

  textSize(90);
  text("🐠", mouseX, mouseY); // pez tropical
  text("🐟", mouseY, mouseX); // pez común
  text("🦑", mouseX, mouseX); // calamar
  text("🪼", mouseY, mouseY); // medusa
  text("🐬", 380, 350); // delfín

  // burbujas flotantes
  textSize(100);
  text("💧", 10, 70);
  text("💧", 150, 70);
  text("💧", 290, 70);
}
