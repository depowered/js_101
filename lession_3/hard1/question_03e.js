/**
 * Question 3E - Extra example from discussion post
 * Extra example 2. Try to think first what this example would log.
 */

function messWithVars(one, two) {
  // local variables one & two point to their respective global variables

  one = ["two"];
  // local variable one points to a new object with the value of ["two"]

  one.splice(0, 1, "five");
  // local variable one is mutated
  // global variable one is unaffected due to the reassignment above
}

let one = ["one"];
let two = ["two"];

messWithVars(one, two);

console.log(`one is: ${one}`); // one is: one
console.log(`two is: ${two}`); // two is: two