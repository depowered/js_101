// Add up all the ages from the Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let ageSum = Object.values(ages).reduce((a, b) => a + b, 0);
console.log(ageSum);