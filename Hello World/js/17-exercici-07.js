'use strict'

//Taula de multiplicar
//PLUS totes les taules

//var n = parseInt(prompt("Número",1))

for (var j = 1; j <= 10 ; j++) {
document.write("<h1>Taula del "+j+"</h1>")
for (var i = 1; i <= 10; i++) {
  var res = j*i
  document.write(j+" x "+i+" = "+res+"</br>")
}
}
