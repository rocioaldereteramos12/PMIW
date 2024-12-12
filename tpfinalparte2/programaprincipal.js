class ProgramaPrincipal {
  constructor() {
    this.pantallaActual = new PantallaPrincipal(this);
    this.juego = null;
    this.pantallaInstrucciones = new PantallaInstrucciones(this);
    this.pantallaCreditos = new PantallaCreditos(this);
  }

  cambiarPantalla(nuevaPantalla) {
    if (nuevaPantalla === "juego") {
      this.juego = new Juego();
      this.pantallaActual = this.juego; 
    } else if (nuevaPantalla === "principal") {
      this.pantallaActual = new PantallaPrincipal(this);
    } else if (nuevaPantalla === "instrucciones") {
      this.pantallaActual = this.pantallaInstrucciones;
    } else if (nuevaPantalla === "creditos") {
      this.pantallaActual = this.pantallaCreditos;
    }
  }

  dibujar() {
    this.pantallaActual.dibujar();
  }

  teclaPresionada() {
    this.pantallaActual.teclaPresionada(key);
  }
}
