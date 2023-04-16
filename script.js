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
    console.log(computerChoice);
  return computerChoice;
}
getComputerChoice();

function getPlayerChoice() {
    const playerInput = prompt("What is your weapon? ").toLowerCase();
    console.log(playerInput);
    return playerInput;
}


function theGame (getComputerChoice, getPlayerChoice) {
    if (getComputerChoice === "rock" && getPlayerChoice === "rock") {
        console.log("tie");
    } else if (getComputerChoice === "rock" && getPlayerChoice === "paper") {
        console.log("You Lose");
    } else {
        console.log("you win")
    }
}

function theRound(rounds) {
    for (let i = 0; i < rounds; i++) {
        getComputerChoice();
        getPlayerChoice();
        theGame();
    }
}

theRound(5);