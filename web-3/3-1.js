"use strict";
let luku = 0;
const luvut = [];
let kaannettu = [];

for (let i = 0; i < 5; i++){
    luku = prompt("Syötä luku.");
    luvut.push(luku);
};

for (let i = luvut.length-1; i >= 0; i--) {
    luku = luvut[i];
    kaannettu.push(luku);
};

for (let i of kaannettu) {
    console.log(i);
};
