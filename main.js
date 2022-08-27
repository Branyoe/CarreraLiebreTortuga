const Tortuga = require('./models/Tortuga.js');
const Liebre = require('./models/Liebre.js');
const Carrera = require('./models/Carrera.js');
const Aleatorio = require('./models/Aleatorio.js');



const tortuga = new Tortuga(Aleatorio);
const liebre = new Liebre(Aleatorio);

const carrera = new Carrera(tortuga, liebre);
carrera.iniciar();

// let res = 0;
// do {
//   carrera.iniciar();
//   res++
// } while (res < 10);