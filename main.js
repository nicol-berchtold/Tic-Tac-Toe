"use strict";

//console.log(playersInput(player1, player2));

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.sign = "";
  }
  changeScore() {
    this.score++;
  }
  setSign(sign) {
    this.sign = sign;
  }
}

class Game {
  constructor() {
    this.player1 = {};
    this.player2 = {};
    this.gameboard = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    this.winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  createPlayers(namePlayer1, namePlayer2) {
    this.player1 = new Player(namePlayer1);
    this.player2 = new Player(namePlayer2);
    this.player1.setSign("X");
    this.player2.setSign("O");
  }

  checkWin() {
    let win = false;
    this.winConditions.forEach((condition) => {
      console.log("Win Conditions:", condition);
      if (
        this.gameboard[condition[0]] === "X" &&
        this.gameboard[condition[1]] === "X" &&
        this.gameboard[condition[2]] === "X"
      ) {
        win = true;
      }
      if (
        this.gameboard[condition[0]] === "O" &&
        this.gameboard[condition[1]] === "O" &&
        this.gameboard[condition[2]] === "O"
      ) {
        win = true;
      }
    });
    return win;
  }
  checkEnd() {
    return this.checkWin();
  }
  placeSign(sign, x) {
    this.gameboard[x] = sign;
  }
}

function place() {
  const plazieren = document.getElementById("feld");
  const board = document.getElementById("container");

  board.addEventListener("click", () => {});
}
console.log(plazieren);

(function init() {
  const game = new Game();

  const start = document.getElementById("start");
  const playerName1 = document.getElementById("player1");
  const playerName2 = document.getElementById("player2");
  const spielfeld = document.getElementById("gameboard");
  const hideEintrag = document.getElementById("eintrag");

  start.addEventListener("click", () => {
    game.createPlayers(playerName1.value, playerName2.value);

    hideEintrag.classList.add("eintrag");
    spielfeld.classList.remove("gameboard");
  });

  console.log(game);
  /*  game.createPlayers("Max", "Susi");
  game.placeSign("X", 0);
  game.placeSign("X", 1);
  game.placeSign("X", 2);
  game.placeSign("O", 0);
  game.placeSign("O", 1);
  game.placeSign("O", 2);
  //game.placeSign("X", 2, 0);
  console.log(game.gameboard);
  console.log(game.checkEnd()); */
})();
