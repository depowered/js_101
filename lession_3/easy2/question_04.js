/*
 * Question 4
 * Starting with the string: "seven years ago..."
 * show two different ways to put the expected "Four score and " in front of it.
 */

let famousWords = "seven years ago...";

// Answer
console.log("Four score and " + famousWords);
console.log("Four score and ".concat(famousWords));