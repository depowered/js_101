/**
 * Question 8
 * How can we add the family pet, "Dino", to the following array?
 */

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// Answer
flintstones.push('Dino');
console.log(flintstones);

// Alternative Solutions:
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones = flintstones.concat("Dino");
// flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones[flintstones.length] = "Dino";
// flintstones; // => [ 'fred', 'barney', 'wilma', 'betty', 'bambam', 'pebbles', 'dino' ]