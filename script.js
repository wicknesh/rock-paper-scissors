const ccArray = ["ROCK", "PAPER", "SCISSORS"];

let playerPoint = 0;
let computerPoint = 0;
let gameNumber = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const result = document.querySelector('#result');
const playerChoicePara = document.createElement('p');
const computerChoicePara = document.createElement('p');
const roundResultPara = document.createElement('p');
const runningScorePara = document.createElement('p');
result.append(playerChoicePara, computerChoicePara, roundResultPara, runningScorePara);

rock.addEventListener('click', () => playRound("ROCK", getComputerChoice()));
paper.addEventListener('click', () => playRound("PAPER", getComputerChoice()));
scissors.addEventListener('click', () => playRound("SCISSORS", getComputerChoice()));

function getComputerChoice(){
    return ccArray[Math.floor(Math.random() * ccArray.length)];
}

function playRound(playerSelection, computerSelection){   
    
    playerChoicePara.textContent = `Player: ${playerSelection}`;
    computerChoicePara.textContent = `Computer: ${computerSelection}`;

    if(playerSelection == computerSelection){
       playGame("Tie");
    }
    else if((playerSelection == "ROCK" && computerSelection =="SCISSORS")||
    (playerSelection == "PAPER" && computerSelection == "ROCK")||
    (playerSelection == "SCISSORS" && computerSelection == "PAPER")){
        playGame("Player wins");
    }
    else {
        playGame("Computer wins");
    }
}

function playGame(roundResult) {
    if(roundResult == "Player wins"){
        playerPoint++;
    }
    else if(roundResult == "Computer wins"){
        computerPoint++;
    }
    roundResultPara.textContent = roundResult;

    gameNumber++;
    if(gameNumber == 5) {
        const finalResult = document.createElement('p');
        if(playerPoint > computerPoint){
            finalResult.textContent = `Player wins with ${playerPoint} points.`;
        }
        else if (playerPoint < computerPoint) {
            finalResult.textContent = `Computer wins with ${computerPoint} points.`;
        }
        else {
            finalResult.textContent = `Tie game with both scoring ${playerPoint}`;
        }
        result.append(finalResult);
        roundResultPara.textContent = "";
        playerPoint = 0;
        computerPoint = 0;
        gameNumber = 0;
        playerChoicePara.textContent ="";
        computerChoicePara.textContent = "";
    }    
}