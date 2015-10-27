////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    console.log(playerMove);
    console.log(computerMove);
    switch(playerMove) {
        case "rock":
            if (computerMove === 'scissors') {
                winner = 'player';
            } else if (computerMove === 'paper') {
                winner = 'computer';
            } else {
                winner = 'tie';
            }
            break;
        case "paper":
            if (computerMove === 'rock') {
                winner = 'player';
            } else if (computerMove === 'scissors') {
                winner = 'computer';
            } else {
                winner = 'tie';
            }
            break;
        case "scissors":
            if (computerMove === 'paper') {
                winner = 'player';
            } else if (computerMove === 'rock') {
                winner = 'computer';
            } else {
                winner = 'tie';
            }
            break;
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while ((playerWins < 5) && (computerWins < 5)) {
        var win = getWinner(getPlayerMove(getInput()),getComputerMove(randomPlay()));
        if (win === 'player') {
            playerWins++;
            console.log("You win!");
            console.log(playerWins);
            console.log(computerWins);
        } else if (win === 'computer') {
            computerWins++;
            console.log("Computer wins!");
            console.log(playerWins);
            console.log(computerWins);
        } else if (win === 'tie') {
            console.log("Tie!");
            console.log(playerWins);
            console.log(computerWins);
        }
    }
    
    return [playerWins, computerWins];
    
}
