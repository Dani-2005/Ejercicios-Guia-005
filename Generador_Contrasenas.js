// Crea una funcion para generar contraseñas aleatoria de 8 caracteres (letras y números).

function generarContrasena() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let contrasena = ''

    for (let i = 0; i < 8; i++) {
        let contrasena_aleatoria = Math.floor(Math.random() * (caracteres.length))      
        contrasena += caracteres[contrasena_aleatoria]
    }
    return contrasena
}

let contrasena_generada = generarContrasena()
console.log(contrasena_generada);
