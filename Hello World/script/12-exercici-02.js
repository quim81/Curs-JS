'use strict'

//Utilizando un bucle mostrar la suma y la media de dos números hasta que meta un valor negativo

var sum = 0
var count = 0

do {
  count++
  var num = parseInt(prompt('Introdueix números enters positius'))

  if (isNaN(num)) {
    num = 0
  } else {
    sum = sum + num
    var media = sum / count
    console.log(sum,media);
  }
}while (num > 0)

alert("Suma = "+sum+" Media = "+media)
