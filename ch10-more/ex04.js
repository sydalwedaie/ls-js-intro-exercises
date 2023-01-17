// largest number

function largestNumber(list) {
  return list.sort((a,b) => a - b).pop()
}

console.log(largestNumber([1, 6, 3, 2]));
console.log(largestNumber([-1, -6, -3, -2]));
console.log(largestNumber([2, 2]));

// or you can use Math.max()!
