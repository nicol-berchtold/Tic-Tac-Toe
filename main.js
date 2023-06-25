"use strict";
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
    this.gameboard = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    this.winConditions = [
      [0, 1, 2],
      [0, 0, 0],
      [1, 1, 1],
      [2, 2, 2],
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
    this.winConditions.forEach((item) => {
      if (
        this.gameboard[0][item[0]] === this.player1.sign &&
        this.gameboard[1][item[1]] === this.player1.sign &&
        this.gameboard[2][item[2]] === this.player1.sign
      ) {
        win = true;
      }
      if (
        this.gameboard[0][item[0]] === this.player2.sign &&
        this.gameboard[1][item[1]] === this.player2.sign &&
        this.gameboard[2][item[2]] === this.player2.sign
      ) {
        win = true;
      }
    });
    return win;
  }
  checkEnd() {
    return this.checkWin();
  }
  placeSign(sign, x, y) {
    this.gameboard[x][y] = sign;
  }
}

(function init() {
  const game = new Game();
  game.createPlayers("Max", "Susi");
  game.placeSign("X", 0, 0);
  game.placeSign("O", 0, 1);
  game.placeSign("X", 1, 0);
  //game.placeSign("X", 2, 0);
  console.log(game.gameboard);
  console.log(game.checkEnd());
})();
