const { crearArhivo } = require('./multiplicar/multiplicar');
//const multiplicar = require('./multiplicar/multiplicar');

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split("=")[1];

console.log(base);

crearArhivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));

//node app3 --base=3