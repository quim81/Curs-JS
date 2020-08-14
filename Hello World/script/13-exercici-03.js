'use strict'

//Mostrar tots els números entre 2 números

var n1=parseInt(prompt("Num 1"))
var n2=parseInt(prompt("Num 2"))

document.write("<h1>De "+n1+" a "+n2+" hi ha:</h1>")
for (var i = n1; i <= n2; i++) {
  document.write(i+"</br>")
}
