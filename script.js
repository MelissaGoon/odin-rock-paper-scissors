

function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    const names = ["rock", "paper","scissors"];

    return names[rand];
}

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?");
    return choice;
}

  
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log("You:", humanChoice);
        console.log("Computer:", computerChoice);
    
        let hChoice = humanChoice.toLowerCase();
        if (hChoice === computerChoice) {
            console.log("It's a tie!");
            return;
        }
    
        if (hChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("You lose! Paper beats Rock.");
                computerScore++;
    
            } else { //scissors
                console.log("You win! Rock beats Scissors.");
                humanScore++;
            }
    
        } else if (hChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win! Paper beats Rock.");
                humanScore++;
    
            } else { //scissors
                console.log("You lose! Scissors beats Paper.");
                computerScore++;
            }
        
        } else { //scissors
            if (computerChoice === "paper") {
                console.log("You win! Scissors beats Paper.");
                humanScore++;
    
            } else { //rock
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
            }
        }
    }

    for (let i = 0; i < 5; i++){
        let hc = getHumanChoice();
        let cc = getComputerChoice();
        playRound(hc,cc);
    }

    console.log( "Your score:", humanScore, "/5");

    if (humanScore > computerScore) {
        console.log("You won!")
    } else if (computerScore > humanScore) {
        console.log("Better luck next time :(")
    } else {
        console.log("It was a tie!")
    }

}

playGame()

