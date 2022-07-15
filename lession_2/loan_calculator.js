const readline = require('readline-sync');
const MESSAGES = require('./loan_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isValidNumericInput(inputString) {
  let num = Number(inputString);

  // Verify the input can be coerced to a number
  if (Number.isNaN(num)) {
    return false;
  }

  // Verify the input is positive and not zero
  if (num <= 0) {
    return false;
  }

  return true;
}

function isValidTimeUnitInput(firstChar) {
  if (firstChar === 'y' || firstChar === 'm') {
    return true;
  }
  return false;
}

function calcMonthlyPaymentInCents(loanAmountInCents, monthlyInterestRate, loanDurationInMonths) {
  let monthlyPaymentInCents = (
    loanAmountInCents * (
      monthlyInterestRate / (
        1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))
      )
    )
  );

  return monthlyPaymentInCents;
}

// Welcome user
console.log(MESSAGES['welcome']);

// GET loan amount in dollars and cents ($123.45) from user
let loanAmountInput = readline.question(MESSAGES['loanAmmount']);
while (!isValidNumericInput(loanAmountInput)) {
  prompt(MESSAGES['invalidInput']);
  loanAmountInput = readline.question(MESSAGES['loanAmmount']);
}

// SET loanAmountInCents = input converted to integer of cents
let loanAmountInCents = Math.floor(Number(loanAmountInput) * 100);

// GET Annual Percentage Rate (APR) in percent (3.50%) from user
let annualPercentageRateInput = readline.question(MESSAGES['annualPercentageRate']);
while (!isValidNumericInput(annualPercentageRateInput)) {
  prompt(MESSAGES['invalidInput']);
  annualPercentageRateInput = readline.question(MESSAGES['annualPercentageRate']);
}

// SET annualPercentageRate = input converted to a decimal ratio (3.25% --> 0.0325)
let annualPercentageRate = parseFloat(annualPercentageRateInput) / 100;

// SET monthlyInterestRate = annualPercentageRate / 12
let monthlyInterestRate = annualPercentageRate / 12;

// GET time unit the user wishes to provide the loan duration (years or months)
let timeUnitInput = readline.question(MESSAGES['timeUnit']);

// SET loanDurationUnit = first letter of input converted to lowercase
let firstChar = timeUnitInput.trim().toLowerCase()[0];
while (!isValidTimeUnitInput(firstChar)) {
  prompt(MESSAGES['invalidInput']);
  timeUnitInput = readline.question(MESSAGES['timeUnit']);
  firstChar = timeUnitInput.trim().toLowerCase()[0];
}

// GET loan duration from user
let loanDurationInput = readline.question(MESSAGES['loanDuration']);
while (!isValidNumericInput(loanDurationInput)) {
  prompt(MESSAGES['invalidInput']);
  loanDurationInput = readline.question(MESSAGES['loanDuration']);
}

// IF loanDurationUnit === 'y'
//     SET loanDuration = input * 12
// ELSE
//     SET loanDuration = input
let loanDurationInMonths;
switch (firstChar) {
  case 'y':
    loanDurationInMonths = Number(loanDurationInput * 12);
    break;
  case 'm':
    loanDurationInMonths = Number(loanDurationInput);
    break;
}

// SET monthlyPaymentInCents = calcMonthlyPayment()
let monthlyPaymentInCents = calcMonthlyPaymentInCents(loanAmountInCents, monthlyInterestRate, loanDurationInMonths);

// PRINT monthlyPaymentInCents to terminal formatted as currency ($123.45)
console.log(`Your monthly loan payment will be $${(monthlyPaymentInCents / 100).toFixed(2)}`);

// END