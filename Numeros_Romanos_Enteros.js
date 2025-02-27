// Crea una función que convierta un número romano en su equivalente decimal.

/* La función recibe un string con el número
romano ("XIV").
Usa un objeto para asignar valores (I = 1, V = 5,
X = 10, etc.). */

function RomanoADecimal(string) {
    const valores = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let numero_decimal = 0

    for (let i = 0; i < string.length; i++) {
        let valor1 = valores[string[i]]
        let valor2 = valores[string[i+1]]

        if (valor1 < valor2) {
            numero_decimal -= valor1
        } else {
            numero_decimal += valor1
        }
    }
    return numero_decimal
}

console.log(RomanoADecimal("MMV"));
