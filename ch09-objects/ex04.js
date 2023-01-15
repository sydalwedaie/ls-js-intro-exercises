// Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let keys = Object.keys(obj)
let upperCaseKeys = keys.reduce((acc, key) => acc.concat(key.toUpperCase()), []);
console.log(upperCaseKeys);
console.log(obj);
