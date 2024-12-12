class PantallaCreditos {
  constructor(programa) {
    this.programa = programa;
  }

  dibujar() {
    background(0);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Créditos", width / 2, height / 4);
    textSize(16);
    text("Juego desarrollado por Rocio Alderete Ramos", width / 2, height / 2);
    text("Presiona 'R' para regresar al menú principal", width / 2, height / 2 + 30);
  }

  teclaPresionada(key) {
    if (key === "R" || key === "r") {
      this.programa.cambiarPantalla("principal");
    }
  }
}
