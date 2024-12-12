class Celda {
  constructor(posX, posY) {
    this.posX = posX * 40; 
    this.posY = posY * 40;
    this.tipo = 0; 
  }

  dibujar() {
    if (this.tipo === 0) {
      fill(255);
    } else if (this.tipo === 1) {
      fill(0, 0, 255);
    } else if (this.tipo === 2) {
      fill(255, 255, 0);
    } else if (this.tipo === 3) {
      fill(0, 255, 0);
    }
    rect(this.posX, this.posY, 40, 40);
  }

  setearTipo(tipo) {
    this.tipo = tipo;
  }
}
