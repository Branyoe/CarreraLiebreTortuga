class Carrera {
  #tortuga = null;
  #liebre = null;

  constructor(tortuga, liebre) {
    this.#tortuga = tortuga;
    this.#liebre = liebre;
  }

  iniciar() {
    console.clear();
    do {
      this.#tortuga.correr();
      this.#liebre.correr();
      console.log();  
    } while (this.#tortuga.getPosicion < 100 && this.#liebre.getPosicion < 100)

    if (this.#tortuga.getPosicion >= 100 && this.#liebre.getPosicion >= 100) {
      console.log('************* Empate *************');
    }else if(this.#tortuga.getPosicion >= 100){
      console.log(`\n******** Ganador Tortuga ********`);
    }else{
      console.log(`\n******** Ganador Liebre ********`);
    }
  }
}

module.exports = Carrera;