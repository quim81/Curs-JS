'use strict'

/* Calculadora
  - Demana 2 números
  - Repeteix fins que estiguin bé
  - Mostra al cos de la pàgina en una alerta i per la consola el resultat
  de sumar, restar i dividir
*/

var n1=parseInt(prompt('Primer número',0))
while (n1<0 || isNaN(n1)) {
  n1=parseInt(prompt('Introdueix un valor correcte'))
}

var n2=parseInt(prompt('Segon número',0))
while (n2<=0 || isNaN(n2)) {
  n2=parseInt(prompt('Introdueix un valor correcte'))
}

var resultat = "La suma és "+(n1+n2)+"</br>"+
               "La resta és "+(n1-n2)+"</br>"+
               "La multiplicació és "+(n1*n2)+"</br>"+
               "La divisió és "+(n1/n2)+"</br>"

               var resultatCMD = "La suma és "+(n1+n2)+"\n"+
                              "La resta és "+(n1-n2)+"\n"+
                              "La multiplicació és "+(n1*n2)+"\n"+
                              "La divisió és "+(n1/n2)+"\n"

document.write(resultat)
console.log(resultatCMD);
alert(resultatCMD)
