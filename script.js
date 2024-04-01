const choices = ["rock", "paper", "scissors"];
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const winsDisplay = document.getElementById("wins");
const tiesDisplay = document.getElementById("ties");
const lossesDisplay = document.getElementById("losses");

let wins = 0;
let losses = 0;
let ties = 0;

function playGame(playerChoice) {
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];
  computerChoiceDisplay.textContent = computerChoice;

  if (playerChoice === computerChoice) {
    resultDisplay.textContent = "Draw!";
    ties++;
    tiesDisplay.textContent = ties;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultDisplay.textContent = "You Win!";
    wins++;
    winsDisplay.textContent = wins;
  } else {
    resultDisplay.textContent = "You Lose!";
    losses++;
    lossesDisplay.textContent = losses;
  }
}

rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));
