'use strict'

var nombre = prompt("NOMBRE");
var apellidos = prompt("APELLIDOS");

var texto = `
<h1>Titol amb H1</h1>
<h3>Nom: ${nombre}</h3>
<h3>Cognoms: ${apellidos}</h3>
`;

document.write(texto);
