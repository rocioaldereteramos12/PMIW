
let juego;

function setup() {
  createCanvas(640, 480); 
  juego = new ProgramaPrincipal();
}

function draw() {
  juego.dibujar();
}

function keyPressed() {
  juego.teclaPresionada();
}
