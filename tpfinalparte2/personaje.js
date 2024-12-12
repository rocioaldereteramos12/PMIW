
class Personaje {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamano = 30;
    this.superpoderActivo = false;
    this.tiempoSuperpoder = 0;
  }

  dibujar() {
    fill(this.superpoderActivo ? color(0, 255, 0) : color(255, 255, 0));
    ellipse(this.x, this.y, this.tamano, this.tamano);
  }

  mover(dx, dy, laberinto) {
    let nuevoX = this.x + dx;
    let nuevoY = this.y + dy;

    if (laberinto.esCamino(nuevoX, nuevoY)) {
      this.x = nuevoX;
      this.y = nuevoY;
    }
  }

  activarSuperpoder() {
    this.superpoderActivo = true;
    this.tiempoSuperpoder = 600; 
  }

  actualizar() {
    if (this.superpoderActivo) {
      this.tiempoSuperpoder--;
      if (this.tiempoSuperpoder <= 0) {
        this.superpoderActivo = false;
      }
    }
  }

  resetear() {
    this.x = 20;
    this.y = 20;
  }
}
