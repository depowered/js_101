const readline = require('readline-sync');
const MESSAGES = require('./loan_messages.json');


// ------ Validation Functions ------
function isValidLoanAmount(inputString) {
  const num = Number(inputString);
  return (!Number.isNaN(num) && num > 0);
}

function isValidAPR(inputString) {
  const num = Number(inputString);
  return (!Number.isNaN(num) && num >= 0);
}

function isValidDuration(inputString) {
  const num = Number(inputString);
  return (Number.isInteger(num) && num >= 0);
}

function isValidTimeUnit(inputString) {
  return (['m', 'months', 'y', 'years'].includes(inputString));
}

function isValidRepeat(inputString) {
  return (['y', 'yes', 'n', 'no'].includes(inputString[0]));
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

function calcLoanAmountInCents(loanAmountInput) {
  return Math.floor(Number(loanAmountInput) * 100);
}

function calcLoanDurationInMonths(timeUnitInput, loanDurationInput) {
  if (timeUnitInput === 'y') {
    return Number(loanDurationInput * 12);
  }
  return Number(loanDurationInput);
}

function calcMonthlyInterestRate(annualPercentageRate) {
  if (annualPercentageRate === '0') {
    return 0;
  }
  return parseFloat(annualPercentageRate / 100) / 12;
}

function calcMonthlyPaymentInCents(
  loanAmountInCents, monthlyInterestRate, loanDurationInMonths
) {
  if (monthlyInterestRate === 0) {
    return (loanAmountInCents / loanDurationInMonths);
  }

  const monthlyPaymentInCents = (loanAmountInCents *
    (monthlyInterestRate /
      (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths)))));

  return monthlyPaymentInCents;
}

function continueLoop(repeatInput) {
  return ['y', 'yes'].includes(repeatInput);
}


while (true) {
  console.log(MESSAGES['welcome']);

  const loanAmountInput = getAndValidateUserInput(
    MESSAGES['loanAmount'], isValidLoanAmount
  );
  const loanAmountInCents = calcLoanAmountInCents(loanAmountInput);

  const annualPercentageRateInput = getAndValidateUserInput(
    MESSAGES['annualPercentageRate'], isValidAPR
  );
  const monthlyInterestRate = calcMonthlyInterestRate(
    annualPercentageRateInput
  );

  const timeUnitInput = getAndValidateUserInput(
    MESSAGES['timeUnit'], isValidTimeUnit
  );
  const loanDurationInput = getAndValidateUserInput(
    MESSAGES['loanDuration'], isValidDuration
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
    MESSAGES['repeat'], isValidRepeat
  );
  if (!continueLoop(repeatInput)) break;
}