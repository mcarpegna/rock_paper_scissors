function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const getComputerChoice = options[Math.floor(Math.random() * options.length)];
    return getComputerChoice;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (i = 1; i <= 5; i++) {

        const playerSelection = prompt("Ingresa una palabra o frase:").toLowerCase();
        const computerSelection = getComputerChoice();

        function playRound(playerSelection, computerSelection) {
        
            if (playerSelection === "rock" && computerSelection === "paper" ||
                playerSelection === "paper" && computerSelection === "scissors" ||
                playerSelection === "scissors" && computerSelection === "rock") {
                computerScore = computerScore + 1 ;
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            } else if(playerSelection === computerSelection) {
                computerScore = computerScore + 0;
                playerScore = playerScore + 0;
                console.log(`It's a Tie! ${computerSelection} equals ${playerSelection}`);
            } else {
                playerScore = playerScore + 1;
                console.log(`You Win! ${playerSelection} beats ${computerSelection}`);

            }

        }

        playRound(playerSelection, computerSelection);
        console.log (`Round ${i}: Player played: ${playerSelection}; Computer played: ${computerSelection}`);
        console.log (`Player points: ${playerScore}; Computer points: ${computerScore}`);
    }

    if(playerScore < computerScore) {
        return `Player total score = ${playerScore}; Computer total score = ${computerScore}. Computer Wins!`
    } else if (playerScore > computerScore) {
        return `Player total score = ${playerScore}; Computer total score = ${computerScore}. Player Wins!`
    } else {
        return `Player total score = ${playerScore}; Computer total score = ${computerScore}. It's a Tie!`
    }

}

console.log(game());