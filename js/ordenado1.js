let carrito = [
    "leche", 1,
    "carne", 2,
    "papa", 3,
    "fideo", 1
];

function precio(array) {
    const nuevoarray = [];
    for (let i = 0; i < array.length; i += 2) {
        nuevoarray.push({ name: array[i], quantity: array[i + 1] });
    }
    return nuevoarray.sort((a, b) => a.name.localeCompare(b.name));
}

function cantidad(array) {
    const nuevoarray = [];
    for (let i = 0; i < array.length; i += 2) {
        nuevoarray.push({ name: array[i], quantity: array[i + 1] });
    }
    return nuevoarray.sort((a, b) => a.quantity - b.quantity);
}

// Ejemplo de uso
console.log("Ordenado por nombre y cantidad:");
console.log(precio(carrito));

console.log("Ordenado por cantidad:");
console.log(cantidad(carrito));
