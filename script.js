function getComputerChoice(){
     const ccArray = ["Rock", "Paper", "Scissors"];
     return ccArray[Math.floor(Math.random() * ccArray.length)];
}

function playRound(playerSelection, computerSelection){

    // console.log(`Your choice: ${playerSelection}`);
    // console.log(`Computer's choice: ${computerSelection}`);
    

    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
       console.log(`Your choice: ${playerSelection}`);
       console.log(`Computer's choice: ${computerSelection}`);
       return "Tie";
    }
    else if(playerSelection.toLowerCase() == "rock"){
        if(computerSelection.toLowerCase() == "paper"){
            console.log(`Your choice: ${playerSelection}`);
            console.log(`Computer's choice: ${computerSelection}`);
            computerPoint++;
            return "You lose! Paper beats Rock";
        }
        else {
            console.log(`Your choice: ${playerSelection}`);
            console.log(`Computer's choice: ${computerSelection}`);
            playerPoint++;
            return "You win! Rock beats Scissors";
        }
    }
    else if(playerSelection.toLowerCase() == "paper"){
        if(computerSelection.toLowerCase() == "rock"){
            console.log(`Your choice: ${playerSelection}`);
            console.log(`Computer's choice: ${computerSelection}`);
            playerPoint++;
            return "You win! Paper beats Rock";
        }
        else {
            console.log(`Your choice: ${playerSelection}`);
            console.log(`Computer's choice: ${computerSelection}`);
            computerPoint++;
            return "You lose! Scissors beats Paper";
        }
    }
    else if(playerSelection.toLowerCase() == "scissors" || playerSelection.toLowerCase() == "scissor"){
        if(computerSelection.toLowerCase() == "rock"){
            console.log(`Your choice: ${playerSelection}`);
            console.log(`Computer's choice: ${computerSelection}`);
            computerPoint++;
            return "You lose! Rock beats Scissors";
        }
        else {
            console.log(`Your choice: ${playerSelection}`);
            console.log(`Computer's choice: ${computerSelection}`);
            playerPoint++;
            return "You win! Scissors beat Paper";
        }
    }
    else {
        console.log(`Your choice: ${playerSelection}`);
        return "Invalid choice! Refresh.";
    }
}

function playGame() {
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Enter choice: ");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("\n");
    if(playerPoint > computerPoint){
        console.log(`You won the game with ${playerPoint} points`);
    }
    else if(computerPoint > playerPoint){
        console.log(`You lost the game with computer scoring ${computerPoint} points`);
    }
    else {
        console.log(`It is a tie game with both scoring ${playerPoint} points`);
    }
}

//console.log(playRound(playerSelection, computerSelection));
let playerPoint = 0;
let computerPoint = 0;

playGame();