

function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    const names = ["rock", "paper", "scissors"];

    return names[rand];
}

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?");
    return choice;
}

function displayFinalScore(humanScore, computerScore) {
    const buttons = document.querySelector(".button-container");
    const choices = document.querySelector(".choice-display");


    while (buttons.firstChild) {
        buttons.removeChild(buttons.lastChild);
    }

    while (choices.firstChild) {
        choices.removeChild(choices.lastChild);
    }

    const final_text = document.createElement("h3");
    const replay_btn = document.createElement("button");

    replay_btn.classList.toggle("replay");
    replay_btn.textContent = "Play again"

    if (humanScore > computerScore) {
        final_text.textContent = "You won!";
    } else if (computerScore > humanScore) {
        final_text.textContent = "Better luck next time :(";
    } else {
        final_text.textContent = "It was a tie!";
    }

    replay_btn.addEventListener("click", () => {
        window.location.reload();
    });

    choices.appendChild(final_text);
    buttons.appendChild(replay_btn);


}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log("You:", humanChoice);
        console.log("Computer:", computerChoice);

        let dictionary = {};
        dictionary["rock"] = "🥔";
        dictionary["paper"] = "📜";
        dictionary["scissors"] = "✂️";

        const text = document.querySelector(".text-display");
        const h_choice = document.querySelector(".h-choice");
        const c_choice = document.querySelector(".c-choice");

        h_choice.textContent = dictionary[humanChoice];
        c_choice.textContent = dictionary[computerChoice];

        if (humanChoice === computerChoice) {
            text.textContent = "It's a tie!";
            return;
        }

        if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                text.textContent = "You lose! Paper beats Rock.";
                computerScore++;

            } else {
                text.textContent = "You win! Rock beats Scissors.";
                humanScore++;
            }

        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                text.textContent = "You win! Paper beats Rock.";
                humanScore++;

            } else {
                text.textContent = "You lose! Scissors beats Paper.";
                computerScore++;
            }

        } else {
            if (computerChoice === "paper") {
                text.textContent = "You win! Scissors beats Paper.";
                humanScore++;

            } else {
                text.textContent = "You lose! Rock beats Scissors.";
                computerScore++;
            }
        }
    }

    const buttons = document.querySelector(".button-container");
    const h_score = document.querySelector(".h-score");
    const c_score = document.querySelector(".c-score");



    buttons.addEventListener('click', (e) => {
        let target = e.target;
        let cc = getComputerChoice();
        playRound(String(target.className), cc);
        h_score.textContent = humanScore;
        c_score.textContent = computerScore;

        if (humanScore >= 5 || computerScore >= 5) {
            displayFinalScore(humanScore, computerScore);
        }

    });





}

playGame()

