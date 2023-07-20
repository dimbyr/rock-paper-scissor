// The computer selects a random play: rock, paper or scissors
function getComputerChoice(){
    const toChoose = ['Rock', 'Paper', 'Scissors'];
    return toChoose[Math.floor(Math.random()*toChoose.length)];
};

// Request an input from player.
function getPlayerChoice(){
    let playerChoice = 'blabla';
    const availableChoices = ['rock', 'paper', 'scissors'];
    // when the input does not match, keep asking
    while (!(availableChoices.includes(playerChoice.toLowerCase()))) {
        playerChoice = prompt("Rock? Paper? or Scissors?");
    };
    return playerChoice;
};

// Play a single round
function playRound(playerSelection, computerSelection) {
    const wins = ['paperrock', 'rockscissors', 'scissorspaper'];
    let playerPlay = playerSelection.toLowerCase() ;
    let computerPlay = computerSelection.toLowerCase();
    if(playerPlay == computerPlay){
        // a draw
      return `It is a draw: ${playerSelection.toUpperCase()} and ${computerSelection.toUpperCase()}`;
    } else if (wins.includes(playerPlay+computerPlay) ) {
        // player wins
        return `You win! ${playerPlay.toUpperCase()} beats ${computerPlay.toUpperCase()}`;
       } else {
        // player looses
        return `You loose! ${computerPlay.toUpperCase()} beats ${playerPlay.toUpperCase()}`;
       }
    };

    // play five rounds
function game(){
    let computerScore = 0;
    let playerScore = 0;
    for (let j=1; j<=5; j++){
        // display the results for each round
        let round = playRound(getPlayerChoice(), getComputerChoice());
        console.log(`Round ${j}: ${round}`);
        if (round.includes('win')){
            playerScore += 1;
        } else if (round.includes('loose')){
            computerScore += 1;
        } else {
            ;
        }
    };
    console.log('===============================================\n');
    // display the final results
    if (computerScore < playerScore){
        console.log('You Win !!!\n');
    }else if(playerScore<computerScore){
        console.log('You Loose !!!\n');
    } else {
        console.log('It is a draw !!!\n');
    }
    console.log(`Your score: ${playerScore} \t Computer score: ${computerScore}`);
    return;
};