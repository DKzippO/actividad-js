// Función para generar una calificación aleatoria entre 20 y 100
function generarCalificacionAleatoria() {
    return Math.floor(Math.random() * 81) + 20;
}

// Lista de nombres de estudiantes
let nombresEstudiantes = [
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

// Inicializar el array de datos de estudiantes con calificaciones en 0
let estudiantes = [];
for (let i = 0; i < nombresEstudiantes.length; i++) {
    estudiantes.push({ Nombre: nombresEstudiantes[i].nombre, Calificación: nombresEstudiantes[i].nota });
}

// Mostrar el array con calificaciones en 0
console.log("Datos generados (con calificaciones en 0):");
console.log(estudiantes);

// Generar calificaciones aleatorias y actualizar el array
for (let i = 0; i < estudiantes.length; i++) {
    estudiantes[i].Calificación = generarCalificacionAleatoria();
}

// Mostrar el array actualizado con las calificaciones
console.log("Datos actualizados (con calificaciones aleatorias):");
console.log(estudiantes);

// Encontrar la calificación mayor, menor y calcular el promedio
let calificacionMayor = estudiantes[0].Calificación;
let calificacionMenor = estudiantes[0].Calificación;
let sumaCalificaciones = 0;
for (let i = 0; i < estudiantes.length; i++) {
    let calificacionActual = estudiantes[i].Calificación;
    if (calificacionActual > calificacionMayor) {
        calificacionMayor = calificacionActual;
    }
    if (calificacionActual < calificacionMenor) {
        calificacionMenor = calificacionActual;
    }
    sumaCalificaciones += calificacionActual;
}

let promedio = sumaCalificaciones / estudiantes.length;

// Mostrar los resultados
console.log("Calificación mayor:", calificacionMayor);
console.log("Calificación menor:", calificacionMenor);
console.log("Promedio de calificaciones:", promedio);
