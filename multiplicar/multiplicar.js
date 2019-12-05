const fileSystem = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fileSystem.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.text`);
            }
        });
    });
};

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
       console.log(`${base} * ${i} = ${base * i}`);
    }
};

module.exports = {
    crearArchivo,
    listarTabla
};
