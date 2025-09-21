let humanScore = 0
let computerScore = 0

for (let i = 0; i < 5; i++) {
let userInput = prompt("Choose rock, paper, or scissors.").toLowerCase();

function getHumanChoice(string) {
    if (string == "rock") {
        return "rock";
    } else if (string == "paper") {
       return "paper";
    } else if (string == "scissors") { 
       return "scissors";
    } else {
        return "Invalid"
    }
}
console.log(getHumanChoice(userInput))

let choice = Math.floor(Math.random()*3);

function getComputerChoice(number) {
    if (number == 0) {
        return "rock";
    } else if (number == 1) {
       return "paper";
    } else {
       return "scissors";
    }
}

console.log(getComputerChoice(choice))

let humanChoice = getHumanChoice(userInput);
let computerChoice = getComputerChoice(choice);

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
        return "You lose!";
    } else if (humanChoice == "rock" && computerChoice == "rock") {
        return "It's a tie!";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1;
        return "You win!";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        return "You lose!";
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        return "It's a tie!";
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1;
        return "You win!";
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        return "You lose!";
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        return "It's a tie!";
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1;
        return "You win!";
    }
    }

console.log(playRound(humanChoice, computerChoice))

console.log(humanScore + " : " + computerScore)
}

function gameResults (humanScore, computerScore) {
    if (humanScore > computerScore) {
        return "WINNER!";
    } else if (humanScore < computerScore) {
        return "GAME OVER! YOU LOST!"
    } else {
        return "GAME OVER! IT'S A TIE!"
    }
}

console.log(gameResults(humanScore, computerScore))