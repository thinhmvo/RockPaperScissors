console.log("hello world!");

/*
Create a rock paper scissor game 
- get computer choice function
- get player choice function
- compare between the two choices
- 5 rounds - loop

*/

/* Function for computer choice. Using Math.random() to generae a random number between 0 - 1 then multiply it with the length of the choices[array]
which will then generate a random number. then use Math.floor to get the number and select the item in the position of the array.
*/

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}
console.log(getComputerChoice());
const getPlayerChoice = prompt("What do you choose?").toLowerCase();



function theGame (getComputerChoice, getPlayerChoice) {
    switch (getPlayerChoice) {
        case "rock":
            if(getComputerChoice === "rock") {
                return("Tie");
            } else if (getComputerChoice === "paper") {
                return("You Win");
            } else {
                return("You Lose");
            }
            break;
        
        case "paper": 
        if(getComputerChoice === "paper") {
            return("Tie");
        } else if (getComputerChoice === "scissors") {
            return("You Win");
        } else {
            return("You Lose");
        }
        break;
        case "scissors":
            if(getComputerChoice === "scissors") {
                return("Tie");
            } else if (getComputerChoice === "rock") {
                return("You Win");
            } else {
                return("You lose");
            }
            break;
    }
}

console.log(theGame(getComputerChoice, getPlayerChoice));