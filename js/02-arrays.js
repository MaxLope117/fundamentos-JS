let name = 'Agus';
name = 'Max';
// console.log(name);

//* Array
const lista = ['Hola', 232, 'Mundo', true, undefined, 'Nombre', name];
// console.log(typeof lista);

const frutas = ['Plátano (0)', 'Manzana (1)', 'Sandía (2)', 'Guayaba (3)'];
// console.log(frutas);

//* Acceder a 1 elemento de la lista individualmente 
// console.log(frutas[0]); // Elemento número 1 (Plátano).
// console.log(frutas[2]); // Elemento número 2 (Sandía).

//* Agregar nuevos elementos a la lista.
frutas[5] = 'Papaya (5)';

//* Editar un elemento ya existe.
frutas[0] = 'Naranja (0)';
// console.log(frutas);

//* Tamaño del array (método).
// console.log('El tamño del array es:', frutas.length);

//* Agregar nuevos elementos a la array (método).
frutas.push('Melón');
frutas.push('Plátano');
// console.log(frutas);

//* Agregar un nuevo elemento al inicio de el array (método).
frutas.unshift('Mango');

const listaDeListas = [[1, 2, 3], [4, 5, 6]];
console.log(listaDeListas);
console.log(listaDeListas[0][2]);

const listaDeListasConListas = [
    [
        1,
        [
            2,
            3
        ]
    ],
    
    [
        4,
        5,
        6,
    ]
];
console.log(listaDeListasConListas[0][1][1]);

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

//! TAREA.
const paises = ['México', 'Argentina', 'Rusia', 'Ucrania', 'Guatemala', 'E.E.U.U.'];
/*
    TODO: Imprime en consola 'México', 'Rusia' y 'Guatemala'.
    TODO: Reemplazar E.E.U.U por Canadá

    TODO: Crea un Array que contenga 5 arrays (1 array por cada continente)...
    TODO: ...cada array debe contener al menos 3 países de cada continente.

    TODO: Del array anteriormente creado imprime en consola todos los países del...
    TODO: ...continente asiático.
*/

//* Inicio Tarea (la tarea va empieza después de está línea).

//* Fin Tarea.