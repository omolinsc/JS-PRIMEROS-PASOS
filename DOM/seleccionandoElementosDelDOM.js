//! Maneras de seleccionar elementos para leerlos

//? Porcentajes de utilización y explicación

//* getElementById -> 10% -> selecciona el primer elemento que se encuentra que coincide con el ID aportado
const myH1$$ = document.getElementById("myH1").textContent;
console.log("GetElementById :", myH1$$);

//* getElementByName -> 5% -> selecciona todos los elementos que coincidan con el name aportado (array de nodos)
const getElementsByName$$ = document.getElementsByName("nombreElementoLista");
console.log("GetElementByName :", getElementsByName$$);

//* getElementByTagName -> 1% -> selecciona todos los elementos cuya etiqueta coincidan con la aportada (h1) -> devolverá un array de h1s
const getElementsByTagName$$ = document.getElementsByTagName("h1");
console.log("GetElementByTagName :", getElementsByTagName$$);

//* getElementByClassName -> 5% -> selecciona todos los elementos que tengan la clase aportada
const getElementsByClassName$$ = document.getElementsByClassName("clasep");
console.log("GetElementByClassName :", getElementsByClassName$$);

//* getAttribute -> 50% -> necesita un elemento sobre el que buscar el atributo -> recogerá el atributo
//primero seleccionamos el elemento
const img = document.querySelector("img");
//miramos su atributo
console.log("GetAttribute :", img.getAttribute("src"));

//* queySelector -> 90% -> devolverá el primer elemento que cumpla con el parámetro indicado
//si quiero buscar un elemento con queySelector por etiqueta, lo haré con el nombre de la etiqueta directamente
const imgQuerySelector$$ = document.querySelector("img");
console.log("querySelector by tag name", imgQuerySelector$$);

//si quiero buscar un elemento con querySelector por clase, lo haré con el nombre de la etiqueta precedido de un .
const pQuerySelector$$ = document.querySelector(".clasep");
console.log("querySelector by class", pQuerySelector$$);

//si quiero buscar un elemento con querySelector por ID, lo haré con el nombre de la etiqueta precedido de un #
const idQuerySelector$$ = document.querySelector("#myH1");
console.log("querySelector by ID", idQuerySelector$$);


//* queySelectorAll -> 90% -> devolverá todos los elementos que cumpla con el parámetro indicado
//si quiero buscar un elemento con queySelector por etiqueta, lo haré con el nombre de la etiqueta directamente
const imgQuerySelectorAll$$ = document.querySelectorAll("img");
console.log("querySelectorAll by tag name", imgQuerySelectorAll$$);

//si quiero buscar un elemento con querySelector por clase, lo haré con el nombre de la etiqueta precedido de un .
const pQuerySelectorAll$$ = document.querySelectorAll(".clasep");
console.log("querySelectorAll by class", pQuerySelectorAll$$);

//si quiero buscar un elemento con querySelector por ID, lo haré con el nombre de la etiqueta precedido de un #
const idQuerySelectorAll$$ = document.querySelectorAll("#myH1");
console.log("querySelectorAll by ID", idQuerySelectorAll$$);