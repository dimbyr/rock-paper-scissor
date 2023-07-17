// Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.
// Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

function getComputerChoice(){
    const toChoose = ['Rock', 'Paper', 'Scissors']
    return toChoose[Math.floor(Math.random()*toChoose.length)];
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).


function getPlayerChoice(){
    let playerChoice = prompt("Rock? Paper? or Scissors?");
    return playerChoice;
}
// Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

function playRound(playerSelection, computerSelection) {
    let wins = ['paperrock', 'rockscissors', 'scissorspaper'];
    // let losses = ['paperscissors','scissorsrock', 'rockpaper'];
    let player = playerSelection.toLowerCase() ;
    let computer = computerSelection.toLowerCase();
    if(player == computer){
      return `It is a draw: ${playerSelection} and ${computerSelection}`;
    }
    else if (wins.includes(player+computer) ) {
        // player wins
        return `You win! ${player.toUpperCase()} beats ${computer.toUpperCase()}`;
       } else {
        // player looses
        return `You loose! ${computer.toUpperCase()} beats ${player.toUpperCase()}`;
       }
    };

console.log(playRound(getPlayerChoice(), getComputerChoice()));

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
// At this point you should be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.
// Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
// Feel free to create more “helper” functions if you think it would be useful.