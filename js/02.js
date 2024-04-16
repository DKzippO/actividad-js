/* 
Selección de color + suma de dos números en la consola.log
Desarrollador: Juan Luis Menacho Ramírez
Fecha: 2024-04-15
Cambios: Ninguno
*/
function imprimirColorYSuma() {
    var colorEstablecido = document.getElementById("colorInput").value;
    
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

    var resultado = num1 + num2;

    console.log("El color seleccionado es: " + colorEstablecido);
    
    document.getElementById("colorDisplay").style.backgroundColor = colorEstablecido;

    console.log("La suma de " + num1 + " + " + num2 + " es = " + resultado);
}
