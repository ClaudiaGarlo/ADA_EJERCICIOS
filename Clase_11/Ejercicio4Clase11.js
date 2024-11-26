const prompt = require('prompt-sync')();
//Ejercicio 4: ¿Es par o impar?
//Consigna:
//Los números pueden ser pares o impares. 

//Escribe un programa que le pida al usuario un número 
let numero = parseInt(prompt("Te diré si el número es par o impar ¡Escribe un número!:"));

//y determine si es par o impar. 
let mensaje =(numero % 2 === 0 ? "Es un numero par" : "Es un numero impar")

//Muestra un mensaje explicativo indicando qué significa cada caso
console.log(mensaje);
