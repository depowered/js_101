const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
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
prompt('Welcome to our loan calculator!');

// GET loan amount in dollars and cents ($123.45) from user
let loanInput = readline.question('Enter the loan amount:\n$');

// SET loanAmountInCents = input converted to integer of cents
let loanAmountInCents = Math.floor(Number(loanInput) * 100);

// GET Annual Percentage Rate (APR) in percent (3.50%) from user
let annualPercentageRateInput = readline.question('Enter the Annual Percentage Rate (eg 3.25%):\n');

// SET annualPercentageRate = input converted to a decimal ratio (3.25% --> 0.0325)
let annualPercentageRate = parseFloat(annualPercentageRateInput) / 100;

// SET monthlyInterestRate = annualPercentageRate / 12
let monthlyInterestRate = annualPercentageRate / 12;

// GET time unit the user wishes to provide the loan duration (years or months)
let timeUnitInput = readline.question('Do you wish to provide the loan duration in months or years? (m/y):\n');

// SET loanDurationUnit = first letter of input converted to lowercase
let loanDurationUnit = timeUnitInput.trim().toLowerCase()[0];

// GET loan duration from user
let loanDurationInput = readline.question('Enter the loan duration:\n');

// IF loanDurationUnit === 'y'
//     SET loanDuration = input * 12
// ELSE
//     SET loanDuration = input
let loanDurationInMonths;
switch (loanDurationUnit) {
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
prompt(`Your monthly loan payment will be ${(monthlyPaymentInCents / 100).toFixed(2)}`);

// END