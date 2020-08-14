'use strict'

// Parametros REST y SPREAD
function ListadoFrutas(fruta1, fruta2, ...array_frutas){
console.log("Fruta1: ", fruta1);
console.log("Fruta2: ", fruta2);
console.log(array_frutas);
}

var frutas = ["Pera", "Rambutan"];

ListadoFrutas("Manzana", "Naranja", "Pera", "Rambutan", "Albaricoque" );
ListadoFrutas(frutas, "Manzana", "Naranja");
