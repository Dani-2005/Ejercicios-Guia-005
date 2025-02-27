// Simula un sistema de retiro y deposito de cajero automatico, creando funciones.

/* Requisitos:
Lista de cuentas bancarias con monto y
numero
Retira dinero de una cuenta bancaria, Si el
monto es mayor al saldo, muestra "Fondos
insuficientes".
Deposita dinero en la cuenta bancaria
Crea funcion para mostrar cuenta*/

var cuentas = [
    {
        numero: 123456,
        saldo: 1000
    },
    {
        numero: 987654,
        saldo: 500
    },
    {
        numero: 314159,
        saldo: 1500
    },
    {
        numero: 271828,
        saldo: 2000
    },
    {
        numero: 141421,
        saldo: 100
    }
]

// Funcion para retirar dinero

function retirar(numero, monto) {
    for (let i = 0; i < cuentas.length; i++) {
        if (numero === cuentas[i].numero) {
            if (monto > cuentas[i].saldo) {
                return "Fondos insuficientes."
            } else {
                cuentas[i].saldo -= monto
                return "Retiro Exitoso!"
            }
        }
    }
    return "Cuenta bancaria no encontrada."
}

let saldo_retirado = retirar(141421, 100)
console.log(saldo_retirado);


// Funcion para depositar dinero 

function depositar(numero, deposito) {
    for (let i = 0; i < cuentas.length; i++) {
        if (numero === cuentas[i].numero) {
            cuentas[i].saldo += deposito
            return "Dinero depositado exitosamente!"
        }
    }
    return "Cuenta bancaria no encontrada."
}

let dinero_deposito = depositar(314159, 5000)
console.log(dinero_deposito);

// Funcion para mostrar la cuenta

function mostrarCuenta(numero) {
    for (let i = 0; i < cuentas.length; i++) {
        if (numero === cuentas[i].numero) {
            return `Cuenta Bancaria: ${cuentas[i].numero} Saldo actual: ${cuentas[i].saldo}`
        }
    }
    return "Cuenta bancaria no encontrada."
}

let mostrar_cuenta = mostrarCuenta(271828)
console.log(mostrar_cuenta);
