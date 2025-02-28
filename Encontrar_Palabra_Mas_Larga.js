// Crea una función que devuelva la palabra más larga en una oración.

// Requisitos:
/* La función recibe una oración y encuentra la
palabra con más caracteres. */

function encontrarPalabraMasLarga(oracion) {
    let palabras = oracion.split(" ");
    let palabraMasLarga = "";
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }
    return palabraMasLarga;
}

console.log(encontrarPalabraMasLarga("Me gusta programar utilizando Javascript")); 
