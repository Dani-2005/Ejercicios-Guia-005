// Crea una función que agregue y elimine productos de un carrito de compras.

// Requisitos:
/* Un array representa el carrito de compras
([{producto, cantidad}]).
La función debe permitir agregar y remover
productos.
Si se intenta eliminar un producto que no
existe, mostrar "No encontrado". */

const carrito = [
    {
        producto: 'Papas',
        cantidad: 2
    },
    {
        producto: 'Manzanas',
        cantidad: 3
    },
    {
        producto: 'Peras',
        cantidad: 1
    },
    {
        producto: 'Uvas',
        cantidad: 4
    },
    {
        producto: 'Naranjas',
        cantidad: 5
    }, 
    {
        producto: 'Limones',
        cantidad: 2
    }
];

function gestionCarrito(producto, cantidad, accion) {
    if (accion === "agregar") {
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].producto === producto) {
                carrito[i].cantidad += cantidad;
                return carrito;
            } 
        } 
        carrito.push({producto, cantidad});
    } else if (accion === "eliminar") {
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i].producto === producto) {
                carrito.splice(i, 1);
                return carrito;
            }
        }
        console.log("No encontrado");
    }
    return carrito;
}

console.log(gestionCarrito("Papas", 3, "agregar"));
console.log(gestionCarrito("Lechuga", 1, "agregar"));
console.log(gestionCarrito("Manzanas", 1, "eliminar"));
console.log(gestionCarrito("Arroz", 1, "eliminar"));

