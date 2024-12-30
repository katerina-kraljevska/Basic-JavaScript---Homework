//GLOBAL VARIABLES
const gameWiningScore = 30;

let playerOneScore = 0; //total score
let playerTwoScore = 0; //total score
let roundScore = 0; //round score

//kockite se definirani na lokalno nivo

let isGameActive = false;

let activePlayer = 0; // 0 is playerOne, 1 is playerTwo

//SCORE ELEMENTS

let playerOneTotalScoreElement = document.getElementById("score-0");
let playerTwoTotalScoreElement = document.getElementById("score-1");
let playerOneCurrentScoreElement = document.getElementById("current-0");
let playerTwoCurrentScoreElement = document.getElementById("current-1");

//BUTTONS
let newGameButton = document.querySelector(".btn-new");
let rollButton = document.querySelector(".btn-roll");
let holdButton = document.querySelector("btn-hold");

//NEW GAME

function newGame() {
  playerOneScore = 0;
  playerTwoScore = 0;
  roundScore = 0;
  activePlayer = 0; //sekogas prviot igrac da bide active

  isGameActive = true;
  playerOneTotalScoreElement.innerText = 0;
  playerTwoCurrentScoreElement.innerText = 0;
  playerOneCurrentScoreElement.innerText = 0;
  playerTwoTotalScoreElement.innerText = 0;

  rollButton.addEventListener("click", rollDice);
  holdButton.addEventListener("click", holdScore);
}

newGameButton.addEventListener("click", newGame);

//ROOL DICE
function rollDice() {
  //   if (isGameActive === false) {
  //     return;
  //   }
  let dice1 = Math.floor(Math.random() * 6 + 1);
  let dice2 = Math.floor(Math.random() * 6 + 1);

  document.querySelector(".dice").src = "./dice/dice-" + dice1 + ".png";
  document.querySelector(".dice2").src = `./dice/dice-${dice2}.png`;

  if (dice1 !== 1 && dice2 !== 1) {
    roundScore += dice1 + dice2;

    if (activePlayer === 0) {
      playerOneCurrentScoreElement.innerText = roundScore;
    } else {
      playerTwoCurrentScoreElement.innerText = roundScore;
    }
  } else {
    nextPlayer();
  }
  //   console.log(Math.floor(Math.random() * 6 + 1)); //od bibliotekata Math naogja nekoj random broj, math floor e funkcija koja go zema poniskiot cel broj
}

function holdScore() {
  //   if (isGameActive === false) {
  //     return;
  //   }
  if (activePlayer === 0) {
    playerOneScore += roundScore;
    playerOneTotalScoreElement.innerText = playerOneScore;
    nextPlayer();
  } else {
    playerTwoScore += roundScore;
    playerTwoTotalScoreElement.innerText = playerTwoScore;
    nextPlayer();
  }
  checkForWinner(); //se povrzuva so proverka za dali imame pobednik
}

function nextPlayer() {
  //round score set 0
  roundScore = 0;
  //change round score in HTML
  if (activePlayer === 0) {
    playerOneCurrentScoreElement.innerText = roundScore;
  } else {
    playerTwoCurrentScoreElement.innerText = roundScore;
  }
  //chage active player
  document
    .querySelector(`.player-${activePlayer}-panel`)
    .classList.remove("active");
  //   activePlayer = activePlayer === 0 ? 1 : 0; //termary opearor
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  //change active playerHTML / add active playe class
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("active");
}

function checkForWinner() {
  if (playerOneScore >= gameWiningScore) {
    //isGameActive = false;
    holdButton.removeEventListener("click", holdScore);
    rollButton.removeEventListener("click", rollDice);
    alert("Player one is the winner");
  } else if (playerTwoScore >= gameWiningScore) {
    //isGameActive = false;
    holdButton.removeEventListener("click", holdScore);
    rollButton.removeEventListener("click", rollDice);
    alert("Player two is the winner");
  }
}

newGameButton.addEventListener("click", newGame); //ovoj event e aktiven celo vreme
