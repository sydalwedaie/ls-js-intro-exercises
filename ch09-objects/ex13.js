// Without modifying foo, update this code to print the desired text.

function foo(bar) {
  console.log(bar());
}

foo(welcom);    // Should print 'Welcome'
foo(pi);    // Should print 3.1415
foo(array);    // Should print [1, 2, 3]

// solution

function welcom() { return 'Welcom' }
function pi() { return 3.1415 }
function array() { return [1,2,3] }
