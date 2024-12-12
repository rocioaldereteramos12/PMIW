
class Puntos {
  constructor(columna, fila) {
    this.columna = columna;
    this.fila = fila;
    this.tamano = 10;
    this.activo = true; 
  }

  dibujar() {
    if (this.activo) {
      fill(255, 165, 0);
      ellipse(this.columna * 40 + 20, this.fila * 40 + 20, this.tamano, this.tamano);
    }
  }

  comer(personaje) {
    let distancia = dist(
      personaje.x,
      personaje.y,
      this.columna * 40 + 20,
      this.fila * 40 + 20
    );
    if (this.activo && distancia < (this.tamano + personaje.tamano) / 2) {
      this.activo = false;
      return true;
    }
    return false;
  }
}
