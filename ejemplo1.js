//? comentarios
//* cosas interesantes / importantes en un 80%
//! cosas importantísimas


//! entender como ejecuta el código el ordenador

//* let -> variable que puede cambiar su tipo de dato o contenido "libre"
//* const -> variable puede cambiar su contenido sólo cuando es un array o un objeto

//! CLAVE - VALOR

//! Buena nomenclatura de variables -> un buen nombre de una variable os ayudará mucho en el futuro


//* inicializar una variable

let numero = 0; 
//? creamos una variable (guarda en su memoria que existe una variable llamada numero y que vale 0)
//? crear la cajita y meter dentro el valor 0


//* ver el valor de una variable
console.log("este es mi numero", numero);
//? abrir la caja y mirar lo que hay dentro



//! TIPOS DE DATOS

//* TIPOS DE DATOS SIMPLES

//! number
//? un numero es un tipo de dato de tipo numero con el que se pueden realizar diversas operaciones
let numerico = 5;
console.log("esto es mi tipo número: " + typeof numerico);

//! string
//? una cadena de texto es un tipo de dato que tiene una longitud y por lo tanto puedo acceder a sus posiciones y user ciertos tipos de métodos que solo pueden ser utilizados en tipos de datos iterables "recorribles"
let cadenaDeTexto = "El gato de Oriol se las está gozando ahora mismo"; //? ""   ''    ``
console.log("esto es mi tipo string: " + typeof cadenaDeTexto);

//! boolean
//? un booleano es un tipo de dato que puede ser o true, o false, lo cual nos da mucho beneficio/juego/combinaciones si lo utilizamos correctamente
let interruptor = true;
console.log("esto es mi tipo booleano: " + typeof interruptor);

//* paluego TIPOS DE DATOS COMPLEJOS

//! object
//? un objeto es un elemento con variables dentro de cualquier tipo
let juguete1 = {
    nombre: "playmobil",
    color: "negro",
    altura: 20,
    anchura: 10,
    haveGlasses: true,
    ropas: ["chaleco", "gorro"],
    otroObjeto: {
        campos: "sdflsdafjas"
    },
    otroObjeto2: {
        campo: "sldflsdaf"
    }
}
console.log("esto es mi tipo objeto: " + typeof juguete1);

//! array
//? un array es una lista de elementos, estos elementos pueden ser de cualquier tipo
const listaDeComidas = ["macarrones", "arroz", "filetes", "lechuga", "kebab"];
console.log("esto es mi tipo array: " + typeof listaDeComidas);

// hacer este intercambio de variables SIN UTILIZAR UNA VARIABLE NUEVA DE APOYO
// nosotros no sabemos que hay dentro de las variables
// sin buscar en internet 

let a = 1;
let b = 5;

console.log(a, b);

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);

//Ordenación de arrays de forma "normal", ya que el .sort ordena por caracteres UTC-8
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  items.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  //? items.sort( function(a,b){return a.toUpperCase() > b.toUpperCase() ? 1 : -1})   es lo mismo que la función anterior

  console.log(items);
