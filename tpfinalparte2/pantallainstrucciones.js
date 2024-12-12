class PantallaInstrucciones {
  constructor(programa) {
    this.programa = programa;
  }

  dibujar() {
    background(0);
    fill(255);
    textAlign(LEFT, TOP);
    textSize(16);
    text("Instrucciones del Juego:", 10, 10);
    text("1. Usa las flechas para mover al personaje.", 10, 30);
    text("2. Recoge todos los puntos y superpuntos.", 10, 50);
    text("3. Evita los enemigos. Si te tocan, perderás una vida.", 10, 70);
    text("4. Llega al cuadro verde para ganar.", 10, 90);
    text("Presiona 'R' para regresar al menú principal", 10, 130);
  }

  teclaPresionada(key) {
    if (key === "R" || key === "r") {
      this.programa.cambiarPantalla("principal");
    }
  }
}
