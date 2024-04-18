/* 
Generación de notas de manera aleatoria
Desarrollador: Juan Luis Menacho Ramírez
Fecha: 2024-04-17
Cambios: Colocación de arrays (estructura) para el funcionamiento de los nombres y nota.
*/

function randomica() {
    return Math.floor(Math.random() * 9) + 2;
}
function randomicanombres(length) {
    return Math.floor(Math.random() * length);
}

function obtenerResultado(nota) {
    switch (nota) {
        case 10:
            return 'Sobresaliente';
        case 9:
            return 'Notable';
        case 8:
        case 7:
            return 'Bien';
        case 6:
        case 5:
            return 'Suficiente';
        case 4:
        case 3:
        case 2:
            return 'Insuficiente';
        default:
            return 'Nota fuera de rango';
    }
}

const NOMBRES = ["Juan", "María", "Pedro", "Ana", "Luis", "Laura", "Carlos", "Sofía", "Diego", "Elena"];
const APELLIDOS = ["García", "Martínez", "López", "González", "Rodríguez", "Fernández", "Pérez", "Gómez", "Sánchez", "Díaz"];
let nombrecompleto = [];

for (let i = 0; i < 10; i++) {
    let nombreIndex = randomicanombres(NOMBRES.length);
    let apellidoIndex = randomicanombres(APELLIDOS.length);
    let nombreAleatorio = NOMBRES[nombreIndex];
    let apellidoAleatorio = APELLIDOS[apellidoIndex];
    let nombreCompletoAleatorio = `${nombreAleatorio} ${apellidoAleatorio}`;
    nombrecompleto.push(nombreCompletoAleatorio);
}

console.log(nombrecompleto);

let nombrescompletos = [];

for (let i = 0; i < nombrecompleto.length; i++) {
    nombrescompletos.push({ nombre: nombrecompleto[i], nota: 0 });
}

console.log("Datos generados (con calificaciones en 0):");
console.log(nombrescompletos);

let mayor = -Infinity;
let menor = Infinity;
let suma = 0;

for (let i = 0; i < nombrescompletos.length; i++) {
    let final = randomica();
    nombrescompletos[i].nota = final;
    if (final > mayor) {mayor = final;}
    if (menor > final) {menor = final;}
    suma += final;
}

console.log("Datos actualizados:");
console.log(nombrescompletos);

console.log("mayor nota:", mayor);
console.log("menor nota:", menor);

let promedio = suma / nombrescompletos.length;
console.log("Promedio:", promedio);

console.log("Resultados:");
nombrescompletos.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.nombre} | Nota: ${estudiante.nota} | Rendimiento: ${obtenerResultado(estudiante.nota) }`);
});
