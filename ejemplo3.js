
// BUCLES

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

  for (let i = 0; i < mascotas.length; i++){
    console.log(mascotas[i]);
  }

  const mascota = "toKiO";
  const mascotaUpper = mascota.toUpperCase();

  for (let i = 0; i < mascotas.length; i++){
    let arrayItemUpper = mascotas[i].toUpperCase();
    if (mascotaUpper === arrayItemUpper){
        console.log(mascota, "está en el array!!!");
    }
    }

    //mascotas.forEach();  // de momento solo con Arrays!!

    mascotas.forEach(function(element, index, array){
        console.log("Mascota:", element);
        console.log("Posición:", index);
    });


