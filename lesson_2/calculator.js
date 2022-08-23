const readline = require('readline-sync');
const MESSAGES = require("./calculator_messages.json");
const LANGUAGE = 'en';

function message(messageKey, language = LANGUAGE) {
  return MESSAGES[language][messageKey];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trim() === '' || Number.isNaN(Number(number));
}

while (true) {
  prompt(message('welcome'));

  // Ask the user for the first number.
  prompt(message('firstNumber'));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(message('invalidNumber'));
    number1 = readline.question();
  }

  // Ask the user for the second number.
  prompt(message('secondNumber'));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(message('invalidNumber'));
    number2 = readline.question();
  }

  // Ask the user for an operation to perform.
  prompt(message('operationsLine1'));
  prompt(message('operationsLine2'));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(message('invalidOperation'));
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
  prompt(message('repeat'));
  let repeat = readline.question();
  if (repeat === "" || repeat.toLowerCase()[0] !== 'y') {
    break;
  }
}