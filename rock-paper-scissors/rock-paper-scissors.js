let computerMove;

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function robotMoveGenerator() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}

function displayResult(user, result) {
  // console.log("My move: " + user);
  // console.log("Robot move: " + computerMove);
  // console.log(result);
  updateScore(result);
  let displayMessage = `You picked ${user}. Computer picked ${computerMove}.`;

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `You
<img src="images/${user}-emoji.png" class="move-icon" alt="None" />
<img src="images/${computerMove}-emoji.png" class="move-icon" alt="None" />
Computer`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function updateScore(result) {
  if (result === "You win!") {
    score.wins++;
  } else if (result === "You lose!") {
    score.losses++;
  } else {
    score.ties++;
  }
  // saving to local storage
  // it only supports strings
  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  updateScoreElement();
}

function play(userMove) {
  computerMove = robotMoveGenerator();
  let result = "";
  if (computerMove === userMove) {
    result = "Tie!";
    displayResult(userMove, result);
  } else if (userMove === "rock") {
    if (computerMove === "paper") {
      result = "You lose!";
      displayResult(userMove, result);
    } else {
      result = "You win!";
      displayResult(userMove, result);
    }
  } else if (userMove === "paper") {
    if (computerMove === "rock") {
      result = "You win!";
      displayResult(userMove, result);
    } else {
      result = "You lose!";
      displayResult(userMove, result);
    }
  } else {
    if (computerMove === "paper") {
      result = "You win!";
      displayResult(userMove, result);
    } else {
      result = "You lose!";
      displayResult(userMove, result);
    }
  }
}
