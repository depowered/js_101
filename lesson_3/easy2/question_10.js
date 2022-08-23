/**
 * Question 10
 * Write a one-line expression to count the number of lower-case t characters
 * in each of the following strings:
 */

let statement1 = "The Flintstones Rock!"; // 2
let statement2 = "Easy come, easy go."; // 0

// Answer
console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);