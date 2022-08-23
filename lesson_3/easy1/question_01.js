/*
 * Question 1
 * Will the code below raise an error?
 */

let numbers = [1, 2, 3];
numbers[6] = 5;

/*
 * Answer:
 * It will not raise an error. The array will have empty slots for
 * indexes 3 through 5.
 */

// Bonus
let numbers2 = [1, 2, 3];
numbers2[6] = 5;
numbers2[4];  // what will this line return?

/*
 * Answer:
 * It will return undefined.
 */