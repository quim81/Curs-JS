'use strict'

// Función anónima: Función que no tiene nombre

function sumame(var1, var2, funcion1, funcion2){
   var suma = var1 + var2;

   funcion1(suma);
   funcion2(suma);
   //return sumar;
}

sumame(1,2, function(value){
  console.log("La suma es: ", value);
},
function(value){
  console.log("La suma por 2 es: ", value*2 );
});

// Con flecha =>
sumame(1,2, value => {
  console.log("La suma es: ", value);
},
value => {
  console.log("La suma por 2 es: ", value*2 );
});
