# Tic-Tac-Toe

This game is for two players one have an x to put in the grid and the other has to put in O. The grid is three \* three and the game ends when one of the player puts his sign three times in a row, a column, or a diagonal. Game ends too when it ends in a draw.

```
class Player{}
```

It creates the different two different players.

```
setSign(sign)
```

It creates the sign.

```
class Game {}
```

It creates the game board as an array.

```
createPlayers(namePlayer1, namePlayer2)
```

It uses the class Player function to create the two players.

```
checkDraw()
```

It checks if the game end in a draw.

```
checkWin()
```

It checks witch player wins.

```
function place(game)
function deleteHandler(box)
function clickHandler(event)
```

It places the signs in the game board and checks that the player can't click twice on the same box.

```
function check(p1, p2)
```

It checks if the there is an input.

```
function clear()
```

Reloads the page.

```
function init()
```

It starts the game functions.
