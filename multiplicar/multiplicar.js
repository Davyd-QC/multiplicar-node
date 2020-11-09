const fs = require('fs');
const colors = require('colors');
////
let listarTabla = (base, limite = 10) => {
    let data = '';
    for (let i = 1; i <= limite; i++) {
        let total = base * i;
        data += `${base} * ${i} = ${base * i} \n`;
    }
    console.log('======================'.green);
    console.log(`${data}`.blue);
    console.log('======================'.red);
}

///
let crearArhivo = (base, limite = 10) => {

    return new Promise((resolve, rejects) => {

        if (!Number(base)) {
            rejects(`El valor ${ base } introducido no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            let total = base * i;
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err) rejects(err);
            else resolve(`tabla ${base}.txt`);
        });

    });

}

module.exports = {
    crearArhivo,
    listarTabla
}