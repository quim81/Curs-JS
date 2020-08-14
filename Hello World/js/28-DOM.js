'use strict'

//DOM - Document Object Model
function changeColor(color) {
    box.style.background = color;
}

//var box = document.getElementById("MyBox");
var box = document.querySelector("#MyBox");
console.log(box);

var boxHTML = document.getElementById("MyBox").innerHTML;
console.log(boxHTML);

box.innerHTML = "I'm not a box anymore!"
box.style.padding = "20px";
//box.style.color = "white";
console.log(box);
console.log(box.innerHTML);

// Obtener todos los div
var allDivs = document.getElementsByTagName("div");
allDivs[2].innerHTML = "KK de la vaca";

for (var i = 0; i < allDivs.length; i++) {
    allDivs[i].innerHTML = "Sóc el DIV nº " + i;
    var parraf = document.createElement("p");
    parraf.appendChild(document.createTextNode("Parraf nº " + i));
    allDivs[i].appendChild(parraf);
};

// Obtener elementos por classe classe
var divsVermells = document.querySelectorAll(".vermell");
var strong = document.createElement("STRONG");
for (var i = 0; i < divsVermells.length; i++) {
    var strongAux = strong.cloneNode(strong);
    strongAux.innerHTML = divsVermells[i].innerHTML;
    console.log(strongAux);
    divsVermells[i].innerHTML = "";
    divsVermells[i].appendChild(strongAux);
    console.log(divsVermells[i]);
    divsVermells[i].style.background = "red";
}

var divsGrocs = document.querySelectorAll(".groc");
for (var i = 0; i < divsGrocs.length; i++) {
    divsGrocs[i].style.background = ("yellow");
}
