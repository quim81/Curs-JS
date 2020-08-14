'use strict'

// Mostra tots els divisors d'un números

var num=parseInt(prompt("Número"))

for (var i = 1; i <= num; i++) {
  if (num%i == 0) {
    document.write(i+"</br>")
  }
}
