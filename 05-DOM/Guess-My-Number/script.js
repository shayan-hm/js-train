const randomNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = randomNumber;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number!";
  } else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "afarin badbakht";
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "kame badbakht";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "bakhti badbakht";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "ziade badbakht";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "bakhti badbakht";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
});
