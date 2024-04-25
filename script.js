"use strict";

const btnRollDice = document.querySelector(".btn--roll");
const btnNewGame = document.querySelector(".btn--new");
const BtnHoldScore = document.querySelector(".btn--hold"); //to hold the score
const player0Name = document.querySelector("name--0");
const player0Score = document.querySelector("score--0");
const player1Name = document.querySelector("name--1");
const player1Score = document.querySelector("score--1");
const CurrentScore = document.querySelectorAll(".current-score");
var currentScore0 = document.getElementById("current--0");

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

var CurrentScore_class = document.getElementsByClassName("current-score");

const dice = document.querySelector(".dice");

dice.classList.add("hidden");

console.log(currentScore0.innerHTML);

//Who plays
let activePlayer = 0;
function switchPlayer() {
  let active_player = 1;
  console.log("Hold Pressed");
  // Remove active class from current active player
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");
  // Switch active player
  if (activePlayer == 0) {
    activePlayer = 1;

    document.querySelector(".");
  } else {
    activePlayer = 0;
  }

  //activePlayer = activePlayer === 0 ? 1 : 0;
  // Add active class to the new active player
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
}

//roll dice

//current_score Reset
function resetScore() {
  document.querySelector(".dice").src = `/dice-5.png`;
  for (let i = 0; i < 2; i++) {
    document.getElementById(`current--${i}`).textContent = 0;
    document.getElementById(`score--${i}`).textContent = 0;
  }
}

//roll dice on click.

btnRollDice.addEventListener("click", function () {
  const randomNum = Math.trunc(Math.random() * 6 + 1);
  document.querySelector(".dice").src = `/dice-${randomNum}.png`;
  console.log(randomNum);
});

//test

//test

btnNewGame.addEventListener("click", resetScore);
BtnHoldScore.addEventListener("click", switchPlayer);
