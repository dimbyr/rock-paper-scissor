**Rock Paper Scissors Game Documentation**

This documentation provides an overview of a simple Rock Paper Scissors game that is played in the console. The game consists of several functions that handle different aspects of the game.

1. **`getComputerChoice()`**

   This function randomly selects a choice for the computer from the options: Rock, Paper, or Scissors. It returns the chosen option.

2. **`getPlayerChoice()`**

   This function prompts the player to input their choice of Rock, Paper, or Scissors. It keeps asking for input until a valid choice is made. The function returns the player's choice.

3. **`playRound(playerSelection, computerSelection)`**

   This function takes the player's choice and the computer's choice as input parameters and plays a single round of the game. It determines the winner based on the choices made and returns the result of the round.

4. **`game()`**

   This function orchestrates the overall gameplay. It initializes the scores for the player and computer. It then plays five rounds by calling the `playRound()` function and keeps track of the scores. After each round, it displays the result. Finally, it determines the overall winner based on the scores and displays the final result.

**Example Usage:**

To play the game, you can call the `game()` function, and the game will start. The prompts will ask for your input, and the results of each round will be displayed in the console. At the end of the game, the final scores and the overall winner will be shown.

```javascript
game();
```

Please note that this game is played in the console, so make sure to open the browser's developer console or an appropriate JavaScript environment where you can see the output and provide input when prompted.

Enjoy playing Rock Paper Scissors!