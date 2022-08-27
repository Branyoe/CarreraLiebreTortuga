const Aleatorio = require("./Aleatorio");

class Liebre {

  #aleatorio = null;
  #posicion = 0;

  constructor() {
    this.#posicion = 0;
  }

  get getPosicion() { return this.#posicion; }

  correr() {
    let nPasos = this.calcularPasos(Aleatorio.generar());

    this.#posicion += nPasos;
    console.log(`Liebre avanzo ${nPasos} pasos. posicion ${this.#posicion}`);
  }

  calcularPasos(numAleatorio) {
    if (numAleatorio <= 10) return -12;
    if (numAleatorio <= 25) return 12;
    if (numAleatorio <= 45) return 0;
    if (numAleatorio <= 65) return 9;
    if (numAleatorio <= 100) return 1;
  }
}

module.exports = Liebre;