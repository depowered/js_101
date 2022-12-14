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