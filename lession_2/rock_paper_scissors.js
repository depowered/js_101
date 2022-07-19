const readline = require('readline-sync');

const RULES = {
  options: {
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
  },

  getAllOptions() {
    return Object.keys(this.options);
  },

  getValidInputsList() {
    let validInputs = [];
    for (let option of this.getAllOptions()) {
      validInputs += (this['options'][option]['validInputs']);
    }
    return validInputs;
  },

  isValidInput(inputString) {
    return (this.getValidInputsList().includes(inputString));
  },

  getOptionFromString(inputString) {
    for (const option in RULES.options) {
      if (RULES['options'][option]['validInputs'].includes(inputString)) {
        return option;
      }
    }
    return null;
  },

  getRandomOption() {
    let randomIndex = Math.floor(Math.random() * this.getAllOptions().length);
    return this.getAllOptions()[randomIndex];
  }
};

function displayOptions() {
  displayMessage('Choose one:');
  for (let option of RULES.getAllOptions()) {
    let validInputs = RULES['options'][option]['validInputs'];
    displayMessage(`  ${validInputs[0]} (${validInputs[1]})`);
  }
}

function displayMessage(message) {
  console.log(`=> ${message}`);
}

function displayWinner(playerChoice, computerChoice) {
  displayMessage(`You chose ${playerChoice}. Computer chose ${computerChoice}.`);

  if (playerChoice === computerChoice) {
    displayMessage("It's a tie.");
  } else if (RULES['options'][playerChoice]['beats'] === computerChoice) {
    displayMessage('You won!');
  } else {
    displayMessage('Computer won!');
  }
}

function readAndValidateInput() {
  while (true) {
    let input = readline.question().trim().toLowerCase();

    if (RULES.isValidInput(input)) {
      return input;
    } else {
      displayMessage("That's not a valid input");
    }
  }
}

while (true) {
  displayOptions();
  let input = readAndValidateInput();
  let playerChoice = RULES.getOptionFromString(input);

  let computerChoice = RULES.getRandomOption();

  displayWinner(playerChoice, computerChoice);

  displayMessage('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    displayMessage('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
