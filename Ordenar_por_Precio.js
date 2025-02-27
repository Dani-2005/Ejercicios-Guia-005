// Crea una función que ordene una lista de productos de menor a mayor precio.

// Requisitos:
/* La función recibe un array de objetos donde
cada producto tiene nombre y precio.
Retorna el array ordenado en base al precio. */

var productos = [
    {
        nombre: "TV",
        precio: 1000
    },
    {
        nombre: "Laptop",
        precio: 1500
    },
    {
        nombre: "Celular",
        precio: 500
    },
    {
        nombre: "Tablet",
        precio: 800
    },
    {
        nombre: "Audifonos",
        precio: 300
    },
    {
        nombre: "Mouse",
        precio: 20
    },
    {
        nombre: "Teclado",
        precio: 50
    },
    {
        nombre: "Monitor",
        precio: 400
    },
    {
        nombre: "Impresora",
        precio: 600
    },
    {
        nombre: "Bocinas",
        precio: 200
    }
]

function ordenarProductos(array) {
    let productos_ordenados = array.sort((a, b) => a.precio - b.precio)
    return productos_ordenados
}

console.log(ordenarProductos(productos));
