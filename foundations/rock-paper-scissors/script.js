function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();

    if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors"
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock"
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a tie!"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Paper"
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a tie!"
    }
}

const choiceRock = document.getElementById("button-rock");
const choicePaper = document.getElementById("button-paper");
const choiceScissors = document.getElementById("button-scissors")

choiceRock.addEventListener('click', () => {
    const result = playRound("rock")
    resultDiv.textContent = result
});
choicePaper.addEventListener('click', () => {
    const result = playRound("paper")
    resultDiv.textContent = result
});
choiceScissors.addEventListener('click', () => {
    const result = playRound("scissors")
    resultDiv.textContent = result
});

const resultsContainer = document.getElementById("game-results");
const resultDiv = document.createElement("div");
resultsContainer.appendChild(resultDiv);

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score")

let playerScore = 0;
let computerScore = 0;

function updateScore(result) {
    if (result.includes("Win")) {
        playerScore++;
    }
    else if (result.includes("Lose")) {
        computerScore++;
    }

    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore > computerScore ? "Player" : "Computer";
        alert(`${winner} wins the game!`);
        playerScore = 0;
        computerScore = 0;
    }
}

choiceRock.addEventListener('click', () => {
    const result = playRound("rock");
    resultDiv.textContent = result;
    updateScore(result);
});

choicePaper.addEventListener('click', () => {
    const result = playRound("paper");
    resultDiv.textContent = result;
    updateScore(result);
});

choiceScissors.addEventListener('click', () => {
    const result = playRound("scissors");
    resultDiv.textContent = result;
    updateScore(result);
});