// Practice Problem 1
// What is the return value of the filter method call below? Why?
[1, 2, 3].filter(num => "hi");

// Return value: [1, 2, 3]
// Why?: The callback returns "hi" for every element, which is truthy, so all elements
//       will be represented in the filtered array


// Practice Problem 2
// What is the return value of map in the following code? Why?
[1, 2, 3].map(num => {
  num * num;
});

// Return value: [undefined, undefined, undefined]
// Why?: The callback funtion doesn't have a return statement, so it will return undefined
//       by default.


// Practice Problem 3
// The following code differs slightly from the above code. What is the return value of 
// map in this case? Why?
[1, 2, 3].map(num => num * num);

// Return value: [1, 4, 9]
// Why?: The callback function implicity returns the result of the single statement when
//       when defined this way. Each element will be squared.


// Practice Problem 4
// What is the return value of the following statement? Why?
['ant', 'bear', 'caterpillar'].pop().length;

// Return value: 11
// Why?: The pop method removes the last element from a list and returns it. Thus the 
//       length property is called on 'caterpillar', which has a length of 3


// Practice Problem 5
// What is the callback's return value in the following code? Also, what is the return
// value of every in this code?
[1, 2, 3].every(num => {
  return num = num * 2;
});

// Callback's return value: 2, 4, and 6
// Full return value: true
// Why?: The return value of the callback function are positive integers, which are truthy.
//       Thus the return value of the every call will be true.


// Practice Problem 6
// How does Array.prototype.fill work? Is it destructive? How can we find out?
let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

// Fill will replace elements in an array with a given static value from
// the given starting index to the non-inclusive ending index. It is a
// destructive operation.
// Result value = [1, 1, 1, 1, 1]


// Practice Problem 7
// What is the return value of map in the following code? Why?
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// Return value: [undefined, 'bear']
// For the first element, 'ant', the if condition will not be entered and thus
// the return elem statement will not be reached. Instead the function will
// implicitly return undefined.
// For the second element, 'bear', the if condition will be entered, and 'bear'
// will be placed into the resulting array.