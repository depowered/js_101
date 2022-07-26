/**
 * Question 3C
 * Given the following similar sets of code, what will each code snippet print?
 */

function messWithVars(one, two, three) {
  /*
  Since this function doesn't assign new variables to one, two, and three,
  the objects at the location of the pointers passed in can be manipulated.
  */
  one.splice(0, 1, "two");
  // replaces ["one"] with ["two"]

  two.splice(0, 1, "three");
  // replaces ["two"] with ["three"]

  three.splice(0, 1, "one");
  // replaces ["three"] with ["one"]
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is: two
console.log(`two is: ${two}`); // two is: three
console.log(`three is: ${three}`); // three is: one