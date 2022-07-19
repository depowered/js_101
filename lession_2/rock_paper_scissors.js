const readline = require('readline-sync');

const RULES = {
  rock: {
    validInputs: ['rock', 'r'],
    beats: 'lizard'
  },
  paper: {
    validInputs: ['paper', 'p'],
    beats: 'rock'
  },
  scissors: {
    validInputs: ['scissors', 'sc'],
    beats: 'paper'
  },
  lizard: {
    validInputs: ['lizard', 'l'],
    beats: 'spock'
  },
  spock: {
    validInputs: ['spock', 'sp'],
    beats: 'scissors'
  }
};

const VALID_INPUTS = getAllValidInputs();
const VALID_CHOICES = Object.keys(RULES);

function displayChoiceOptions() {
  displayMessage('Choose one:');
  for (let option of Object.keys(RULES)) {
    let validInputs = RULES[option]['validInputs'];
    displayMessage(`  ${validInputs[0]} (${validInputs[1]})`);
  }
}

function getAllValidInputs() {
  let validInputs = [];
  for (let option of Object.keys(RULES)) {
    validInputs += (RULES[option]['validInputs']);
  }
  return validInputs;
}

function getChoiceFromInputString(inputString) {
  for (let option of Object.keys(RULES)) {
    if (RULES[option]['validInputs'].includes(inputString)) {
      return option;
    }
  }
  return null;
}

function isValidChoice(inputString) {
  return (VALID_INPUTS.includes(inputString));
}

function displayMessage(message) {
  console.log(`=> ${message}`);
}

function displayWinner(playerChoice, computerChoice) {
  displayMessage(`You chose ${playerChoice}. Computer chose ${computerChoice}.`);

  if (playerChoice === computerChoice) {
    displayMessage("It's a tie.");
  } else if (RULES[playerChoice]['beats'] === computerChoice) {
    displayMessage('You won!');
  } else {
    displayMessage('Computer won!');
  }
}

while (true) {
  displayChoiceOptions();
  let input = readline.question().trim().toLocaleLowerCase();

  while (!isValidChoice(input)) {
    displayMessage("That's not a valid choice.");
    input = readline.question().trim().toLocaleLowerCase();
  }

  let playerChoice = getChoiceFromInputString(input);

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(playerChoice, computerChoice);

  displayMessage('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    displayMessage('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
