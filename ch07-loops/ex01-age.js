// age.js

let rlSync = require('readline-sync');
let age = Number(rlSync.question("How old are you? "));

console.log(`You are ${age} years old.`);
for (let i = 0; i < 4; i++) {
  let factor = (i + 1) * 10
  console.log(`In ${factor} years, you will be ${age + factor} years old.`);
}
