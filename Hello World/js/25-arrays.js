'use strict'

var lenguajes = ["Python","PHP","JS","ABAP"];

document.write("<h1>Llenguatges de programació</h1><ul>");
/*
for (var i = 0; i < lenguajes.length; i++) {
    document.write("<li>"+lenguajes[i]+"</li>");
}
*/

lenguajes.forEach((item, i, array) => {
    console.log(array);
document.write("<li>"+item+"</li>");
});

for (let i in lenguajes){
    document.write("<li>"+lenguajes[i]+"</li>");
}


document.write("</ul>")

//Busqueda
var findPHP = lenguajes.find(function(element) {
    return element == "PHP";
});
console.log(findPHP);

var findPHPIndex = lenguajes.findIndex(function(element) {
    return element == "PHP";
});
console.log(findPHPIndex);

var somePHP = lenguajes.some( element => element == 'PHP'); //true or false
console.log(somePHP);
