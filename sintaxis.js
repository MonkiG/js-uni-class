console.log("Hola mundo");

// Sintaxis

//Variables
// Una variable es un espacio de memoria al que se le asigna un valor
let x = 5; //Mutables
x = 7; // Reasignacion
x = "lol";

var y = 7; // <- Mala practica

const z = 10; // Variable inmutable
z = 11; // <- error al reasignar el valor

// Tipos de datos primitivos
// - Number
// - String
// - Boolean
// - Undefined <- Valor no definido
// - Null <- Valor que no existe

let a = 10; // number
let b = "string";
let c = true; //boolean
let d = undefined; //undefined
let e = null; //null

// Arreglos - Arrays
let miArray = [];
// Metodos de array
miArray.push(1); //[1]
miArray.pop(); // []

miArray.push(2);
miArray.at(0); // Obtiene el valor en la posicion pasada por parametro //2

// mi_tuple = (1, "", true, []); //Tupla en python
let myTuple = [1, "", true, []];

// Funciones en js

//1.- Funciones statement - enunciado
function miFuncion() {
  console.log("funcion 1");
}

miFuncion();

// 2.- Funciones expression usando funciones anonimas
// Funcion anonima concepto del paradigma funcional
const miNewFunction = miFuncion; //<- No hacer esto

const miFunctionExpression = function () {
  console.log("funcion de expresion");
};

// 3.- Arrow function es una function expression con sinstaxis de arrow
const miArrowFunction = () => {
  console.log("Arrow function");
};

const sum2 = function (a, b) {
  return a + b;
};
const sum = (a, b) => a + b; //Arrow function

// 4.- IIFE (Inmediatly invoked function expression)
(function () {
  console.log("iife");
})();

(() => {
  console.log("iife arrow");
})();

// Paradigmas
// - OOP
// - Estructural
// - Programacion orientada a componentes
// - "" Eventos
//
//* Programacion funcional
// - Manejar a las funciones como si fueran variables
// - Funciones de primer order

const miArrowFunction2 = () => {
  console.log("Arrow function");
};

function myFunction1(callback) {
  //Aqui pasan cosas raras y complejas y luego se ejecuta el callback
  console.log("antes del callback");
  callback();
  console.log("Despues del callback");
}

myFunction1(function () {
  console.log("Mi callback");
});

//F# - Haskell - Lua

// Manipular el dom
