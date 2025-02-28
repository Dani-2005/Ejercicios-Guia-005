// Crea una estructura que almacene mensajes entre usuarios en un chat.

// Requisitos:
/* Un array almacena mensajes con remitente,
receptor y contenido.
Debes crear funciones para enviar y ver
mensajes. */

let mensajes = [
    {
        remitente: "Juan",
        receptor: "Pedro",
        contenido: "Hola Pedro, ¿cómo estás?"
    },
    {
        remitente: "Pedro",
        receptor: "Juan",
        contenido: "Hola Juan, bien, gracias. ¿Y tú?"
    },
    {
        remitente: "Juan",
        receptor: "Pedro",
        contenido: "Bien, gracias."
    },
    {
        remitente: "Pedro",
        receptor: "Juan",
        contenido: "Me alegra."
    }
]

function enviarMensaje(remitente, receptor, contenido) {
    let nuevo_mensaje = {
        remitente: remitente,
        receptor: receptor,
        contenido: contenido
    };
    mensajes.push(nuevo_mensaje);
    return mensajes;
}

function verMensajes(usuario) {
    for (let i = 0; i < mensajes.length; i++) {
        if (mensajes[i].remitente === usuario || mensajes[i].receptor === usuario) {
            console.log(`De: ${mensajes[i].remitente}\nPara: ${mensajes[i].receptor}\nMensaje: ${mensajes[i].contenido}`);
        }
    }
}

console.log(enviarMensaje("Juan", "Pedro", "y que andas haciendo?"));
console.log(enviarMensaje("Pedro", "Juan", "nada, viendo la tele"));
console.log(verMensajes("Juan"));

