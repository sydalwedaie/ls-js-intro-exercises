// multiply.js

let rlSync = require('readline-sync');

function getNumber(prompt) {
  return Number(rlSync.question(prompt));
}

let a = getNumber('Enter first number: ');
let b = getNumber('Enter second number: ');

function multiply(a, b) {
  return a * b  
}

console.log(`${a} * ${b} = ${multiply(a , b)}`);
