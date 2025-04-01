const choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let humanChoice = prompt("Choice: ", "").toLowerCase();

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    }

    else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("Human wins!")
            humanScore++;
        }
        else if (computerChoice === "paper") {
            console.log("Computer wins!")
            computerScore++;
        }
    }

    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("Human wins!")
            humanScore++;
        }
        else if (computerChoice === "scissors") {
            console.log("Computer wins!")
            computerScore++;
        }
    }

    else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log("Human wins!")
            humanScore++;
        }
        else if (computerChoice === "rock") {
            console.log("Computer wins!")
            computerScore++;
        }
    }
}

const rounds = parseInt(prompt("How many rounds? ", ""));

for (let i = 0; i < rounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Human: ${humanSelection}\t Computer: ${computerSelection}`)
    console.log(humanScore);
    console.log(computerScore);
}