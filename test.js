let humanScore = 0;
let computerScore = 0;

function getComputerChoice(randomNumber) {
  console.log("test computer choice es: " + randomNumber);
  console.log(randomNumber);
  switch (randomNumber) {
    case 0:
      return "scissors";
    case 1:
      return "rock";
    case 2:
      return "paper";
  }
}

function getHumanChoice(input) {
  console.log("test human choice es: " + input);
  switch (input.toLowerCase()) {
    case "scissors":
      return "scissors";
    case "rock":
      return "rock";
    default:
      return "paper";
  }
}

function playRound(humanChoice, computerChoice) {
  console.log("test h y c es " + humanChoice + " y " + computerChoice);
  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore++;
  } else if (humanChoice === computerChoice) console.log("Draw");
  else {
    console.log("You won!");
    humanScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(
      getHumanChoice(prompt("insertar")),
      getComputerChoice(Math.floor(Math.random() * 3))
    );
    console.log("H: " + humanScore + "C: " + computerScore);
  }
}

playGame();
