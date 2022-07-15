const readline = require('readline-sync');
const MESSAGES = require('./loan_messages.json');

function isValidNumericInput(inputString) {
  let num = Number(inputString);
  if (Number.isNaN(num) || num <= 0) {
    return false;
  }
  return true;
}

function getFirstLowerChar(inputString) {
  return inputString.trim().toLowerCase()[0];
}

function isValidTimeUnitInput(inputString) {
  let firstChar = getFirstLowerChar(inputString);
  if (firstChar === 'y' || firstChar === 'm') {
    return true;
  }
  return false;
}

function getAndValidateInputString(question, validationFunction) {
  let input = readline.question(question);
  while (!validationFunction(input)) {
    console.log(MESSAGES['invalidInput']);
    input = readline.question(question);
  }
  return input;
}

function getLoanDurationInMonths(timeUnitInput, loanDurationInput) {
  let firstChar = getFirstLowerChar(timeUnitInput);
  if (firstChar === 'y') {
    return Number(loanDurationInput * 12);
  }
  return Number(loanDurationInput);
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
let loanAmountInput = getAndValidateInputString(MESSAGES['loanAmmount'], isValidNumericInput);

// CONVERT input to integer of cents
let loanAmountInCents = Math.floor(Number(loanAmountInput) * 100);

// GET Annual Percentage Rate (APR) in percent (3.50%) from user
let annualPercentageRateInput = getAndValidateInputString(MESSAGES['annualPercentageRate'], isValidNumericInput);

// CONVERT input to monthly interest rate
let monthlyInterestRate = (parseFloat(annualPercentageRateInput / 100) / 12);

// GET time unit the user wishes to provide the loan duration (years or months)
let timeUnitInput = getAndValidateInputString(MESSAGES['timeUnit'], isValidTimeUnitInput);

// GET loan duration from user
let loanDurationInput = getAndValidateInputString(MESSAGES['loanDuration'], isValidNumericInput);

// CONVERT duration to months if necessary
let loanDurationInMonths = getLoanDurationInMonths(
  timeUnitInput, loanDurationInput
);

// CALCULATE monthly payment
let monthlyPaymentInCents = calcMonthlyPaymentInCents(
  loanAmountInCents, monthlyInterestRate, loanDurationInMonths
);

// PRINT monthlyPaymentInCents to terminal formatted as currency ($123.45)
console.log(`Your monthly loan payment will be $${(monthlyPaymentInCents / 100).toFixed(2)}`);

// END