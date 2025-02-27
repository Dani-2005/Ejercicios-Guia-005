//  Recibe un texto y una palabra cuenta la cantidad de veces que aparece la palabra.

function contarPalabra(texto, palabra) {
    let contador = 0
    let texto2 = texto.split(" ")
    for (let i = 0; i < texto2.length; i++) {
        if (texto2[i] === palabra) {
            contador += 1
        }
    }
    if (contador === 1) {
        console.log(`La palabra ${palabra} apareció ${contador} vez`);
    } else {
    console.log(`La palabra "${palabra}" apareció ${contador} veces`);
    }
}

contarPalabra("Hola como estas estas estas como", "estas")