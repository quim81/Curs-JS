'use strict'

// Condicionals

var edat=72;
var nom="Quim Molera";

/*
Operadors:
>  o >=
<  <=
==
!=  diferent
*/

if (edat >= 18) {
  console.log(nom+" té "+edat+" anys");
  if (edat <= 33) {
    console.log("Mil·lenial");
  }else if (edat >= 70) {
    console.log("Yayo");
  }else {
    console.log("Adult");
  }
}
else {
  console.log(nom+" és menor d'edat");
}

/*
// Operadors lògics
AND: && (AND)
OR: || (alt gr + 1)
Negació: !
*/
var year=2020;

// Negació
if (year != 2016 ) {
  console.log("No estem a 2016");
}

//AND
if (year >=2010 && year <=2020) {
  console.log("Estem a la segona dècada del segle XXI");
}

//OR
if (year == 2020 || year == 2010) {
  console.log("L'any acaba en 0");
}
