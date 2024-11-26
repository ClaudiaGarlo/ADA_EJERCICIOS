// Con IF TRADICIONAL

//Ejercicio 1: ¿Positivo, negativo o cero?
//Consigna:
//Vamos a trabajar con números y aprender a clasificarlos. 
const prompt = require("prompt-sync")({ sigint: true }); 
//Escribe un programa que le pida al usuario un número cualquiera. 
let numero = prompt("Escribe un número: ");
//El programa deberá analizar si el
//número ingresado es positivo, negativo o cero. Utiliza estructuras if para
//resolverlo y muestra un mensaje explicativo en cada caso. 
if (numero > 0) { 
console.log("El número es positivo");
}
else if (numero < 0) {
console.log("El número es negativo");
}
else {
    console.log("El número es cero")
}
