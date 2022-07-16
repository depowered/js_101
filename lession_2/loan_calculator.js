const readline = require('readline-sync');
const MESSAGES = require('./loan_messages.json');


// ------ Validation Functions ------
function isValidNumericInput(inputString) {
  const num = Number(inputString);
  return !(Number.isNaN(num) || num <= 0);
}

function isValidTimeUnitInput(inputString) {
  const firstChar = inputString.toLowerCase()[0];
  return (firstChar === 'y' || firstChar === 'm');
}

function isValidRepeatInput(inputString) {
  const firstChar = inputString.toLowerCase()[0];
  return (firstChar === 'y' || firstChar === 'n');
}
// ------ End Validation Functions ------


function getAndValidateUserInput(prompt, validationFunction) {
  while (true) {
    let input = readline.question(`${prompt}\n=> `).trim();
    if (validationFunction(input)) {
      return input;
    }
    console.log(MESSAGES['invalidInput']);
  }
}

function calcLoanDurationInMonths(timeUnitInput, loanDurationInput) {
  const firstChar = timeUnitInput.toLowerCase()[0];
  if (firstChar === 'y') {
    return Number(loanDurationInput * 12);
  }
  return Number(loanDurationInput);
}

function calcMonthlyPaymentInCents(
  loanAmountInCents, monthlyInterestRate, loanDurationInMonths
) {
  const monthlyPaymentInCents = (loanAmountInCents *
    (monthlyInterestRate /
      (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths)))));

  return monthlyPaymentInCents;
}


// ------ Start Main Program ------

while (true) {
  console.log(MESSAGES['welcome']);

  // GET loan amount in dollars and cents ($123.45) from user
  // CONVERT input to integer of cents
  const loanAmountInput = getAndValidateUserInput(
    MESSAGES['loanAmount'],
    isValidNumericInput
  );
  const loanAmountInCents = Math.floor(Number(loanAmountInput) * 100);

  // GET Annual Percentage Rate (APR) in percent (3.50%) from user
  // CONVERT input to monthly interest rate
  const annualPercentageRateInput = getAndValidateUserInput(
    MESSAGES['annualPercentageRate'], isValidNumericInput
  );
  const monthlyInterestRate = (
    parseFloat(annualPercentageRateInput / 100) / 12
  );

  // GET time unit for the loan duration (years or months)
  // GET loan duration from user
  // CONVERT duration to numeric months
  const timeUnitInput = getAndValidateUserInput(
    MESSAGES['timeUnit'], isValidTimeUnitInput
  );
  const loanDurationInput = getAndValidateUserInput(
    MESSAGES['loanDuration'], isValidNumericInput
  );
  const loanDurationInMonths = calcLoanDurationInMonths(
    timeUnitInput, loanDurationInput
  );

  // CALCULATE monthly payment
  // PRINT formatted result to user
  const monthlyPaymentInCents = calcMonthlyPaymentInCents(
    loanAmountInCents, monthlyInterestRate, loanDurationInMonths
  );
  console.log(
    MESSAGES['monthlyPayment'] + (monthlyPaymentInCents / 100).toFixed(2)
  );

  // GET repeat yes / no input from user
  // BREAK loop if first char of repeatInput is not 'y'
  const repeatInput = getAndValidateUserInput(
    MESSAGES['repeat'], isValidRepeatInput
  );
  if (repeatInput.toLowerCase()[0] === 'n') break;
}