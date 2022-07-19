const readline = require('readline-sync');

const KEY_BEATS_VALUE = {
  rock: "lizard",
  paper: "rock",
  scisors: "paper",
  lizard: "spock",
  spock: "scisors"
};

const VALID_CHOICES = Object.keys(KEY_BEATS_VALUE);

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

  if (choice === computerChoice) {
    prompt("It's a tie.");
  } else if (KEY_BEATS_VALUE[choice] === computerChoice) {
    prompt('You won!');
  } else {
    prompt('Computer won!');
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
