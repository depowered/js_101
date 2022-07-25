/*
 * Starting with the string:
 *
 * "The Munsters are creepy and spooky.";
 *
 * Return a new string that swaps the case of all of the letters:
 * `tHE mUNSTERS ARE CREEPY AND SPOOKY.`
 */

let munstersDescription = "The Munsters are creepy and spooky.";

// Solution 1
function swapCase(string) {
  let charArray = string.split('');
  let outputArray = [];
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  charArray.forEach(char => {
    if (lowerCaseLetters.includes(char)) {
      outputArray.push(char.toUpperCase());
    } else {
      outputArray.push(char.toLowerCase());
    }
  });

  return outputArray.join('');
}

console.log(swapCase(munstersDescription));

// Solution 2
function swapCaseWithMap(string) {
  let charArray = string.split('');

  let outputArray = charArray.map(char => {
    return (char === char.toLowerCase()) ?
      char.toUpperCase() : char.toLowerCase();
  });

  return outputArray.join('');
}

console.log(swapCaseWithMap(munstersDescription));