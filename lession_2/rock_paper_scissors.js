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
  },

  getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return 'tie';
    } else if (this['options'][playerChoice]['beats'] === computerChoice) {
      return 'player';
    } else {
      return 'computer';
    }
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

function displayRoundWinner(playerChoice, computerChoice) {
  displayMessage(`You chose ${playerChoice}. Computer chose ${computerChoice}.`);

  if (playerChoice === computerChoice) {
    displayMessage("It's a tie.");
  } else if (RULES['options'][playerChoice]['beats'] === computerChoice) {
    displayMessage('You won!');
  } else {
    displayMessage('Computer won!');
  }
}

function displayScore(score) {
  displayMessage('');
  displayMessage('-----------------------------------------------');
  displayMessage(
    `Scores: Player ${score.player}, Computer ${score.computer}`
  );
  displayMessage('-----------------------------------------------');
  displayMessage('');
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
  let score = { player: 0, computer: 0 };
  let gameOver = false;

  while (!gameOver) {
    displayOptions();
    let input = readAndValidateInput();
    let playerChoice = RULES.getOptionFromString(input);

    let computerChoice = RULES.getRandomOption();

    displayMessage(
      `You chose ${playerChoice}. Computer chose ${computerChoice}.`
    );

    let winner = RULES.getWinner(playerChoice, computerChoice);

    switch (winner) {
      case 'tie':
        displayMessage("This round is a tie.");
        break;
      case 'player':
        displayMessage('You won this round!');
        score.player += 1;
        break;
      case 'computer':
        displayMessage('Computer won this round!');
        score.computer += 1;
        break;
    }

    displayScore(score);

    if (score.player === 3) {
      displayMessage('You won the game!');
      gameOver = true;
    }
    if (score.computer === 3) {
      displayMessage('Computer won the game!');
      gameOver = true;
    }
  }

  displayMessage('Do you want to play again? [y/n]');
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    displayMessage('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
