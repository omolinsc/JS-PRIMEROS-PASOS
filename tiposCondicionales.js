// IF
console.log("----------Estructura IF")
const superheroe = "batman";

if (superheroe === "batman"){
    console.log("ES BATMAN");
}else{
    console.log("no es batman");
}


// SWITCH
console.log("----------Estructura SWITCH")
// const superheroe = "batman";

switch (superheroe){
    case "ironman":
        console.log("no es batman");
        break;
    case "batman":
        console.log("ES BATMAN")
}


console.log("SUPER MÉTODO DE COMPROVACIÓN DE OBJETOS - Estructura condicional SIN CONDICIONALES")
const comprobacion = {
    ironman: "no es batman",
    robin: "no es batman",
    hulk: "no es batman",
    spiderman: "no es batman",
    batman: "ES BATMAN",
};

console.log(comprobacion[superheroe] || "es SuperLópez");