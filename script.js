// Function that randomly returns "Rock", "Paper", or "Scissors".

const computerPlay = () => {
    const options = ["Rock", "Paper", "Scissors"];
    // choose a random random between 1 and 3
    const random = Math.floor(Math.random() * 3);
    // get the random number and return the corresponding element from the array
    return options[random];
}






const playRound = (playerSelection) => {
    const computerSelection = computerPlay();
    // if the player and computer select the same thing, it's a tie
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    // if the player selects rock and the computer selects scissors, the player wins
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win!";
    }
    // if the player selects paper and the computer selects rock, the player wins
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win!";
    }
    // if the player selects scissors and the computer selects paper, the player wins
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win!";
    }
    //Else the computer wins
    else {
        return "You lose!";
    }
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerChoosed = document.getElementById("player-choosed-item");
const computerChoosed = document.getElementById("computer-choosed-item");





// Player clicks on a button to select rock, paper, or scissors.
// The computer randomly selects rock, paper, or scissors.
// The winner is displayed.
rock.addEventListener("click", () => {
    
    const result = playRound("Rock");
    const ends = gameEnd();
    playerChoosed.textContent = "You chose Rock";
    if (result === "You win!") {
        playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
        computerChoosed.innerHTML = "Computer chose Scissors";
    } else if (result === "You lose!") {
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
        computerChoosed.innerHTML = "Computer chose Paper";
    }
});

scissors.addEventListener("click", () => {
    const result = playRound("Scissors");
    const ends = gameEnd();
    playerChoosed.textContent = "You chose Scissors";
    if (result === "You win!") {
        playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
        computerChoosed.innerHTML = "Computer chose Paper";
    } else if (result === "You lose!") {
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
        computerChoosed.innerHTML = "Computer chose Rock";
    }
});

paper.addEventListener("click", () => {
    const result = playRound("Paper");
    const ends = gameEnd();
    playerChoosed.textContent = "You chose Paper";
    if (result === "You win!") {
        playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
        computerChoosed.innerHTML = "Computer chose Rock";
    } else if (result === "You lose!") {
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
        computerChoosed.innerHTML = "Computer chose Scissors";
    }
});

// First to 5 wins
// If the player or computer reaches 5 wins, the game ends and it displays who won then reset the score.

const gameEnd = () => {
    if (parseInt(playerScore.innerHTML) === 5) {
        playerScore.innerHTML = 0;
        computerScore.innerHTML = 0;
        playerChoosed.innerHTML = "";
        computerChoosed.innerHTML = "";
        alert("You win!");
    } else if (parseInt(computerScore.innerHTML) === 5) {
        playerScore.innerHTML = 0;
        computerScore.innerHTML = 0;
        playerChoosed.innerHTML = "";
        computerChoosed.innerHTML = "";
        alert("You lose!");
    }
}