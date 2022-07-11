const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

// Ask the user for the first number.
prompt('What is the first number?');
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt('Input provided is not a valid number. Please try again.');
  number1 = readline.question();
}

// Ask the user for the second number.
prompt('What is the second number?');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt('Input provided is not a valid number. Please try again.');
  number2 = readline.question();
}

// Ask the user for an operation to perform.
prompt('What operation would you like to preform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Input provided is not 1, 2, 3, or 4. Please try again.');
  operation = readline.question();
}

// Perform the operation on the two numbers.
let output;

switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

// Print the result to the terminal.
prompt(`The result is: ${output}`);