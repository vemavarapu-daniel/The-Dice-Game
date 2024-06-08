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
var currentScore1=  document.getElementById("current--1");
var Score0 = document.getElementById("score--0");
var Score1 = document.getElementById("score--1");

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
let vplayer0TScore = 0; //total score
let vplayer1TScore = 0;
let vplayer0CScore = 0; //current score
let vplayer1CScore = 0;

var CurrentScore_class = document.getElementsByClassName("current-score");

const dice = document.querySelector(".dice");

dice.classList.add("hidden");

//console.log(currentScore0.innerHTML);

//Who plays
let activePlayer = 0;

function switchPlayer() {

  console.log("Hold Pressed");

  Score0.textContent = vplayer0TScore //updating total score
  Score1.textContent = vplayer1TScore //updating total score
 

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

//On_one function

function onHold() {

 if (activePlayer === 0) {
    vplayer0TScore += vplayer0CScore;
    vplayer0CScore = 0; // Reset current score to 0 on hold
  } else {
    vplayer1TScore += vplayer1CScore;
    vplayer1CScore = 0; // Reset current score to 0 on hold
  }

  console.log(vplayer0CScore);
  console.log(vplayer0TScore);

  currentScore0.textContent = vplayer0CScore; // Update displayed current score to 0 
  currentScore1.textContent = vplayer1CScore; // Update displayed current score to 0

  console.log(
    `total score 1- ${vplayer0TScore} ,, tota score 2 - ${vplayer1TScore}`
  );

  switchPlayer();

 
}

function resetScore() {
  document.querySelector(".dice").src = `dice-5.png`;
  activePlayer = 1;


    vplayer0CScore = 0;
    vplayer1CScore = 0;
    vplayer1TScore = 0;
    vplayer0TScore = 0;

  for (let i = 0; i < 2; i++) {
    document.getElementById(`current--${i}`).textContent = 0;
    document.getElementById(`score--${i}`).textContent = 0;

  }
  console.log (`total score 1- ${vplayer0TScore} ,, tota score 2 - ${vplayer1TScore}`)
  console.log("entering into switch function")
  //document.getElementsByClassName("score").querySelectorAll.textContent=0;
 

  switchPlayer();
}


//roll dice on click.

btnRollDice.addEventListener("click", function () {
  let randomNum = Math.trunc(Math.random() * 6 + 1);

  document.querySelector(".dice").src = `dice-${randomNum}.png`; 
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
  document.getElementById("current--1").textContent = vplayer1CScore;


});

//test

//test

btnNewGame.addEventListener("click", resetScore);
BtnHoldScore.addEventListener("click", onHold);
