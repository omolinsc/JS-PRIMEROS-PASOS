async function getAllPokemons(pokemonList) {

    let pokemonsDetails = [];

    for (let pokemon od pokemonsList){
        const response = await fetch(pokemon.url);
        const result = await response.json();
        pokemonsDetails.push(result);
    }

    console.log(pokemonsDetails);

    // RETO: Crear otra función que cree elementos de HTML con más detalles de los pokemons.

};




/**
 * TAREA PARA HOY: 
 * Copiar de aquí hacia abajo para tener el mismo resultado.!!!!
 */

function renderPokemons(pokemonsList){
    //aquí recibiremos el array de pokemons y vamos a crear elementos en el HTML desde JS
    console.log("Función render pokemons", pokemonsList);


    pokemonsList.forEach (function(pokemon) {
        const container = document.createElement("div");

        const h2 = document.createElement("h2");
        h2.textContent = pokemon.name;

        const link = document.createElement("a");
        link.href = pokemon.url;

        link.textContent = "Link a " + pokemon.name;

        container.appendChild(h2);
        container.appendChild(link);

        document.body.appendChild(container);
    })

};


function getPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon/')

    .then(function(response) { 
      // abrir el paquete
      return response.json();
    })
    .then(function(result) { 
      // disfrutar de nuestro capricho comprado
      renderPokemons(result.results);
      getAllPokemons(result.results);
    })
    .catch(function(error) {
      console.log("NO LLEGA EL PAQUETEEEEEEE!!!!!");
      console.log(error);
    });
}

function init() {
    getPokemons();
}

window.onload = init;


