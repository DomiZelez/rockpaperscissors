let userInput = prompt("Choose rock, paper, or scissors.")

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