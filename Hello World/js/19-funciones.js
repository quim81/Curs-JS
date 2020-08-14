'use strict'

// funciones

function calculadora(var1, var2, mostrar = false){
  if (mostrar == false) {
porConsola(var1, var2)
}else {
porPantalla(var1, var2)
}
}

function porConsola(var1, var2){
  console.log('Suma = '+(var1+var2));
  console.log('Resta = '+(var1-var2));
  console.log('Multiplicació = '+(var1*var2));
  console.log('Divisió = '+(var1/var2));
  console.log('***********************');
}
function porPantalla(var1, var2){
  document.write('Suma = '+(var1+var2)+'<br/>');
  document.write('Resta = '+(var1-var2)+'<br/>');
  document.write('Multiplicació = '+(var1*var2)+'<br/>');
  document.write('Divisió = '+(var1/var2)+'<br/>');
  document.write('***********************'+'<br/>');
}
//Definició


// Invoquem
for (var i = 0; i < 11; i++) {
  calculadora(i,8,true)
}

//Paràmetres opcionals
