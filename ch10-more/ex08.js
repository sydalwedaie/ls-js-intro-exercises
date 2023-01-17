// Without using either of the built-it methods to detect NaN, write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not.

function isNotANumber(value) {
  // return value.toString() === 'NaN'; this won't work for null and undefined
  return value !== value
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(null));
console.log(isNotANumber(0/0));
console.log(isNotANumber(3 + undefined));
console.log(isNotANumber('hello'));
console.log(isNotANumber(34));
