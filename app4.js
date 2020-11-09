const argv = require('yargs')
    .command('listar', 'Imprime en Consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArhivo } = require('./multiplicar/multiplicar');
//const multiplicar = require('./multiplicar/multiplicar');

//let argv2 = process.argv;

console.log('limite ', argv.limite);
//console.log(argv2);

//crearArhivo(base)
//    .then(archivo => console.log(`Archivo creado: ${archivo}`))
//   .catch(e => console.log(e));