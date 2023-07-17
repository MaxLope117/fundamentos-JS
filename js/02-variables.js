let name = 'Agus';

//* Array
const lista = ['Hola', 232, 'Mundo', true, undefined, 'Nombre', name];
// console.log(lista);

const frutas = ['Plátano', 'Manzana', 'Sandía', 'Guayaba'];
console.log(frutas);

// Acceder a 1 elemento de la lista individualmente 
console.log(frutas[0]); // Elemento número 1 (Plátano).
console.log(frutas[2]); // Elemento número 2 (Sandía).


// Tamaño del array (método).
console.log(frutas.length); //* 4

// Agregar nuevos elementos a la lista (método).
frutas.push('Melón');

// Agregar nuevos elementos a la lista.
frutas[5] = 'Papaya';

// Editar un elemento ya existe.
frutas[0] = 'Naranja';

console.log(frutas);


const listaDeListas = [[1, 2, 3], [4, 5, 6]];
// console.log(listaDeListas);


//! TAREA.
const paises = ['México', 'Argentina', 'Rusia', 'Ucrania', 'Guatemala', 'E.E.U.U.'];
/*
    TODO: Imprime en consola 'México', 'Rusia' y 'Guatemala'.
    TODO: Reemplazar E.E.U.U por Canadá
*/
//* Inicio Tarea.



//* Fin Tarea.







//! Extra

// const subTitle = document.getElementById('subTitle');
// console.log(subTitle);

// const parrafo = document.getElementsByClassName('parrafo');
// console.log(parrafo);

// const element = document.getElementsByTagName('h3');
// console.log(element);

// const h1 = 'h1';
// const titulo = document.querySelector(h1);

// console.log(titulo.innerText);
// titulo.innerText = 'Fundamentos JS';
// titulo.innerHTML = `
//     <h1>Fundamentos JS</h1>
//     <button class='changeName'>Cambiar Nombre 2</button>
// `