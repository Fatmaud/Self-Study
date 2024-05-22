// //& Selectors
// const yourChoiceDiv = document.getElementById("your-choice");
// const pcChoiceDiv = document.getElementById("pc-choice");
// const selectionArticle = document.querySelector(".selection");

// const messagePar = document.querySelector(".message");

// //&Score Selectors
// const scoreCardSection = document.querySelector(".score-card");
// const yourScoreSpan = document.getElementById("your-score");
// const pcScoreSpan = document.getElementById("pc-score");
// const domTopScore = document.getElementById("top-score");

// //& Variables

// let userSelection;
// let pcRandom;
// let pcArr = [];
// const userSelectImg = document.createElement("img");
// const pcSelectImg = document.createElement("img");

// //& Colors
// const YELLOW = "#ffc538";
// const RED = "#fb778b";
// const GREEN = "#5ab7ac";

// // console.log(selectionArticle)

// //& Event listeners

// selectionArticle.addEventListener("click", (e) => {
//   // console.log(e.target.id)
//   userSelection = e.target.id;
//   // console.log(userSelection)

//   if (userSelection) {
//     userSelectImg.src = `./assets/${userSelection}.png`;
//     userSelectImg.id = `you`;
//     yourChoiceDiv.appendChild(userSelectImg);
//   }
//   createPcSelection();
// });

// //& Functions

// const createPcSelection = () => {
//   pcArr = ["rock", "paper", "scissor", "rock", "paper", "scissor"];
//   pcRandom = pcArr[Math.trunc(Math.random() * 6)];
//   console.log(pcRandom);
//   pcSelectImg.src = `./assets/${pcRandom}.png`;
//   pcSelectImg.id = `pcs`;
//   pcChoiceDiv.appendChild(pcSelectImg);

//   calculateResult();
// };

// const calculateResult = () => {
//   if ((userSelection = pcRandom)) {
//     draw();
//   } else {
//     if (userSelection === "rock") {
//       pcRandom === "paper" ? youLost(userSelection) : youWin(pcRandom);
//     } else if (userSelection === "paper") {
//       pcRandom === "scissors" ? youLost(userSelection) : youWin(pcRandom);
//     } else if (userSelection === "scissors") {
//       pcRandom === "rock" ? youLost(userSelection) : youWin(pcRandom);
//     }
//   }
// };

// const draw = () => {
//   messagePar.textContent = "It's a draw!";
//   messagePar.style.background = YELLOW;
//   scoreCardSection.style.color = YELLOW;
// };

// const youLost = (userSelection) => {
//   messagePar.textContent = "You lost😏!";
//   messagePar.style.background = RED;
//   scoreCardSection.style.color = RED;
//   pcScoreSpan.textContent++;
//   document
//     .getElementById("you")
//     .setAttribute("src", `./assets/${userSelection}l.png`);
// };

// const youWin = () => {
//   messagePar.textContent = "You win🎉!";
//   messagePar.style.background = GREEN;
//   scoreCardSection.style.color = GREEN;
//   yourScoreSpan.textContent++;
//   document
//     .getElementById("pcs")
//     .setAttribute("src", `./assets/${pcRandom}l.png`);
// };

//&Selectors
const yourChoiceDiv = document.getElementById("your-choice");
const selectionArticle = document.querySelector(".selection");
const pcChoiceDiv = document.getElementById("pc-choice");

//&Variables
let userSelection;
const userSelectImg = document.createElement("img");

selectionArticle.addEventListener("click", (e) => {
  userSelection = e.target.id;

  if (userSelection) {
    userSelectImg.src = `./assets/${userSelection}.png`;
    userSelectImg.id = `you`;
    yourChoiceDiv.appendChild(userSelectImg);
  }
});
