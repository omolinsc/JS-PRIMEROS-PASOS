const mascotas = [
  "Mía",
  "Bribón",
  "Tokio",
  "Firulais",
  "Tronco",
  "Nano",
  "Mus",
  "Mortimer",
  "Mel",
  "Luffy",
  "Musk",
];
const students = ["Joan", "Víctor", "Marcos"];

mascotas.unshift("Floky", "Leia");

console.log(mascotas);

console.log(mascotas.concat(students));
console.log(students.concat(mascotas));
console.log(students);

console.log(
  mascotas.concat(students).sort(function (a, b) {
    return a.toUpperCase() > b.toUpperCase() ? 1 : -1;
  })
);

//* ------------------------------------

console.log(mascotas.slice(1, 3)); // corta desde el elemento 1 hasta el 3 (el 3 no incluido, corta antes de ese elemento)

console.log(mascotas.indexOf("Firulais"));

if (mascotas.indexOf("Firulais") > -1) {
  console.log("El elemento existe");
} else {
  console.log("El elemento no existe");
}

const search = "Luffy";
const first = mascotas.indexOf(search);
const last = mascotas.lastIndexOf(search);
console.log(first === last);


console.log(mascotas.includes("nano"));
const stringed = mascotas.toString();
console.log(stringed);
const lower = stringed.toLowerCase();
const mascotasLower = lower.split(",");
console.log(mascotasLower);


const esta = "flokY";

const estaUpper = esta.toUpperCase();
var mascotasUpper = mascotas.map( mascotas => mascotas.toUpperCase());

if (mascotasUpper.includes(estaUpper)) {
    console.log(esta, "está en el array!!")
} else {
    console.log(esta, "NO está en el array!!")
}

