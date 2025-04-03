const choices = ["rock", "paper", "scissors"];
const scoreToWin = 5;
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function displayScore() {
    document.getElementById("human-score-value").innerHTML = humanScore;
    document.getElementById("computer-score-value").innerHTML = computerScore;
}

function displayWinner() {
    if (humanScore === scoreToWin) {
        alert("Human wins the game!");
    }

    else if (computerScore === scoreToWin) {
        alert("Computer wins the game!");
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        alert("Tie!");
    }

    else if ((humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper")) {
        alert("Human wins!")
        humanScore++;
    }

    else {
        alert("Computer wins!");
        computerScore++;
    }

    displayScore();
    displayWinner();
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.value);
    });
});