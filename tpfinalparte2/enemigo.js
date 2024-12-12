class Enemigo {
  constructor(columna, fila) {
    this.columna = int(columna);
    this.fila = int(fila);
    this.tamano = 30;
    this.dx = 1;
    this.dy = 0;
    this.contadorMovimiento = 0;
    this.velocidadMovimiento = 30;
    this.temporalmenteInactivo = false; 
  }

  dibujar() {
    fill(this.temporalmenteInactivo ? color(128) : color(255, 0, 0));
    ellipse(this.columna * 40 + 20, this.fila * 40 + 20, this.tamano, this.tamano);
  }

  mover(laberinto) {
    if (this.temporalmenteInactivo) return;

    this.contadorMovimiento++;
    if (this.contadorMovimiento < this.velocidadMovimiento) {
      return;
    }
    this.contadorMovimiento = 0;

    let nuevaColumna = this.columna + this.dx;
    let nuevaFila = this.fila + this.dy;

    if (
      nuevaColumna >= 0 &&
      nuevaColumna < laberinto.columnas &&
      nuevaFila >= 0 &&
      nuevaFila < laberinto.filas &&
      laberinto.celdas[nuevaFila][nuevaColumna].tipo === 0
    ) {
      this.columna = nuevaColumna;
      this.fila = nuevaFila;
    } else {
      this.cambiarDireccion();
    }
  }

  cambiarDireccion() {
    if (this.dx === 1 && this.dy === 0) {
      this.dx = 0;
      this.dy = 1;
    } else if (this.dx === 0 && this.dy === 1) {
      this.dx = -1;
      this.dy = 0;
    } else if (this.dx === -1 && this.dy === 0) {
      this.dx = 0;
      this.dy = -1;
    } else if (this.dx === 0 && this.dy === -1) {
      this.dx = 1;
      this.dy = 0;
    }
  }
    colisionar(personaje) {
    let distancia = dist(this.x, this.y, personaje.x, personaje.y);
    if (distancia < (this.tamano + personaje.tamano) / 2) {
      personaje.perderVida(); 
    }
  }
}



 
