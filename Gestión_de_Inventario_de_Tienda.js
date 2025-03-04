// Crea una función que maneje el stock de productos.

// Requisitos:

/*  
Recibe un array de productos (nombre, stock).
 Si el cliente compra más de lo disponible,
 devuelve "Stock insuficiente".
 Si hay stock suficiente, descuenta la cantidad y
 retorna el inventario actualizado. */

var productos = [
    {
        Nombre: "Laptop",
        Stock: 5 
    },
    {
        Nombre: "Audifonos",
        Stock: 10
    },
    {
        Nombre: "Cargador",
        Stock: 2
    },
    {
        Nombre: "Mouse",
        Stock: 3
    },
    {
        Nombre: "Teclado",
        Stock: 4
    },
    {
        Nombre: "Monitor",
        Stock: 7
    }
]


function controlStock2 (array, productoIngresado, cantidad) {
    const productoEncontrado = array.find((producto) => productoIngresado === producto.Nombre) 

    if (productoEncontrado) {
        if (cantidad > productoEncontrado.Stock) {
            console.log("Stock insuficiente."); 
        } else {
            console.log("Stock suficiente.");
            productoEncontrado.Stock -= cantidad
            console.log(array);  
        }
    } else {
        console.log("Producto no encontrado.");
        
    }
}

controlStock2(productos, "Cargador", 4)



// function controlStock(array, producto, cantidad){
//     for(let i = 0; i < array.length; i++) {
//         if(array[i].Nombre === producto) {
//             if (array[i].Stock < cantidad) {
//                 console.log("Stock insuficiente.");  
//             } else {
//                 console.log("Stock suficiente.");
//                 array[i].Stock -= cantidad
//                 console.log(productos);  
//             }
//             return;
//         }
//     }
//     console.log("Producto no encontrado.");
// } 

// controlStock(productos, "Mouse", 3)