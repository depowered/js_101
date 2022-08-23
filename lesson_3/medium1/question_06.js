/*
 * Question 6
 * What do you think the following code will output?
 */

let nanArray = [NaN];

console.log(nanArray[0] === NaN); // false because NaN does not equal NaN

// How can you reliably test if a value is NaN?
console.log(Number.isNaN(nanArray[0])); // true