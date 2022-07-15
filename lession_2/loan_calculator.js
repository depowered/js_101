const readline = require('readline-sync');
const MESSAGES = require('./loan_messages.json');


// ------ Validation Functions ------
function isValidNumericInput(inputString) {
  let num = Number(inputString);
  return !(Number.isNaN(num) || num <= 0);
}

function isValidTimeUnitInput(inputString) {
  let firstChar = inputString.toLowerCase()[0];
  return (firstChar === 'y' || firstChar === 'm');
}

function isValidRepeatInput(inputString) {
  let firstChar = inputString.toLowerCase()[0];
  return (firstChar === 'y' || firstChar === 'n');
}
// ------ End Validation Functions ------


function getAndValidateUserInput(prompt, validationFunction) {
  let input = readline.question(`${prompt}\n=> `).trim();
  while (!validationFunction(input)) {
    console.log(MESSAGES['invalidInput']);
    input = readline.question(`${prompt}\n=> `);
  }
  return input;
}

function calcLoanDurationInMonths(timeUnitInput, loanDurationInput) {
  let firstChar = timeUnitInput.toLowerCase()[0];
  if (firstChar === 'y') {
    return Number(loanDurationInput * 12);
  }
  return Number(loanDurationInput);
}

function calcMonthlyPaymentInCents(
  loanAmountInCents, monthlyInterestRate, loanDurationInMonths
) {
  let monthlyPaymentInCents = (loanAmountInCents *
    (monthlyInterestRate /
      (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths)))));

  return monthlyPaymentInCents;
}


// ------ START Main Program ------
let continueCalculation = true;

while (continueCalculation) {
  console.log(MESSAGES['welcome']);

  // GET loan amount in dollars and cents ($123.45) from user
  // CONVERT input to integer of cents
  let loanAmountInput = getAndValidateUserInput(MESSAGES['loanAmount'], isValidNumericInput);
  let loanAmountInCents = Math.floor(Number(loanAmountInput) * 100);

  // GET Annual Percentage Rate (APR) in percent (3.50%) from user
  // CONVERT input to monthly interest rate
  let annualPercentageRateInput = getAndValidateUserInput(MESSAGES['annualPercentageRate'], isValidNumericInput);
  let monthlyInterestRate = (parseFloat(annualPercentageRateInput / 100) / 12);

  // GET time unit for the loan duration (years or months)
  // GET loan duration from user
  // CONVERT duration to numeric months
  let timeUnitInput = getAndValidateUserInput(MESSAGES['timeUnit'], isValidTimeUnitInput);
  let loanDurationInput = getAndValidateUserInput(MESSAGES['loanDuration'], isValidNumericInput);
  let loanDurationInMonths = calcLoanDurationInMonths(
    timeUnitInput, loanDurationInput
  );

  // CALCULATE monthly payment
  // PRINT formatted result to user
  let monthlyPaymentInCents = calcMonthlyPaymentInCents(
    loanAmountInCents, monthlyInterestRate, loanDurationInMonths
  );
  console.log(`Your monthly loan payment will be $${(monthlyPaymentInCents / 100).toFixed(2)}`);

  // GET repeat yes / no input from user
  // BREAK loop if first char of repeatInput is not 'y'
  let repeatInput = getAndValidateUserInput(MESSAGES['repeat'], isValidRepeatInput);
  continueCalculation = (repeatInput.toLowerCase()[0] === 'y');
}
// ------ END Main Program ------