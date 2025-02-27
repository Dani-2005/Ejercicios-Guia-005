// Requisitos:
/* Crea una lista de habitaciones, con numero de
habitacion y un estatus de ocupado
Crea una funcion para reservarla, Si la
habitación ya está ocupada, muestra "No
disponible", en caso contrario muestra un
mensaje de exitoso y actualiza la habitacion. */

var habitaciones = [
    {
        numero_habitacion: 1,
        ocupado: false
    },
    {
        numero_habitacion: 2,
        ocupado: true
    },
    {
        numero_habitacion: 3,
        ocupado: false
    },
    {
        numero_habitacion: 4,
        ocupado: true
    },
    {
        numero_habitacion: 5,
        ocupado: false
    },
    {
        numero_habitacion: 6,
        ocupado: true
    },
    {
        numero_habitacion: 7,
        ocupado: false
    },
    {
        numero_habitacion: 8,
        ocupado: true
    },
    {
        numero_habitacion: 9,
        ocupado: false
    },
    {
        numero_habitacion: 10,
        ocupado: true
    }
]

function reservarHabitacion(habitacion) {
    for (let i = 0; i < habitaciones.length; i++) {
        if (habitacion === habitaciones[i].numero_habitacion) {
            if (habitaciones[i].ocupado) {
                return "No disponible";
            } else {
                habitaciones[i].ocupado = true;
                return "Reservado con exito";
            }
        }
    }
    return "Habitacion no encontrada";
}

reservacion = reservarHabitacion(3);
console.log(reservacion);

