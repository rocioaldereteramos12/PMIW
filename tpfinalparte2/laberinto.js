
class Laberinto {
  constructor(personaje) {
    this.enemigos = [];
    
  }

  esCamino(x, y) {
    
  }

  agregarEnemigo(enemigo) {
    this.enemigos.push(enemigo);
  }

  verificarColisiones(personaje) {
    for (let enemigo of this.enemigos) {
      let distancia = dist(personaje.x, personaje.y, enemigo.x, enemigo.y);
      if (distancia < (personaje.tamano + enemigo.tamano) / 2) {
        if (!personaje.superpoderActivo) {
          return true; 
        }
      }
    }
    return false;
  }

  verificarRecoleccion(personaje) {
  }
}
