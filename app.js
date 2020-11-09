const fs = require('fs');
let base = 5;
let data = '';

for (let i = 1; i <= 10; i++) {
    let total = base * i;
    //console.log(base + " * " + i + "=" + total);
    //console.log(`${base} * ${i} = ${base * i}`);
    data += `${base} * ${i} = ${base * i} \n`;
}


fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`el archivo tabla ${base} fue creado!`);
});