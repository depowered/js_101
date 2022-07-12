const MESSAGES = require("./calculator_messages.json");

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === '' || Number.isNaN(Number(number));
}

while (true) {
  prompt(MESSAGES['welcome']);

  // Ask the user for the first number.
  prompt(MESSAGES['firstNumber']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['invalidNumber']);
    number1 = readline.question();
  }

  // Ask the user for the second number.
  prompt(MESSAGES['secondNumber']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['invalidNumber']);
    number2 = readline.question();
  }

  // Ask the user for an operation to perform.
  prompt(MESSAGES['operationsLine1']);
  prompt(MESSAGES['operationsLine2']);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['invalidOperation']);
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

  // Ask the user if they would like restart the calculator
  prompt(MESSAGES['repeat']);
  let repeat = readline.question();
  if (repeat === "" || repeat.toLowerCase()[0] !== 'y') {
    break;
  }
}