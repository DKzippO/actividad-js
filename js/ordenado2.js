let carrito = [
    {name: 'Leche', quantity:1, price:5.3},
    {name: 'Carne', quantity:2, price:2.4},
    {name: 'fideo', quantity:1, price:3.1},
    {name: 'papa', quantity:3, price:1.6}
];
item = {name: 'asd', quantity:7, price: 7.2};
carrito.push(item)

function nombre(array) {
    return array.slice().sort((a, b) => a.name.localeCompare(b.name));
}

function cantidad(array) {
    return array.slice().sort((a, b) => a.quantity - b.quantity);
}

function precio(array) {
    return array.slice().sort((a, b) => a.price - b.price);
}

console.log("Ordenado por nombre:");
console.log(nombre(carrito));

console.log("Ordenado por cantidad:");
console.log(cantidad(carrito));

console.log("Ordenado por precio:");
console.log(precio(carrito));