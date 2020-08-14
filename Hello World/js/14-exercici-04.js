'use strict'

//Mostra els números impars entre dos números

var n1=parseInt(prompt("Num 1"))
var n2=parseInt(prompt("Num 2"))

document.write("<h1>De "+n1+" a "+n2+" són impars:</h1>")
for (var i = n1; i <= n2; i++) {
  if(i%2 != 0)
  document.write(i+"</br>")
}
