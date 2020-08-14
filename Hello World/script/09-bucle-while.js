'use strict'

//WHILE
var year=2020

while (year<=2026) {
  console.log("Estem a "+year)
  if (year==2026) {
    break;//surt del bucle
  }
  year++
}
while (year>=2020) {
  console.log("Estem a "+year)
  if(year==2020){
    break
  }
  year--
}

//DO WHILE
do {
  alert("No estem a 2023 encara")
  console.log("Estem a "+year)
  year++
} while (year <= 2023);
alert("Ja estem a 2023!");
