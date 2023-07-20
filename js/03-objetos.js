// * Objetos

const diccionario = {
    "pais": "México",
    "tel": 4548439423,
}
console.log(typeof diccionario);

console.log(diccionario.pais);

diccionario.pais = "Argentina"
console.log(diccionario.pais)

diccionario.provincia = "Salta";
console.log(diccionario.provincia);

console.log(diccionario.email);

const usuario = {
    "nombre": "Juan",
    "email": "correo@correo.com",
    "password": "123456",
    "telefono": "4574465643",
};

const productos = [
    {
        "nombre": "TV 20 pulgadas",
        "precio": 550,
        "marca": "LG",
        "tipo": "TV"
    },
    {
        "nombre": "Samsung A10",
        "precio": 5000,
        "marca": "Samsung",
        "tipo": "Teléfono"
    },
    {
        "nombre": "Tableta 10 pulgadas",
        "precio": 3500,
        "marca": "Patito"
    }
];

console.log(productos[1]);
console.log(productos[1].nombre);

/*

    TODO: Crea un objeto llamado usuariosPorOrganizacion que contenga lo siguiente:
    * - Organización (su nombre).
    * - Nombre (del usuario).
    * - Email (del usuario).
    * - Constraseña (del usuario).
    TODO: Imprimé el objeto completo.

    TODO: Agrega un nuevo producto al array de productos e imprimelo en consola.
    TODO: Agrega un nuevo producto, pero esta vez solo imprime su nombre y precio.

*/

//* Inicio Tarea (la tarea va empieza después de está línea).

//* Fin Tarea.