// CON IF TERNARIO

//Ejercicio 1: ¿Positivo, negativo o cero?
//Consigna:
//Vamos a trabajar con números y aprender a clasificarlos. 
const prompt = require("prompt-sync")({ sigint: true }); 

//Escribe un programa que le pida al usuario un número cualquiera. 
let numero = parseFloat(prompt("Escribe un número: ")); 
//El programa deberá analizar si el
//número ingresado es positivo, negativo o cero. Utiliza estructuras if para
//resolverlo y muestra un mensaje explicativo en cada caso. 
let mensaje = (numero > 0) ? "Número positivo" : (numero < 0) ? "Número negativo" : "Número cero";
console.log(mensaje);
