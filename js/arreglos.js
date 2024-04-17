/*
//Compras a un supermercado
let carrito=[
    "leche",1,
    "carne",2,
    "papa",3,
    "fideo",1
];
console.log("Item: " + carrito[0]);
console.log("Cantidad: " + carrito[1]);
console.log("Item: " + carrito[2]);
console.log("Cantidad: " + carrito[3]);
console.log("Item: " + carrito[4]);
console.log("Cantidad: " + carrito[5]);
console.log("Item: " + carrito[6]);
console.log("Cantidad: " + carrito[7]);

console.log("IMPRESION COMPLETA");
console.log(carrito);

carrito.push("manzana", 4);

console.log("Después de agregar un nuevo elemento:");
console.log(carrito);
*/
/*
let item = {name: 'Leche', quantity:1};
console.log("Item: " + item.name);
console.log("Cantidad: " + item.quantity);
*/
let carrito = [
    {name: 'Leche', quantity:1, price:5},
    {name: 'Carne', quantity:2, price:2},
    {name: 'Fideo', quantity:1, price:3},
    {name: 'Papa', quantity:3, price:1}
];

// Mostrar cada artículo del carrito con su nombre, cantidad, precio y total
carrito.forEach(function(item) {
    let total = item.quantity * item.price;
    console.log("Nombre: " + item.name);
    console.log("Cantidad: " + item.quantity);
    console.log("Precio: " + item.price);
    console.log("Total: " + total);
    console.log("-------------");
});

console.log(carrito);

// Añadir un nuevo elemento al carrito
carrito.push({name:'Manzana', quantity:2, price:4});

let manzana = carrito[4]; // Para facilitar la referencia al objeto manzana

console.log("Nombre: " + manzana.name);
console.log("Cantidad: " + manzana.quantity);
console.log("Precio: " + manzana.price);
console.log("Total: " + (manzana.quantity * manzana.price)); // Calcular el precio total de las manzanas
console.log("-------------");

console.log(carrito);
