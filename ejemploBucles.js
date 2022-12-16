const pitufos = ["papa pitufo", "pitufina", "gruñón", "gafotas"]

//BUCLE con FOR
console.log("----------FOR");
for (let i = 0; i < pitufos.length; i++){
    console.log("Ésta es la vuelta:", i);
}


//FOROF   --  método abreviado del for
console.log("----------FOROF");
for (const pitufo of pitufos){
    console.log(pitufo);
}


//FOREACH  --  por cada ...
console.log("----------FOREACH Método 1");
pitufos.forEach(
    function (pitufo){

        console.log(pitufo);

    }
)


console.log("----------FOREACH Método 2");
pitufos.forEach((pitufo) => {    //diferente estructura del FOREACH

    console.log(pitufo);

})


//FORIN   --  recoge cada propiedad del objeto y la "guarda" en un "array" después obtiene cada pisición de ese array
console.log("----------FORIN");

const objeto = {
    name: "Pepe",
    age: 22,
    isAlive: false
}

for (const key in objeto){
    console.log(key);
}

//objeto.name => nos muestra la categoría NAME de dentro de la Array OBJETO - lo interpreta como STRING
console.log(objeto.name);

//objeto[name] => nos dará ERROR por NOT DEFINED ya que la variable NAME no está declarada fuera del bucle
// console.log(objeto[name]);

//objeto(["name"]) => es lo mismo que objeto.name
console.log(objeto["name"]);

