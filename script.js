

function computerPlay(){
    playArray = ["rock","paper","scissors"]
    return playArray[Math.floor(Math.random()*playArray.length)];
}


function playRound(computerSelection, playerSelection){

    if(computerSelection.toUpperCase() == "rock".toUpperCase() && playerSelection.toUpperCase() == "scissors".toUpperCase() || 
    computerSelection.toUpperCase() == "paper".toUpperCase() && playerSelection.toUpperCase() == "rock".toUpperCase() ||
    computerSelection.toUpperCase() == "scissors".toUpperCase() && playerSelection.toUpperCase() == "paper".toUpperCase() ){
        return "You Lose! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase() + 
                " beats " +playerSelection.toLowerCase();
    } else if (computerSelection.toUpperCase() == "scissors".toUpperCase()  && playerSelection.toUpperCase() == "rock".toUpperCase() || 
    computerSelection.toUpperCase() == "rock".toUpperCase()  && playerSelection.toUpperCase() == "paper".toUpperCase() ||
    computerSelection.toUpperCase() ==  "paper".toUpperCase()  && playerSelection.toUpperCase() == "scissors".toUpperCase() ){
        return "You Win! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase() + 
            " beats " + playerSelection.toLowerCase();
    } else{
        return "Tie! You chose " + playerSelection + ". Computer chose " + computerSelection;
    }

}

function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = window.prompt("Rock, Paper, or Scissors?")
        console.log( playRound(computerPlay(), playerSelection));
        
    }
}

console.log(game());