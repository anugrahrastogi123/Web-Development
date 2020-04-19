let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random()*10);

function compareGuesses(userGuess, computerGuess, targetNum){
  if(Math.abs(userGuess-targetNum) <= Math.abs(computerGuess-targetNum)){
    return true;
  }
  else{
    return false;
  }
}

function updateScore(winner){
  if(winner === 'human'){
    humanScore += 1;
  }
  else{
    computerScore += 1;
  }
}

function advanceRound(){
  currentRoundNumber += 1;
}
