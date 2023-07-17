console.log('Hola Mundo');

//* Variables primitivas

/*
    Formas de declarar una variable:

    var - en desuso

    *Sintaxis: 
    var nombreDeLaVariable;
*/
var name; // Declaración de una variable
name = 'Max';

/* 
    *Sintaxis: 
    let nombreDeLaVariable;
*/
let lastName; // Declaración de una variable
lastName = 'Lope'; // Asignación del valor de la variable
console.log(lastName); // Imprimir o mostrar valores en consola

lastName = "Hidalgo";
console.log(lastName);

let nombreCompleto = name + ' ' + lastName; //'Max Hidalgo'
console.log('Nombre completo:', nombreCompleto);

/* 
    *Sintaxis: 
    const nombreDeLaVariable;
*/
const dogName = 'Aquiles';
console.log(dogName)
// dogName = 'Luna';

//* Tipos de datos

// String (texto)
let mes = 'Agosto';
console.log('Tipo de dato (mes):', typeof mes);

//* Ejemplos
let userName = 'Renasing';
const email = 'correo@correo.com';
let otrosNumeros = '146535';
console.log('Tipo de dato (otrosNumeros):',typeof otrosNumeros);

// Number (númerico) / INT-Integer-Entero
let numero = 5;
console.log('Tipo de dato (numero):', typeof numero);

// Float (númerico) / Flotante-Decimal - Otros lenguajes
let decimales = 6.66342;
console.log('Tipo de dato (decimales):', typeof decimales);

//* Ejemplos

const id = 13232353535;

let x = 20.12;
let y = 50;
let suma = x + y;
// let Suma = 10 + 10;
console.log('La suma de 20 + 50 es:', suma);

// Boolean (Verdadero/Falso)
let verdad = true;
console.log('Tipo de dato (verdad):', typeof verdad);

let falso = false;
console.log('Tipo de dato (falso):', typeof falso);

//* Ejemplos

let IsActive = true;

// Undefined (no definido);
let birthday = undefined;
console.log('Tipo de dato (birthday):', typeof birthday);
console.log(birthday);

//===============================================================================

// //! Extra
let bird = 'Agapornis';
console.log(bird);

const birdName = 'Ra';
console.log(birdName);

const parrafo = document.getElementById('nombre');
// console.log(parrafo);

const button = document.getElementById('changeName');
button.addEventListener('click', () => {

    if (parrafo.innerText === 'Isis') {
        parrafo.innerText = 'Ra';
    } else {
        parrafo.innerText = 'Isis'
    }
    // parrafo.style.color = 'red';

    // console.log(parrafo);

});