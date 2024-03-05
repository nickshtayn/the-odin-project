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
        return "You Lost! Paper beats Rock"
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
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let round = 0; round < 5; round++) {
        let playerSelection = prompt("What's your choice?")
        let computerSelection = getComputerChoice()
        let result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (result.includes("Win")) {
            playerScore++;
        }
        else if (result.includes("Lose")){
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("Player wins the game!");
    }
    else
    console.log("Computer wins the game!");
}

playGame()