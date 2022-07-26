/**
 * Will the following functions return the same results?
 */

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return // JS will insert a semicolon (;) at the end of this line, returning undefined
  {
    prop1: "hi there"
  };
}

console.log(first()); // { porp1: 'hi there' }
console.log(second()); // undefined

// Answer
// No, see comments above