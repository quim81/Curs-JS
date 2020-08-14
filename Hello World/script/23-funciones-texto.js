'use strict'

var num1 = 444;
var text1 = "Texto 1";
var text2 = "Texto 2";
var array1 = ["1", "2", "3"]

var num_string = num1.toString();
console.log(num_string);
console.log(typeof num1);
console.log(typeof num_string);

console.log(text1.toUpperCase());
console.log(text2.length);
console.log(array1.length);

console.log(text1.concat(" ",text2));

//Búsqueda
text2 = text2.toLowerCase();
console.log(text2.indexOf("t"));
console.log(text2.lastIndexOf("t"));
console.log(text2.match(/t/g));

/* OTROS
text2.includes("")
text2.startWith("")
text2.endsWith("")*/

console.log(text1.replace("Texto", "kk"));
console.log(text2.slice(2,5));
console.log(text2.split(" "));
text2 = "     aldskf asdlkf fdasd    "
console.log(text2.trim());
