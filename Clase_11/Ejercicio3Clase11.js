//Ejercicio 3: ¿Sabes contar?
//Consigna:
//Crea un programa que le pida al usuario un número positivo. El programa
//deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola.
//Usa un ciclo for para realizar la tarea.


const prompt = require('prompt-sync')();

// Solicitamos un número al usuario
let numero = parseInt(prompt("Ingresa un número positivo: "));

// Verificamos que el número sea válido
if (numero > 0) {
    console.log("Contemos desde 1 hasta " + numero + ":");

    // Usamos un ciclo for para contar
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
} else {
    console.log("Debes ingresar un número positivo.");
}