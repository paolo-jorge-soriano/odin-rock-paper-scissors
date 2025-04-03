// VARIABLES
const buttons = document.querySelectorAll("button");

const choices = ["rock", "paper", "scissors"];
const scoreToWin = 5;
let computerScore = 0;
let humanScore = 0;
let foundWinner = false;

// FUNCTIONS
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
        foundWinner = true;
    }

    else if (computerScore === scoreToWin) {
        alert("Computer wins the game!");
        foundWinner = true;
    }
}

function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
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
    
    if (foundWinner) {
        disableButtons();
    }
}

// DOM
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.value);
    });
});