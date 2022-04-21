"use strict";

let secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage("No number!");
  } else if (guess === secertNumber) {
    displayMessage("Correct Number!");

    document.querySelector(".number").textContent = secertNumber;

    //Style
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // 77. Implementing High score check
    if (score > highscore) {
      highscore = score;

      document.querySelector(".highscore").textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secertNumber) {
    if (score > 1) {
      displayMessage(guess > secertNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secertNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  //Style
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
