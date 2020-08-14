'use strict'

//Que ens digui si un número és par o impars

//prompt
var n = parseInt(prompt("Número",0))

//Validació del números
while (isNaN(n)) {
  n = parseInt(prompt("no és correcte, introdueix de nou",0))
}

//Par o impar
if (n%2 == 0) {
  alert('És par')
}else {
  alert('És impar')
}
