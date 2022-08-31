const Aleatorio = require("./Aleatorio");

class Tortuga {

  #posicion = 0;

  constructor() {
    this.#posicion = 0;
  }

  get getPosicion() { return this.#posicion; }

  correr() {
    let nPasos = this.#calcularPasos(Aleatorio.generar());

    this.#posicion += nPasos;
    console.log(`Tortuga avanzo ${nPasos} pasos. posicion ${this.#posicion}`);
  }

  #calcularPasos(numAleatorio) {
    if (numAleatorio <= 20) return -6 //resbalon;
    if (numAleatorio <= 50) return 1 //paso lento;
    if (numAleatorio <= 100) return 3 //paso rapido;
  }

}

module.exports = Tortuga;