const readline = require('readline-sync');
const MESSAGES = require('./loan_messages.json');


// ------ Validation Functions ------
function isValidNumericInput(inputString) {
  const num = Number(inputString);
  return !(Number.isNaN(num) || num <= 0);
}

function isValidTimeUnitInput(inputString) {
  return (['m', 'y'].includes(inputString[0]));
}

function isValidRepeatInput(inputString) {
  return (['y', 'n'].includes(inputString[0]));
}
// ------ End Validation Functions ------


function getAndValidateUserInput(prompt, validationFunction) {
  while (true) {
    let input = readline.question(`${prompt}\n=> `).trim().toLowerCase();
    if (input && validationFunction(input)) {
      return input;
    }
    console.log(MESSAGES['invalidInput']);
  }
}

function calcLoanDurationInMonths(timeUnitInput, loanDurationInput) {
  if (timeUnitInput === 'y') {
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


while (true) {
  console.log(MESSAGES['welcome']);

  const loanAmountInput = getAndValidateUserInput(
    MESSAGES['loanAmount'], isValidNumericInput
  );
  const loanAmountInCents = Math.floor(Number(loanAmountInput) * 100);

  const annualPercentageRateInput = getAndValidateUserInput(
    MESSAGES['annualPercentageRate'], isValidNumericInput
  );
  const monthlyInterestRate = (
    parseFloat(annualPercentageRateInput / 100) / 12
  );

  const timeUnitInput = getAndValidateUserInput(
    MESSAGES['timeUnit'], isValidTimeUnitInput
  );
  const loanDurationInput = getAndValidateUserInput(
    MESSAGES['loanDuration'], isValidNumericInput
  );
  const loanDurationInMonths = calcLoanDurationInMonths(
    timeUnitInput, loanDurationInput
  );

  const monthlyPaymentInCents = calcMonthlyPaymentInCents(
    loanAmountInCents, monthlyInterestRate, loanDurationInMonths
  );
  console.log(
    MESSAGES['monthlyPayment'] + (monthlyPaymentInCents / 100).toFixed(2)
  );

  const repeatInput = getAndValidateUserInput(
    MESSAGES['repeat'], isValidRepeatInput
  );
  if (repeatInput[0] === 'n') break;
}