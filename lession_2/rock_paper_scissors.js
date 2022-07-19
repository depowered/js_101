const readline = require('readline-sync');

const RULES = {
  rock: {
    fullName: 'rock',
    abbreviation: 'r',
    beats: 'lizard'
  },
  paper: {
    fullName: 'paper',
    abbreviation: 'p',
    beats: 'rock'
  },
  scissors: {
    fullName: 'scissors',
    abbreviation: 'sc',
    beats: 'paper'
  },
  lizard: {
    fullName: 'lizard',
    abbreviation: 'l',
    beats: 'spock'
  },
  spock: {
    fullName: 'spock',
    abbreviation: 'sp',
    beats: 'scissors'
  }
};

const CHOICE_ABBREVIATIONS = {
  r: "rock",
  p: "paper",
  sc: "scissors",
  l: "lizard",
  sp: "spock"
};

const VALID_CHOICES = Object.keys(RULES);
const VALID_ABBREVIATIONS = Object.keys(CHOICE_ABBREVIATIONS);

function displayChoiceOptions() {
  prompt('Chose one:');
  for (let [key, value] of Object.entries(RULES)) {
    prompt(`  ${key} (${value.abbreviation})`);
  }
}

function getChoiceFromInputString(inputString) {
  if (VALID_CHOICES.includes(inputString)) {
    return inputString;
  } else if (VALID_ABBREVIATIONS.includes(inputString)) {
    return CHOICE_ABBREVIATIONS[inputString];
  } else {
    return null;
  }
}

function isValidChoice(inputString) {
  return (VALID_CHOICES.includes(inputString) ||
    VALID_ABBREVIATIONS.includes(inputString));
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(playerChoice, computerChoice) {
  prompt(`You chose ${playerChoice}. Computer chose ${computerChoice}.`);

  if (playerChoice === computerChoice) {
    prompt("It's a tie.");
  } else if (RULES[playerChoice]['beats'] === computerChoice) {
    prompt('You won!');
  } else {
    prompt('Computer won!');
  }
}

while (true) {
  displayChoiceOptions();
  let input = readline.question().trim().toLocaleLowerCase();

  while (!isValidChoice(input)) {
    prompt("That's not a valid choice.");
    input = readline.question().trim().toLocaleLowerCase();
  }

  let playerChoice = getChoiceFromInputString(input);

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(playerChoice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
