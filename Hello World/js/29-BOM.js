'use strict'

//BOM Browser Object Model

console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.location);
console.log(screen.height);
console.log(screen.width);
/*
window.navigator.bluetooth.requestDevice({
    acceptAllDevices: true
});
*/

function redirect(url){
    window.location.href = url;
}

function newWindow(url){
    window.open(url,"","width=400,height=300");
}
