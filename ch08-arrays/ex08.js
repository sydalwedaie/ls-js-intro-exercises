// Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  return array.reduce((acc, el) => el.length % 2 === 1 ? acc.push(el.length):acc , []); 
}

console.log(oddLengths(arr)); // => [1, 5, 3]
