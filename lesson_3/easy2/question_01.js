/*
 * Question 1
 * Given a string, return a new string that replaces every occurrence of the
 * word "important" with "urgent":
 */

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Answer
let urgentAdvice = advice.replace('important', 'urgent');
console.log(urgentAdvice);

// Note that if the string contains two or more occurrences of important,
// this code only replaces the first. Can you figure out how to replace
// all occurrences?

let replaceAllAs = advice.replaceAll('as', 'AS');
console.log(replaceAllAs);