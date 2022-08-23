# Assignment Loan Calculator

___

## Requirements

### Inputs:
 - Loan amount
 - Annual Percentage Rate (APR)
 - Loan duration

### Formula:
```javascript
let m = p * (j / (1 - Math.pow((1 + j), (-n))));

// where:
// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months
```

### Output:
Log monthly payment to the console in the format $123.45

___

## Casual Pseudocode

1. Ask the user for the total loan amount, APR, and loan duration.
2. Convert the APR to a monthly interest rate and loan duration to months.
3. Calculate the monthly payment with the provided formula.
4. Print the formatted result to the terminal.

___

## Formal Pseudocode

```
START

GET loan amount in dollars and cents ($123.45) from user
SET loanAmountInCents = input converted to integer of cents

GET Annual Percentage Rate (APR) in percent (3.50%) from user
SET annualPercentageRate = input converted to float
SET monthlyInterestRate = annualPercentageRate / 12

GET time unit the user wishes to provide the loan duration (years or months)
SET loanDurationUnit = first letter of input converted to lowercase

GET loan duration from user
IF loanDurationUnit === 'y'
    SET loanDuration = input * 12
ELSE
    SET loanDuration = input

SET monthlyPaymentInCents = calcMonthlyPayment()

PRINT monthlyPaymentInCents to terminal formatted as currency ($123.45)

END
```