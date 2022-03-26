const choices = ["Rock", "Paper", "Scissors"]

function game() {
    //play game
    //play five rounds
    //console based
}
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase(); 
     if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
       return userInput;
     } else {
       console.log('Error!');
     }
   }

function computerPlay(){
    let result = choices[Math.floor(Math.random()*choices.length)];
return result;
}

function playRound(playerSelection, computerSelection){
     console.log(playRound);
}
let playerSelection = prompt("choices:Rock,Paper,Scissors,''");
let computerSelection = computerPlay();

for (let i = 0; i < 5; i++) {

}
playRound(playerSelection,computerSelection);


if (playerSelection.toLowerCase()=== "Rock".toLowerCase()){
    if (computerSelection === "Scissors"){
        ++playerScore
    console.log( "You win! Rock beats Scissors.");
}else if(computerSelection==="Paper"){
    console.log( "You lose! Paper beats Rock.");
}else {
    console.log( "It's a tie.");
}
if (playerSelection.toLowerCase()=== "Paper".toLowerCase()){
    if (computerSelection=== "Scissors"){
        ++compScore
    console.log( "You lose! Scissors beats Paper.");
}else if(computerSelection==="rock"){
    ++playerScore
    console.log( "You win! Paper beats Rock.");
}else {
    console.log( "It's a tie.");
}

if (playerSelection.toLowerCase()=== "scissors".toLowerCase()){
    if (computerSelection=== "paper"){
        ++playerScore
        console.log( "You win! Scissors beats Paper.");
}else if(computerSelection==="rock"){
   ++compScore
   console.log( "You lose! Rock beats Scissors.");
}else {
    console.log( "It's a tie.");
}
}


function game(){
    console.log (playRound());
    console.log (playRound());
    console.log (playRound());
    console.log (playRound());
    console.log (playRound());

}
if (playerScore > compScore) {
    console.log( "You Win the game!!");
}else if (playerScore <compScore) {
    console.log( "You Lost the game to a computer!");
} else {
    console.log( "It's a tie!");
}

let playerScore = 0
let compScore = 0
}
}