const prompt = require("prompt-sync")();

let x = prompt("Enter a Value: ");
let y = prompt("Enter a Value: ");
let num1 = Number(x);
let num2 = Number(y);

let soma = num1+num2;
console.log(`Soma: ${soma}`);