
let buttonClicked;
let roundWinner;
let computerChoice;

let roundCounter = 0;
let playerScore = 0;
let computerScore = 0;
const winningScore = 5;  // Adjust this to change the winning score

const myScoreDiv = document.getElementById('myscore');
const p1 = myScoreDiv.querySelector('#score');
const computerScoreDiv = document.getElementById('computerscore');
const p2 = computerScoreDiv.querySelector('#score');

const container = document.querySelector('.buttonContainer');
const div = document.querySelector('.div');

const newGameButton = document.createElement('button');
newGameButton.textContent = 'New Game';
newGameButton.style.display = 'none';  // Hide the button initially
document.body.appendChild(newGameButton);  // Append the button to the body

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('rock') ||
        e.target.classList.contains('paper') ||
        e.target.classList.contains('scissor')
    ) {
        buttonClicked = `${e.target.className}`;
        computerChoice = computerSelection();
        roundWinner = gameLogic(computerChoice, buttonClicked);

        if (roundWinner === 'Computer') {
            div.textContent = 'Computer wins this round';
            computerScore += 1;
        } else if (roundWinner === 'You') {
            div.textContent = 'You win this round';
            playerScore += 1;
        } else {
            div.textContent = "It's a draw";
        }

        // Update the score display
        p1.textContent = playerScore;
        p2.textContent = computerScore;

        // Increment the round counter
        roundCounter += 1;

        // Check if there's a winner
        if (playerScore === winningScore || computerScore === winningScore) {
            endGame();
        }
    }
});

function computerSelection() {
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber <= 30) {
        return 'rock';
    } else if (randomNumber > 30 && randomNumber < 70) {
        return 'paper';
    } else {
        return 'scissor';
    }
}

function gameLogic(computerChoice, buttonClicked) {
    if (computerChoice === buttonClicked) {
        return "Draw";
    } else if (
        (computerChoice === 'rock' && buttonClicked === 'scissor') ||
        (computerChoice === 'paper' && buttonClicked === 'rock') ||
        (computerChoice === 'scissor' && buttonClicked === 'paper')
    ) {
        return 'Computer';
    } else {
        return 'You';
    }
}

function endGame() {
    // Announce the winner
    if (playerScore === winningScore) {
        div.textContent = 'Congratulations! You won the game!';
    } else if (computerScore === winningScore) {
        div.textContent = 'Computer wins the game!';
    }

    // Hide the game buttons
    container.style.display = 'none';

    // Show the "New Game" button
    newGameButton.style.display = 'block';
}

newGameButton.addEventListener('click', () => {
    // Reset all game variables
    roundCounter = 0;
    playerScore = 0;
    computerScore = 0;

    // Reset the score display
    p1.textContent = playerScore;
    p2.textContent = computerScore;

    // Clear the winner announcement
    div.textContent = '';

    // Show the game buttons again
    container.style.display = 'block';

    // Hide the "New Game" button
    newGameButton.style.display = 'none';
});





/*---------old code and pseudo code----------*/

/*let buttonClicked;
let roundWinner;
let computerChoice;

let roundCounter=0;
let playerScore=0;
let computerScore=0;


const myScoreDiv= document.getElementById('myscore');
const p1 = myScoreDiv.querySelector('#score');
const computerScoreDiv= document.getElementById('computerscore');
const p2 = computerScoreDiv.querySelector('#score');

const container = document.querySelector('.buttonContainer');
const div = document.querySelector('.div');


container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('rock')||
       e.target.classList.contains('paper')||
       e.target.classList.contains('scissor')
    ){
        
        buttonClicked= `${e.target.className}`;
        

        computerChoice= computerSelection();

        roundWinner= gameLogic(computerChoice,buttonClicked); 

        if(roundWinner==='Computer'){
        div.textContent= 'Computer wins this round';
    }else if(roundWinner==='You'){
        div.textContent=`You win this round`;
    }else{
        div.textContent= "It's a draw";
    }

    if(roundWinner=== 'Computer'){
        computerScore+=1;
        
    
    }else if(
        roundWinner==='You'
    ){
        playerScore+=1;
       
    }
    
   

    p1.textContent = playerScore;
    p2.textContent = computerScore;
    
    roundCounter+=1;


    console.log(roundCounter)

}})

function computerSelection(){

    let randomNumber= Math.floor(Math.random()*100);
    if(randomNumber<=30){
        return 'rock'
    }else if(randomNumber>30 && randomNumber<70){
        return 'paper'
    }else if( randomNumber>=70){
        return 'scissor'
    }    
}


function gameLogic(computerChoice, buttonClicked) {
    if (computerChoice === buttonClicked) {
        return "Draw";
    } else if (
        (computerChoice === 'rock' && buttonClicked === 'scissor') ||
        (computerChoice === 'paper' && buttonClicked === 'rock') ||
        (computerChoice === 'scissor' && buttonClicked === 'paper')
    ) {
        return 'Computer'//wins;
    } else {
        return 'You'//win;
    }
}




 Display the running score, 
and announce a winner of the game once one player reaches 5 points.*/

//psuedo code 
/*
what i want-
A round counter
A score keeper for Computer
A score keeper for Player

    first of all i need 3 variables.
    one- to keep count of games won by Computer. 
    one- to keep count of games won by Player.
    one- to keep count of Rounds.

    I could use a for loop that counts loss or win,// ROUND-COUNTER
    inside an IF statement. being that-

    if (player reaches Win 5 times ||<OR>|| computer reaches Win 5 times )
     {
    log winner with string interpolation. 
    Create a div element that shows who has won the game.  
    } 

     everytime a loop finishes the Round counter is incremented by 1.


*/ 

