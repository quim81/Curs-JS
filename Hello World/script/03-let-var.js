'use strict'
// Let i var

//Prova amb var
var num="40";
console.log(num); //40
if (true) {
  var num="50";
  console.log(num); //50
}
console.log(num); //50

//Prova amb let
var text="Holakase";
console.log(text);
if (true) {
  let text="Noasenada";
  console.log(text); //??
}
console.log(text);
