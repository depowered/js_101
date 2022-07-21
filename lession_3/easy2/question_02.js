/**
 * The Array.prototype.reverse method reverses the order of elements in an
 * array, and Array.prototype.sort can rearrange the elements in a variety
 * of ways, including descending. Both of these methods mutate the original
 * array as shown below. Write two distinct ways of reversing the array
 * without mutating the original array. Use reverse for the first solution,
 * and sort for the second.
 */

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]


// -------------------------------------------------------------------
// Non-destructive Reverse with forEach
// My solution
let originalArray = [1, 2, 3, 4, 5];

function reverseArrayWithForEach(array) {
  let returnArray = [];
  array.forEach(value => {
    returnArray.unshift(value);
  });
  return returnArray;
}

let withForEach = reverseArrayWithForEach(originalArray);
console.log('Original Array:');
console.log(originalArray);
console.log('Reversed With Array.forEach()');
console.log(withForEach);

// Launch School Solution
// let numbers = [1, 2, 3, 4, 5];
// let reversedArray = [];

// numbers.forEach((number) => {
//   reversedArray.unshift(number);
// });

// console.log(reversedArray); // [5, 4, 3, 2, 1]
// console.log(numbers); // [1, 2, 3, 4, 5]


// -------------------------------------------------------------------
// Non-destructive Reverse with Array.reverse()
// My Solution
function reverseArrayWithArrayReverse(array) {
  return Array.from(array).reverse();
}

let withArrayReverse = reverseArrayWithArrayReverse(originalArray);
console.log('Original Array:');
console.log(originalArray);
console.log('Reversed With Array.reverse()');
console.log(withArrayReverse);

// Launch School Solution
// let numbers = [1, 2, 3, 4, 5];
// let reversedArray = numbers.slice().reverse();
// console.log(reversedArray); // [5, 4, 3, 2, 1]
// console.log(numbers); // [1, 2, 3, 4, 5]


// -------------------------------------------------------------------
// Non-destructive Reverse with Array.sort()
// My Solution
function reverseArrayWithArraySort(array) {
  return Array.from(array).sort((a, b) => b - a);
}

let withArraySort = reverseArrayWithArraySort(originalArray);
console.log('Original Array:');
console.log(originalArray);
console.log('Reversed With Array.sort()');
console.log(withArraySort);

// Launch School Solution
// let numbers = [1, 2, 3, 4, 5];
// let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(sortedArray); // [5, 4, 3, 2, 1]
// console.log(numbers); // [1, 2, 3, 4, 5]