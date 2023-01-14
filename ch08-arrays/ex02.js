// Log all of the even values from myArray to the console.

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let evenValues = myArray.filter(item => item % 2 === 0);
evenValues.forEach(item => console.log(item));

// shorter version
// myArray.filter(a=>a%2===0).forEach(a=>console.log(a))
