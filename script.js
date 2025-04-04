// DOM
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.value);
    });
});

// VARIABLES
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

function displayLogo(humanChoice, computerChoice) {
    const humanLogo = document.getElementById("human-logo");
    const computerLogo = document.getElementById("computer-logo");

    if (humanChoice === "rock") {
        humanLogo.textContent = String.fromCodePoint(0x1FAA8);
    }
    else if (humanChoice === "paper") {
        humanLogo.textContent = String.fromCodePoint(0x1F4C3);
    }
    else {
        humanLogo.textContent = String.fromCodePoint(0x2702, 0xFE0F);
    }

    if (computerChoice === "rock") {
        computerLogo.textContent = String.fromCodePoint(0x1FAA8);
    }
    else if (computerChoice === "paper") {
        computerLogo.textContent = String.fromCodePoint(0x1F4C3);
    }
    else {
        computerLogo.textContent = String.fromCodePoint(0x2702, 0xFE0F);
    }
}

function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

function playAgain() {
    const mainContainer = document.querySelector(".game-container");
    const playAgainBtn = document.createElement("button");

    playAgainBtn.textContent = "Play again?";
    mainContainer.appendChild(playAgainBtn);

    playAgainBtn.addEventListener("click", () => {
        location.reload();
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
    displayLogo(humanChoice, computerChoice);
    displayWinner();

    if (foundWinner) {
        disableButtons();
        playAgain();
    }
}