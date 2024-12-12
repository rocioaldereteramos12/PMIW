class PantallaPrincipal {
  constructor(programa) {
    this.programa = programa;
  }

  dibujar() {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("LABERINTO", width / 2, height / 4);
    textSize(16);
    text("Presiona 'J' para jugar", width / 2, height / 2);
    text("Presiona 'I' para instrucciones", width / 2, height / 2 + 30);
    text("Presiona 'C' para créditos", width / 2, height / 2 + 60);
  }

  teclaPresionada(key) {
    if (key === "J" || key === "j") {
      this.programa.cambiarPantalla("juego");
    } else if (key === "I" || key === "i") {
      this.programa.cambiarPantalla("instrucciones");
    } else if (key === "C" || key === "c") {
      this.programa.cambiarPantalla("creditos");
    }
  }
}
