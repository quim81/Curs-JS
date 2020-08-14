'use strict'

// Programa que demana dos números i diu quin és més gran o si són iguals
//PLUS Si no són númeors o són menors o iguals a 0 torna a demanar els números


var n1=parseInt(prompt('Primer número',0))
while (n1<=0 || isNaN(n1)) {
  n1=parseInt(prompt('Introdueix un valor correcte'))
}

var n2=parseInt(prompt('Segon número',0))
while (n2<=0 || isNaN(n2)) {
  n2=parseInt(prompt('Introdueix un valor correcte'))
}

console.log(n1,n2);

if (n1==n2) {
  alert('Són iguals')
}
else if (n1>n2) {
  alert(n1+' és més gran que '+n2)
}
else if(n1<n2){
  alert(n2+' és més gran que '+n1)
}
else {
  alert('Valors incorrectes')
}
