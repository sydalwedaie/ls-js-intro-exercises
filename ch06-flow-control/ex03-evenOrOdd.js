// Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.

function evenOrOdd(number) {
  if (parseInt(number) !== number) {
    console.log('Error: enter an integer!');
    return;
  }
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
evenOrOdd(1.2);
