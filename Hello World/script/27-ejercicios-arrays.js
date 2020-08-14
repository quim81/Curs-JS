'use strict'

/*
1. Pida 6 números por pantalla y los meta en un arrays
2. Mostrar los elementos del array en elcuerpo de la página y en la consola
3. Ordenar el array y mostrarlo
4. Invertir el orden y mostrarlo
5. Mostrar cuantos elementos tiene el arrays
6. Hacer ua búsqueda y nos diga si está y suposición
*/

function mostrarArray(elements, textoCustom = ""){
    document.write("<h1>Contenido del array"+textoCustom+"</h1>");
    document.write("<ul>");
    elements.forEach((item, i) => {
        document.write("<li>"+item+"</li>");
    });
    document.write("</ul>");
}

var numbers = new Array(6);

// Pedir 6 números
for (var i = 0; i < numbers.length; i++) {
    numbers[i] = parseInt(prompt("Introduce un número"));
    //numbers.push(parseInt("Introduce un número")); S'ha de definir Array buit!!!
}

// mostrar por la consola
console.log(numbers);

mostrarArray(numbers);

//Ordenar y mostrarlo
numbers.sort(function(a,b){return a-b}); //Funció de callback per ordre numèric
mostrarArray(numbers," ordenado");

//Invertir y mostrar
numbers.reverse();
mostrarArray(numbers," invertidos");

// Contrar elementos
document.write("<h1>El array tiene "+numbers.length+" elementos</h1>");

//Buscar
var busqueda = parseInt(prompt("Número a buscar:", 0));

var pos = numbers.findIndex(num => num == busqueda);
if(pos && pos != -1){
    document.write("<h2>ENCONTRADO</h2></br>");
    document.write("Posición: "+pos);
}else {
    document.write("<h2>NO ENCONTRADO</h2></br>");
}
