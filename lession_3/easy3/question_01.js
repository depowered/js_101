/*
 * Write three different ways to remove all of the elements from the following
 * array:
 */

let numbers = [1, 2, 3, 4];


// Method 1: Array.splice()
numbers.splice(0, numbers.length);
console.log(numbers);


// Method 2: Array.shift()
numbers = [1, 2, 3, 4];
for (let i = numbers.length; i >= 0; i -= 1) {
  numbers.shift();
}
console.log(numbers);


// Method 3: Array.pop()
numbers = [1, 2, 3, 4];
for (let i = numbers.length; i >= 0; i -= 1) {
  numbers.pop();
}
console.log(numbers);


// Launch School Solutions
// numbers.length = 0;

// numbers.splice(0, numbers.length);

// while (numbers.length) {
//   numbers.pop();
// }