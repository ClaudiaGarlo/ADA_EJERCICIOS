//EJERCICIO 1
const prompt = require("prompt-sync")({ sigint: true }); 

// Paso 1: Declara dos variables numericas, numero 1 y numero 2
let numero1 = parseFloat(prompt("Ingresa el Numero1:"));
let numero2 = parseFloat(prompt("Ingresa el Numero2:"));

//Paso 2: Mostrar cuál es mayor o igual
if (numero1 > numero2) {
    console.log(`El numero mayor es: ${numero1}`);
} 
else if (numero2 > numero1) {
    console.log(`El numero mayor es: ${numero2}`);
} 
else {
    console.log(`Ambos números son iguales`);
}
