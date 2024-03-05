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
console.log(playRound("Rock"))
function playGame() {
    // let playerScore = 0
    // let computerScore = 0
    // playRound() x5
    // if result "player" return playerScore =+1
    // if result "computer" return computerScore =+1
    // if result "tie" return playerScore = playerScore && computerScore = computerScore
    // return winner of playGame() 
}