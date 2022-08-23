/**
 * Question 9
 * Back in the stone age (before CSS), we used spaces to align things on the
 * screen. If we have a 40-character wide table of Flintstone family members,
 * how can we center the following title above the table with spaces?
 */

let title = "Flintstone Family Members";

// Answer
function getCenteredString(string, cellWidth) {
  let paddingLength = Math.floor((cellWidth - string.length) / 2);
  let targetLength = paddingLength + string.length;

  return string.padStart(targetLength);
}

let cellWidth = 40;
let centeredString = getCenteredString(title, cellWidth);

console.log(''.padStart(cellWidth, '-'));
console.log(centeredString);