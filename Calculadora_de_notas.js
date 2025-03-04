// Dado un array de estudiantes con notas, determina si aprobaron.

/* Cada estudiante tiene nombre y 5 notas,
 calcula la nota final.
 Aprobado si nota final es mayor a 10. */

var estudiantes = [
    {
        Nombre: "Juan",
        Notas: [10, 15, 12, 18, 20]
    },
    {
        Nombre: "Maria",
        Notas: [8, 9, 15, 12, 17]
    },
    {
        Nombre: "Pedro",
        Notas: [3, 6, 7, 10, 3]
    },
    {
        Nombre: "Ana",
        Notas: [15, 2, 12, 5, 9]
    }
]


function calcularNota(array) {
    array.forEach(estudiante => {
        let sumaNotas = estudiante.Notas.reduce((acumulador, nota) => acumulador + nota, 0)
        let promedio = sumaNotas / estudiante.Notas.length

        if (promedio >= 10) {
            console.log(`${estudiante.Nombre} ha aprobado con ${promedio}`);
        } else {
            console.log(`${estudiante.Nombre} ha reprobado con ${promedio}`);
        }
    })
}

calcularNota(estudiantes)



// function calcularNota(array){
//     for (let i = 0; i < array.length; i++) {
//         let suma = 0;
//         for (let j = 0; j < array[i].Notas.length; j++) {
//             suma += array[i].Notas[j];
//         } 
//         let promedio = suma / array[i].Notas.length;
//         if (promedio >= 10) {
//             console.log(`${array[i].Nombre} ha aprobado con ${promedio}`);
//         } else {
//             console.log(`${array[i].Nombre} ha reprobado con ${promedio}`);
//         }
//     }
// }

// calcularNota(estudiantes);