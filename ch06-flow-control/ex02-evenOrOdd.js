// Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.

function evenOrOdd(number) {
  if (number === 0 ) {
    console.log('0 is neither even nor odd')
  } else {
    console.log(number%2 === 0 ? 'even': 'odd');
  }
}

evenOrOdd(2);
evenOrOdd(3333);
evenOrOdd(42);
evenOrOdd(0);
