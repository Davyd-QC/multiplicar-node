const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArhivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log("CMD listar");
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log("CMD crear");
        crearArhivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log("No existe el comando");
        break;
}