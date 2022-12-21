// ! Maneras de modificar elementos del DOM

// ! CRUD -> CREATE - READ - UPDATE - DELETE

// ! READ - >./SeleccionandoElementosDelDOM.js

//seleccionamos una imagen
const img$$ = document.querySelector("img");

//? CREATE

//creamos el elemento DIV
const miNuevoDiv$$ = document.createElement("div");

//creamos el elemento
const miNuevoP$$ = document.createElement("p");
//lo insertamos en el body
//dondelometo.la función que utilizo para meterlo.dónde lo meto(lo que inserto)
document.body.appendChild(miNuevoDiv$$);

//insertamos el nuevo P en el div
miNuevoDiv$$.appendChild(miNuevoP$$);


//? INSERT BEFORE

//selecciona primero el padre (document.BODY.inse...) del hijo (miNuevoDiv$$) en el que meteremos la imagen (img$$). Se insertará justo antes de la ruta indicada.
//por tanto el siguiente código inserta el nuevo DIV antes de la imagen añadida al body.

document.body.insertBefore(miNuevoDiv$$,img$$);


//? REMOVE ATTRIBUTES

//elegimos un elemento y le eliminamos el atributo que le pidamos. La función espera recibir un string que tiene que ser un atributo del nodo y lo elimina.
img$$.removeAttribute("alt");


//? REMOVE CHILD

//utilizar removeChild -> para eliminar miNuevoP$$ de miNuevoDiv$$
// miNuevoDiv$$.removeChild(miNuevoP$$);


//? REPLACE CHILD

//creamos un nuevo p
const miNuevo2P$$ = document.createElement("p").textContent = "Holaa";
//sirve para reemplazar un sustituir un elemento por uno nuevo
miNuevoDiv$$.replaceChild(miNuevoP$$, miNuevo2P$$);


//? ELEMENT REMOVE

const getElementByClassName$$ = document.getElementsByClassName("clasep");
console.log("get elements by class name: ", getElementsByClassName$$);

//borrar todos los elementos de la clase : clasep

// for (let i=0; element$$ of getElementByClassName$$) {
//     console.log(element$$)
//     element$$.remove();
// }


//! modificar

//* para modificar algo tengo que seleccionarlo primero

const primerH1$$ = document.querySelector("myH1");
primerH1$$.textContent = "Holaaaaaa";