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
let vplayer0TScore = 0; //total score
let vplayer1Score = 0;

let vplayer0CScore = 0; //current score
let vplayer1CScore = 0;

var CurrentScore_class = document.getElementsByClassName("current-score");

const dice = document.querySelector(".dice");

dice.classList.add("hidden");

console.log(currentScore0.innerHTML);

//Who plays
let activePlayer = 0;

function switchPlayer() {
  //  ------test to check if switching when starting is 1
  //let active_player = 1;
  console.log("Hold Pressed");
  // Remove active class from current active player
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");
  // Switch active player
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Add active class to the new active player
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
}

//roll dice

//current score function

//On_one function

function current_Score() {}

function resetScore() {
  document.querySelector(".dice").src = `/dice-5.png`;
  activePlayer = 1;
  let vplayer0CScore = 0;
  let vplayer1CScore = 0;
  for (let i = 0; i < 2; i++) {
    document.getElementById(`current--${i}`).textContent = vplayer0CScore;
    document.getElementById(`score--${i}`).textContent = vplayer0CScore;
  }

  switchPlayer();
}

//roll dice on click.

btnRollDice.addEventListener("click", function () {
  let randomNum = Math.trunc(Math.random() * 6 + 1);
  document.querySelector(".dice").src = `/dice-${randomNum}.png`;
  console.log(randomNum);
  if (activePlayer === 0) {
    console.log("player 1 ");
    vplayer0CScore += randomNum;
  } else {
    console.log("player 2 ");
    vplayer1CScore += randomNum;
  }

  document.getElementById("current--0").textContent = vplayer0CScore;
  document.getElementById("current--1").textContent = vplayer1CScore;

  console.log(`player1 current`);
});

//test

//test

btnNewGame.addEventListener("click", resetScore);
BtnHoldScore.addEventListener("click", switchPlayer);
