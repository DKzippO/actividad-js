/* 
Generación de notas de manera aleatoria
Desarrollador: Juan Luis Menacho Ramírez
Fecha: 2024-04-17
Cambios: Colocación de arrays (estructura) para el funcionamiento de los nombres y nota.
*/

/*
function randomica() {
    return Math.floor(Math.random() * 81) + 20;
}
*/

// Lista de nombres de estudiantes con calificaciones inicializadas en 0
let nombres = [
    { nombre: 'Juan', nota: 0 },
    { nombre: 'Pedro', nota: 0 },
    { nombre: 'Maria', nota: 0 },
    { nombre: 'Alberto', nota: 0 },
    { nombre: 'Susan', nota: 0 },
    { nombre: 'Antonio', nota: 0 },
    { nombre: 'Delsy', nota: 0 },
    { nombre: 'Paul', nota: 0 },
    { nombre: 'Carlos', nota: 0 },
    { nombre: 'Kelly', nota: 0 }
];

// Mostrar la lista inicial de estudiantes con calificaciones en 0
console.log("Datos generados (con calificaciones en 0):");
console.log(nombres);

// Generar calificaciones aleatorias y calcular la suma de calificaciones
let mayor = -Infinity;
let menor = Infinity;
let suma = 0;
for (let i = 0; i < nombres.length; i++) {
    let final = Math.floor(Math.random() * 81) + 20;
    nombres[i].nota = final;
    // Actualizar la calificación mayor y menor
    if (final > mayor) {
        mayor = final;
    }
    else {
        menor = final;
    }
    // Sumar la calificación actual a la suma total
    suma += final;
}

// Mostrar el array actualizado con las calificaciones aleatorias
console.log("Datos actualizados (con calificaciones aleatorias):");
console.log(nombres);

// Calcular el promedio de calificaciones
let promedio = suma / nombres.length;

// Mostrar los resultados
console.log("Calificación mayor:", mayor);
console.log("Calificación menor:", menor);
console.log("Promedio de calificaciones:", promedio);
