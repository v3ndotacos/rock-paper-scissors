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
  const stats = document.createElement("p");
  const result = document.createElement("p");
  const text = document.createElement("p");

  if (humanScore !== 5 && computerScore !== 5) {
    text.textContent = "H: " + humanChoice + " | M: " + computerChoice;
    if (humanChoice === "rock" && computerChoice === "paper") {
      text.textContent = "You lose! Paper beats Rock";
      computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      text.textContent = "You lose! Rock beats Scissors";
      computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      text.textContent = "You lose! Scissors beats Paper";
      computerScore++;
    } else if (humanChoice === computerChoice) text.textContent = "Draw.";
    else {
      text.textContent = "You won!";
      humanScore++;
    }
  }
  if (humanScore === 5 || computerScore === 5) {
    stats.textContent = "Match ended, 5 points: ";
    stats.textContent += `humanScore >> ${humanScore} and computerScore >> ${computerScore}.`;
    humanScore === 5
      ? (result.textContent = "Human won.")
      : (result.textContent = "Computer won.");
    humanScore = 0;
    computerScore = 0;
  }
  container.appendChild(stats);
  container.appendChild(result);
  container.appendChild(text);
}

function playGame() {
  const container = document.querySelector("#container");

  const btnSc = document.createElement("button");
  const btnRk = document.createElement("button");
  const btnPp = document.createElement("button");
  const test = document.createElement("p");
  test.textContent = "Rock-Paper-Scissors game:";
  container.appendChild(test);

  btnSc.textContent = "scissors";
  btnRk.textContent = "rock";
  btnPp.textContent = "paper";

  container.appendChild(btnSc);
  container.appendChild(btnRk);
  container.appendChild(btnPp);

  btnSc.addEventListener("click", () => {
    playRound("scissors", getComputerChoice(Math.floor(Math.random() * 3)));
  });
  btnRk.addEventListener("click", () => {
    playRound("rock", getComputerChoice(Math.floor(Math.random() * 3)));
  });
  btnPp.addEventListener("click", () => {
    playRound("paper", getComputerChoice(Math.floor(Math.random() * 3)));
  });
}

playGame();
