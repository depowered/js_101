/**
 * Question 3A
 * Given the following similar sets of code, what will each code snippet print?
 */

function messWithVars(one, two, three) {
  /*
  The local variables one, two, and three of the function shadow the global
  variables of the same name.

  Any changes to the local variables disappear as they go out of scope at
  the end of the function execution.
  */

  one = two;
  // Local one points to ["two"]; global one still points to ["one"]

  two = three;
  // Local two points to ["three"]; global two still points to ["two"]

  three = one;
  /* Local three points to ["two"] since local one was assigned to that above.
     Global three still points to ["three"] */
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is: one
console.log(`two is: ${two}`); // two is: two
console.log(`three is: ${three}`); // three is: three