"use strict";

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.sign = "";
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

  checkDraw() {
    let isDraw = false;
    let win = false;
    let ausgabe2 = document.getElementById("ausgabe2");
    if (!this.gameboard.includes(0) && win == false) {
      isDraw = true;
      ausgabe2.innerHTML = `Das Spiel ist unentschieden!`;
    }
    return isDraw;
  }

  checkWin() {
    let win = false;
    let ausgabe = document.getElementById("ausgabe");

    this.winConditions.forEach((condition) => {
      if (
        this.gameboard[condition[0]] === "X" &&
        this.gameboard[condition[1]] === "X" &&
        this.gameboard[condition[2]] === "X"
      ) {
        win = true;
        ausgabe.innerHTML = `${this.player1.name} hat gewonnen!`;
      }
      if (
        this.gameboard[condition[0]] === "O" &&
        this.gameboard[condition[1]] === "O" &&
        this.gameboard[condition[2]] === "O"
      ) {
        win = true;
        ausgabe.innerHTML = `${this.player2.name} hat gewonnen!`;
      }
    });
    return win;
  }

  placeSign(sign, x) {
    this.gameboard[x] = sign;
  }
}

function place(game) {
  function deleteHandler(box) {
    box.removeEventListener("click", clickHandler);
  }
  function clickHandler(event) {
    let coordinate = event.target.dataset.index;
    sign = sign === "X" ? "O" : "X";
    game.placeSign(sign, coordinate);
    event.target.textContent = sign;
    game.checkWin();
    game.checkDraw();
    deleteHandler(event.target);
  }
  let sign = "X";
  const plazieren = document.getElementsByClassName("box");
  for (let box of plazieren) {
    box.addEventListener("click", clickHandler);
  }
}

function check(p1, p2) {
  if (p1 === "" || p2 === "") {
    return false;
  } else {
    return true;
  }
}

function clear() {
  location.reload();
}

(function init() {
  const game = new Game();
  place(game);

  const start = document.getElementById("start");
  const spielfeld = document.getElementById("gameboard");
  const hideEintrag = document.getElementById("eintrag");
  const reset = document.getElementById("restart");
  const meldung = document.getElementById("meldung");

  start.addEventListener("click", () => {
    const playerName1 = document.getElementById("player1").value;
    const playerName2 = document.getElementById("player2").value;
    if (check(playerName1, playerName2)) {
      game.createPlayers(playerName1, playerName2);
      hideEintrag.classList.add("eintrag");
      spielfeld.classList.remove("gameboard");
    } else {
      meldung.innerHTML = `Bitte beide Spielernamen eingeben!`;
    }
  });
  reset.addEventListener("click", clear);
})();
