/*
 * Question 8
 * One day, Spot was playing with the Munster family's home computer, and he
 * wrote a small program to mess with their demographic data:
 */

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

// After writing this function, he typed the following code:

messWithDemographics(munsters);

/*
 * Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the
 * family's data get ransacked? Why or why not?
 */

/*
 * Answer
 * The family's data will change.
 *
 * 1. The musters object gets passed into the function by reference.
 * 2. The Object.values() call will return an array of pointers to each
 *    { age: , gender: } sub-object.
 * 3. The forEach() call will iterate through each { age: , gender: }
 *    sub-object, which can be altered because the pointer is still addressed
 *    to the original sub-object.
 */