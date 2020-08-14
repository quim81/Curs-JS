'use strict'

var categorias = ['Acción', "Comedia", "Drama"];
var peliculas = []; //['1','2'];//new array();//["ET", "Star Wars", "Spiderman"];

var cine = [categorias,peliculas];

//console.log(cine[0][0]);
//console.log(cine[1][1]);
/*
// Afegir elements
var newFilm = prompt("Pelicula:");
console.log(newFilm);
while(newFilm != 'END') {
peliculas.push(newFilm);
newFilm = prompt("Pelicula:");
}

console.log(peliculas);

// Treure elements
//peliculas[0] = undefined; // Borra element indexat
peliculas.pop(); //Borra l'últim element
console.log(peliculas);

//Buscar
var index = peliculas.indexOf("Spiderman")
console.log(index);
peliculas.splice(index); //Borra a partir de posició index
console.log(peliculas);

//Converir a string
var peliculasStr = peliculas.join();
console.log(peliculasStr);
*/

//Cadena a array
var filmstr = "1,2,3,4,5";
console.log(filmstr);
var film = filmstr.split(",");
console.log(film);

film.sort(); // Ordena
film.reverse(); //Inverteix
