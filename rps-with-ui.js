const computerChoice = document.querySelector("#computerChoice");

const playerChoice = document.querySelector("#myChoice");

const buttons = document.querySelectorAll('#buttons');

const resetButton = document.querySelector("#resetbutton");

let playerScore = 0;

let computerScore = 0;

const pscore = document.querySelector("#pScore");
const cscore = document.querySelector("#cScore");

buttons.forEach(
    button => button.addEventListener('click', play)
        );

resetButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    pscore.textContent = playerScore;
    cscore.textContent = computerScore;
    playerChoice.textContent = '';
    computerChoice.textContent = '';
        })

function getComputerChoice(){
    const toChoose = ['Rock', 'Paper', 'Scissors'];
    return toChoose[Math.floor(Math.random()*toChoose.length)].toUpperCase();
};


function play(e){
    playerChoice.textContent = e.target.value.toUpperCase();
    computerChoice.textContent = getComputerChoice();
    let playerPlay = playerChoice.textContent.toLowerCase();
    let computerPlay = computerChoice.textContent.toLowerCase();
    updateScores(playerPlay, computerPlay);
    pscore.textContent = playerScore;
    cscore.textContent = computerScore;
}


function updateScores(playerSelection, computerSelection) {
    const wins = ['paperrock', 'rockscissors', 'scissorspaper'];
    let playerPlay = playerSelection.toLowerCase() ;
    let computerPlay = computerSelection.toLowerCase();
    if(playerPlay == computerPlay){
        // a draw
    } else if (wins.includes(playerPlay+computerPlay) ) {
        // player wins
        playerScore += 1
       } else {
        // player looses
        computerScore += 1;
       }
    };
