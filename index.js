const button = document.querySelector('#play-btn');
const resultArea = document.querySelector('#result-area');

const playerOne = document.querySelector('#player-1');
const playerTwo = document.querySelector('#player-2');

let playerOneScore = 0;
let playerTwoScore = 0;

const nameOne = document.querySelector('.name-1');
const nameTwo = document.querySelector('.name-2');

const scoreOne = document.querySelector('#score-1');
const scoreTwo = document.querySelector('#score-2');

const choices = ['✌🏻', '✋🏻', '✊🏻'];


const generateHand = () => {
  const randIndex = Math.floor(Math.random() * 3)
  return choices[randIndex];
}

nameOne.innerText = prompt('Please enter name for Player 1');
nameTwo.innerText = prompt('Please enter name for Player 2');

button.addEventListener('click', () => {
  const first = generateHand();
  const second = generateHand();
  playerOne.innerText = first;
  playerTwo.innerText = second;
  // Compare the hands
  if (first === second) {
     resultArea.innerText = 'Draw!';
  } else if ( first === '✋🏻' && second === '✊🏻' ||
              first === '✊🏻' && second === '✌🏻' ||
              first === '✌🏻' && second === '✋🏻') {
    resultArea.innerText = 'Player 1 wins!';
    playerOneScore += 1 
    scoreOne.innerText = playerOneScore
  } else {
    resultArea.innerText = 'Player 2 wins!';                
    playerTwoScore += 1 
    scoreTwo.innerText = playerTwoScore
  }
})



