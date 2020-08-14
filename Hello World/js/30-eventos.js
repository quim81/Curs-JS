'use strict'

document.querySelector("#BT").addEventListener("click", requestBT);

function requestBT() {
    window.navigator.bluetooth.requestDevice({
        acceptAllDevices: true
})}
