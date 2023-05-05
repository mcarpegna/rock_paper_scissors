function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundCount = 0
    let activeButton = null; // variable to store the previously selected button

    const container = document.querySelector('.container');

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerSelection = button.dataset.value; // takes de data-value for each button
            const computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
            if (activeButton !== null) {
                activeButton.classList.remove('active'); // remove "active" class from the previously selected button
            }
            button.classList.add('active'); // add "active" class to the current button
            activeButton = button; // update the previously selected button
        });
    });

    const roundResult = document.createElement('div');
    roundResult.classList.add('roundResult', 'buttonLike');
    roundResult.textContent = `Round 0:`;
    container.appendChild(roundResult);

    const scoreUpdate = document.createElement('div');
    scoreUpdate.classList.add('scoreUpdate', 'buttonLike');
    scoreUpdate.textContent = `Score:`;

    container.appendChild(scoreUpdate);

    const finalResult = document.createElement('div');
    finalResult.classList.add('finalResult', 'buttonLike');
    finalResult.textContent = "Final result:";
    container.appendChild(finalResult);

    const replayDiv = document.createElement('div');
    replayDiv.classList.add('replayDiv');
    container.appendChild(replayDiv);

    const replayGame = document.createElement('button');
    replayGame.classList.add('replayGame', 'btn');
    replayGame.textContent = "Play again?";


    function playRound(playerSelection, computerSelection) {
        if (playerScore === 5 || computerScore === 5) {
            return; // exit the function without doing anything if maximum score has  been reached.
        }

        if (playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "scissors" ||
            playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            roundCount++;
            roundResult.textContent = `Round ${roundCount}: Computer chose ${computerSelection}. You lose!`;
            scoreUpdate.textContent = `Score: You ${playerScore}; Computer ${computerScore}`;
        } else if (playerSelection === computerSelection) {
            computerScore += 0;
            playerScore += 0;
            roundCount++;
            roundResult.textContent = `Round ${roundCount}: Computer chose ${computerSelection}. It's a tie!`;
            scoreUpdate.textContent = `Score: You ${playerScore}; Computer ${computerScore}`;
        } else {
            playerScore++;
            roundCount++;
            roundResult.textContent = `Round ${roundCount}: Computer chose ${computerSelection}. You Win!`;
            scoreUpdate.textContent = `Score: You ${playerScore}; Computer ${computerScore}`;
        }

        if (playerScore === 5 || computerScore === 5) {
            const winner = playerScore > computerScore ? "You" : "Computer";
            finalResult.textContent = `The winner is: ${winner}!`;
            replayDiv.appendChild(replayGame);
            replayGame.addEventListener('click', function () {
                location.reload();
            });
        }
    }
}

game();