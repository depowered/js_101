// Question 6
//Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Create a new array that contains all of the above values, but in an
// un-nested format:

// Answer
let flattenedFlintstones = flintstones.flat();
console.log(flattenedFlintstones);

let concatFlintstones = ["Fred", "Wilma"].concat(
  ["Barney", "Betty"], ["Bambam", "Pebbles"]
);
console.log(concatFlintstones);

let spreadFlintstones = [
  ...["Fred", "Wilma"],
  ...["Barney", "Betty"],
  ...["Bambam", "Pebbles"]
];
console.log(spreadFlintstones);

// Launch School Solutions
// With concat and spread
// flintstones = [].concat(...flintstones);

// With reduce
// flintstones = flintstones.reduce((accum, element) => {
//   return accum.concat(element);
// }, []);

// With forEach
// let newFlintstones = [];
// flintstones.forEach(element => {
//   newFlintstones = newFlintstones.concat(element);
// });
// let newFlintstones = flintstones.flat();