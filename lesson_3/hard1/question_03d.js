/**
 * Question 3D - Extra example from discussion post
 * Extra example 1. Try to think first what this example would log.
 */

function messWithVars(one, two) {
  // local variables one & two point to their respective global variables

  one = two; // reasignmentlocal one points to the array at global two
  /* reassignment points local variable one to the same object that local and
     global two point to */

  one.splice(0, 1, "five");
  // the object that local variable one points to, and thus both local and
  // global two, is mutated.
}

let one = ["one"];
let two = ["two"];

messWithVars(one, two);

console.log(`one is: ${one}`); // one is: one
console.log(`two is: ${two}`); // two is: five