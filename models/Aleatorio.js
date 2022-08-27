class Aleatorio {
  static generar() {
    return Math.floor(Math.random() * 100) + 1;
  }
}

module.exports = Aleatorio;