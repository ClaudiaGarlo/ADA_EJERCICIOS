//Programa que simula ser un lorito : Repite lo que oye 5 veces

//Paso 1: Importamos el modulo prompt-sync
const prompt = require("prompt-sync")({ sigint: true });  

//Paso 2: Solicitamos al ususario que ingrese un texto
let texto = prompt("Ingresa el texto que quieres que el loro repita: ");

//Paso 3: Usamos el ciclo for para repetir el texto 5 veces
//Estructura del ciclo;
// -Inicialización: let i = 0 (inicializa el contador en 0)
// -Condicion: i < 5 (el ciclo continua mientras i sea menor que 5)
// -Incremento: 1 ++ (suma 1 al contador en cada iteracion)
for (let i = 0; i < 5; i++) {
console.log(`Repeticion ${i + 1} : ${texto}`);
}