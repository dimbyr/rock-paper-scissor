// console.dir(".body")
const computerChoice = document.querySelector("#computerChoice");

const playerChoice = document.querySelector("#myChoice");

const buttons = document.querySelectorAll('#buttons');

console.log(buttons);

buttons.forEach(
    button => button.addEventListener('click', 
        (e) => {
            playerChoice.textContent = e.target.value.toUpperCase();
            console.log("Choice of me: ", playerChoice.textContent);
            computerChoice.textContent = getComputerChoice();
    })
        );



function getComputerChoice(){
    const toChoose = ['Rock', 'Paper', 'Scissors'];
    return toChoose[Math.floor(Math.random()*toChoose.length)].toUpperCase();
};

