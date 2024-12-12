
class Juego {
  constructor() {
    this.personaje = new Personaje(20, 20);
    this.laberinto = new Laberinto(this.personaje);
    this.vidas = 3;
  }

  dibujar() {
    background(0);
    this.laberinto.dibujar();
    this.personaje.dibujar();
    this.mostrarVidas();

    if (this.laberinto.verificarColisiones(this.personaje)) {
      this.vidas--;
      this.personaje.resetear();

      if (this.vidas <= 0) {
        this.mostrarMensajeFinal("¡Perdiste!");
      }
    }
    this.personaje.actualizar();
  }

  mostrarVidas() {
    fill(255);
    textSize(16);
    text("Vidas: " + this.vidas, 10, 20);
  }

  mostrarMensajeFinal(mensaje) {
    noLoop();
    textSize(32);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    text(mensaje, width / 2, height / 2);
  }
}
