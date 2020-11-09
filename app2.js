const { crearArhivo } = require('./multiplicar/multiplicar');
//const multiplicar = require('./multiplicar/multiplicar');
let base = 'acd';
//console.log(module);
//console.log(multiplicar);

crearArhivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));