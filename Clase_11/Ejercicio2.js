//Ejercicio 2: Semáforo inteligente
//Consigna:
//Vamos a programar un semáforo. 
const prompt = require("prompt-sync")({ sigint: true }); 
//Escribe un programa que le pida al usuario ingresar un color del semáforo: rojo, amarillo o verde. 
let colorSemaforo = prompt("Elige un color del semáforo (verde,amarillo o rojo): ").toLowerCase();

//Dependiendo del color ingresado, el programa debe imprimir un mensaje con la acción correspondiente:

//• Rojo: "Alto, no puedes avanzar."
switch (colorSemaforo) {
    case "rojo": 
    console.log("Alto, no puedes avanzar");
    break; 
//• Amarillo: "Precaución, prepárate para avanzar."
    case "amarillo": 
    console.log("Precaución, prepárate para avanzar.");
    break; 
//• Verde: "Avanza con seguridad."
    case "verde": 
    console.log("Avanza con seguridad.")
    break; 
//Si el usuario ingresa un color inválido, el programa debe mostrar un
//mensaje: "Color no reconocido, ingresa rojo, amarillo o verde."
    default: 
    console.log("Color no reconocido, ingresa rojo, amarillo o verde.");
}

//Utiliza un switch para resolver este ejercicio.