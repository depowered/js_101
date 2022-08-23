/*
 * Question 3
 * Alan wrote the following function, which was intended to return all of the
 * factors of number:
 */

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

/*
 * Alyssa noticed that this code would fail when the input is 0 or a negative
 * number, and asked Alan to change the loop. How can he make this work without
 * using a do/while loop? Note that we're not looking to find the factors for 0
 * or negative numbers, but we want to handle it gracefully instead of raising
 * an exception or going into an infinite loop.
 */

function factorsRevised(number) {
  if (number <= 0) return [];

  let divisor = number;
  let factors = [];

  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }

  return factors;
}

console.log(factorsRevised(0));   // []
console.log(factorsRevised(-1));  // []
console.log(factorsRevised(2));   // [1, 2]
console.log(factorsRevised(16));  // [1, 2, 4, 8, 16]

// Bonus: What is the purpose of number % divisor === 0 in that code?
// It determines whether the result of the division is an integer -- if the
// number has no remainder, the result is an integer, so the number divided
// by the divisor is a factor.