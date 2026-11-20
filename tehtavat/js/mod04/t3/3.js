'use strict';
const names = ['John', 'Paul', 'Jones'];
const element = document.querySelector("#target")
let html = "";

for (let i = 0; i < 3; i++) {
    const bullet = document.createElement("li");
    const text = document.createTextNode(names[i])
    bullet.appendChild(text);
    element.appendChild(bullet);
}