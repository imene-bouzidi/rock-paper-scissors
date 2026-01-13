let humanScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    resultDiv.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      resultDiv.textContent += " 🎉 You won the game!";
    } else {
      resultDiv.textContent += " 💻 Computer won the game!";
    }

    buttons.forEach(button => button.disabled = true);
  }
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});
