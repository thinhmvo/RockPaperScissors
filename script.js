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




function theGame(getComputerChoice, getPlayerChoice) {
  switch (getPlayerChoice) {
    case "rock":
      console.log("Computer choice: ", getComputerChoice);
      console.log("Player choice: ", getPlayerChoice);
      console.log("Comparison:", getComputerChoice === getPlayerChoice);
      if (getComputerChoice === getPlayerChoice) {
        return "Tie";
      } else if (getComputerChoice === "paper") {
        return "You lose";
      } else {
        return "You win";
      }

      break;

    case "paper":
      if (getComputerChoice === getPlayerChoice) {
        return "Tie";
      } else if (getComputerChoice === "scissors") {
        return "You Lose";
      } else {
        return "You Win";
      }
      break;
    case "scissors":
      if (getComputerChoice === getPlayerChoice) {
        return "Tie";
      } else if (getComputerChoice === "rock") {
        return "You Lose";
      } else {
        return "You Win";
      }
      break;
  }
}
/*
const numerOfGame = parseInt(prompt("How many rounds would you like to play?"));
function gameTurn(numerOfGame) {
  for (let i = 0; i < numerOfGame; i++) {
    console.log(theGame(getComputerChoice(), getPlayerChoice()));
  }
}
*/
const rockBtn = document.querySelector('#p-rock');

rockBtn.addEventListener('click', () => {
  let getPlayerChoice = 'rock';
  return console.log(theGame(getComputerChoice(), getPlayerChoice));
});

