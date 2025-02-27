// Simula un sistema de login, creando una funcion.

// Requisitos:
/*  Recibe usuario y password.
 Retorna "Acceso permitido" o "Acceso
 denegado". */

var usuarios = [
    {
        usuario: "Daniela",
        password: "1234"
    },
    {
        usuario: "Dean",
        password: "impala67"
    },
    {
        usuario: "Sam",
        password: "ruby"
    },
    {
        usuario: "Castiel",
        password: "angel"
    }
]

function login(usuario, password) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].usuario === usuario && usuarios[i].password === password) {
            return "Acceso permitido"
        }
    }
    return "Acceso denegado"
}

console.log(login("Sam", "ruby")) 