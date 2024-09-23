"use strict";
//
const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
const currentScore0Element = document.getElementById("current--0");
const currentScore1Element = document.getElementById("current--1");
const diceElement = document.querySelector(".dice");
const againElement = document.querySelector(".btn--new");
const rollElement = document.querySelector(".btn--roll");
const holdElement = document.querySelector(".btn--hold");
let currentScore = 0;
let activePlayer = 0;
const score = [0, 0];
//
score0Element.textContent = 0;
score1Element.textContent = 0;
//
const swichPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document.querySelector(`.player--0`).classList.toggle("player--active");
  document.querySelector(`.player--1`).classList.toggle("player--active");
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
};
//
diceElement.classList.add("hidden");
rollElement.addEventListener("click", function () {
  let randomGenerator = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove("hidden");
  diceElement.src = `dice-${randomGenerator}.png`;
  if (randomGenerator === 1) {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--0`).classList.toggle("player--active");
    document.querySelector(`.player--1`).classList.toggle("player--active");
  } else if (randomGenerator !== 1) {
    currentScore += randomGenerator;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});
againElement.addEventListener("click", function () {
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentScore0Element.textContent = 0;
  currentScore1Element.textContent = 0;
  score[0] = 0;
  score[1] = 0;
  currentScore = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  if (activePlayer === 1) {
    document.querySelector(`.player--0`).classList.toggle("player--active");
    document.querySelector(`.player--1`).classList.toggle("player--active");
    activePlayer = 0;
  }
});
holdElement.addEventListener("click", function () {
  score[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  if (score[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player-active");
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;
  } else {
    swichPlayer();
  }
});
