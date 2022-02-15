// Function that randomly returns "Rock", "Paper", or "Scissors".

const computerPlay = () => {
    const options = ["Rock", "Paper", "Scissors"];
    // choose a random random between 1 and 3
    const random = Math.floor(Math.random() * 3);
    // get the random number and return the corresponding element from the array
    return options[random];
}

// Play one round of Rock, Paper, Scissors with the computer.
const playRound = (playerSelection, computerSelection) => {
    // playerSelection is a string that is either "Rock", "Paper", or "Scissors" and non case sensitive.
    let playerSelectionLower = playerSelection.toLowerCase();
    let computerSelectionLower = computerSelection.toLowerCase();
    if(playerSelectionLower === computerSelectionLower) {
        return "It's a tie!";
    }
    if(playerSelectionLower === "rock" && computerSelectionLower === "paper") {
        return "You lose! Paper beats Rock.";
    }
    if (playerSelectionLower === "rock" && computerSelectionLower === "scissors") {
        return "You win! Rock beats Scissors.";
    }

    if (playerSelectionLower === "paper" && computerSelectionLower === "rock") {
        return "You win! Paper beats Rock.";
    }

    if (playerSelectionLower === "paper" && computerSelectionLower === "scissors") {
        return "You lose! Scissors beats Paper.";
    }

    if (playerSelectionLower === "scissors" && computerSelectionLower === "rock") {
        return "You lose! Rock beats Scissors.";
    }
}


// Test computerPlay function.

const testcomputerPlay = () => {
    console.log(computerPlay());
}

// game function with playRound and computerPlay and first player who collects 5 points wins.

const game = (playerSelection, computerSelection) => {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(playerSelection, computerSelection);
        if (result === "You win! Rock beats Scissors.") {
            playerScore++;
        }
        else if (result === "You win! Paper beats Rock.") {
            playerScore++;
        }
        else if (result === "You win! Scissors beats Paper.") {
            playerScore++;
        }
        else if (result === "You lose! Paper beats Rock.") {
            computerScore++;
        }
        else if (result === "You lose! Rock beats Scissors.") {
            computerScore++;
        }
        else if (result === "You lose! Scissors beats Paper.") {
            computerScore++;
        }
        else if (result === "It's a tie!") {
            continue;
        }
    }
    if (playerScore > computerScore) {
        return "You win!";
    }
    else if (playerScore < computerScore) {
        return "You lose!";
    }
    else {
        return "It's a tie!";
    }
}


// Test game function.

const testgame = () => {
    let playerSelection = "Rock";
    let computerSelection = computerPlay();
    console.log(game(playerSelection, computerSelection));
}