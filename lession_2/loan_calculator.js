const readline = require('readline-sync');
const MESSAGES = require('./loan_messages.json');

function isValidNumericInput(inputString) {
  let num = Number(inputString);

  if (Number.isNaN(num)) { // Verify the input can be coerced to a number
    return false;
  } else if (num <= 0) { // Verify the input is positive and not zero
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

function calcMonthlyPaymentInCents(
  loanAmountInCents, monthlyInterestRate, loanDurationInMonths
) {
  let monthlyPaymentInCents = (
    loanAmountInCents * (
      monthlyInterestRate / (
        1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))
      )
    )
  );

  return monthlyPaymentInCents;
}

// START
console.log(MESSAGES['welcome']);

// GET loan amount in dollars and cents ($123.45) from user
let loanAmountInput = readline.question(MESSAGES['loanAmmount']);
while (!isValidNumericInput(loanAmountInput)) {
  console.log(MESSAGES['invalidInput']);
  loanAmountInput = readline.question(MESSAGES['loanAmmount']);
}

// CONVERT input to integer of cents
let loanAmountInCents = Math.floor(Number(loanAmountInput) * 100);

// GET Annual Percentage Rate (APR) in percent (3.50%) from user
let annualPercentageRateInput = readline.question(MESSAGES['annualPercentageRate']);
while (!isValidNumericInput(annualPercentageRateInput)) {
  console.log(MESSAGES['invalidInput']);
  annualPercentageRateInput = readline.question(MESSAGES['annualPercentageRate']);
}

// CONVERT input to ratio between 0 and 1
let annualPercentageRate = parseFloat(annualPercentageRateInput) / 100;

// CONVERT yearly rate to monthly rate
let monthlyInterestRate = annualPercentageRate / 12;

// GET time unit the user wishes to provide the loan duration (years or months)
let timeUnitInput = readline.question(MESSAGES['timeUnit']);

// CONVERT input to one letter string
let firstChar = timeUnitInput.trim().toLowerCase()[0];
while (!isValidTimeUnitInput(firstChar)) {
  console.log(MESSAGES['invalidInput']);
  timeUnitInput = readline.question(MESSAGES['timeUnit']);
  firstChar = timeUnitInput.trim().toLowerCase()[0];
}

// GET loan duration from user
let loanDurationInput = readline.question(MESSAGES['loanDuration']);
while (!isValidNumericInput(loanDurationInput)) {
  console.log(MESSAGES['invalidInput']);
  loanDurationInput = readline.question(MESSAGES['loanDuration']);
}

// CONVERT duration to months if necessary
let loanDurationInMonths;
switch (firstChar) {
  case 'y':
    loanDurationInMonths = Number(loanDurationInput * 12);
    break;
  case 'm':
    loanDurationInMonths = Number(loanDurationInput);
    break;
}

// CALCULATE monthly payment
let monthlyPaymentInCents = calcMonthlyPaymentInCents(
  loanAmountInCents, monthlyInterestRate, loanDurationInMonths
);

// PRINT monthlyPaymentInCents to terminal formatted as currency ($123.45)
console.log(`Your monthly loan payment will be $${(monthlyPaymentInCents / 100).toFixed(2)}`);

// END