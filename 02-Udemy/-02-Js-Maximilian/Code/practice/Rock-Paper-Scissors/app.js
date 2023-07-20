const startGameBtn = document.getElementById('start-game-btn');


let gameIsRunning = false;

function getPlayerChoice() {
    const choices = ['Paper', 'Rock', 'Scissors'];
    const selection = prompt('Rock, Paper or Scissors');
    if (!(choices.includes(selection))) {
        alert('Invalid choice, we chose Rock for you!');
        return;
    }
    return selection;
}


function getComputerChoice() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return 'Rock';
    } else if (randomValue < 0.67) {
        return 'Paper';
    } else return 'Scissors';
}

const getWinner = (cChoice, pChoice = 'Rock') =>
    cChoice === pChoice
        ? 'Draw'
        : cChoice === 'Rock' && pChoice === 'Paper' ||
        cChoice === 'Paper' && pChoice === 'Scissors' ||
        cChoice === 'Scissors' && pChoice === 'Rock'
            ? 'Player_Wins'
            : 'Computer_Wins';

// if (cChoice === pChoice) {
//     return 'Draw';
// } else if (
//     cChoice === 'Rock' && pChoice === 'Paper' ||
//     cChoice === 'Paper' && pChoice === 'Scissors' ||
//     cChoice === 'Scissors' && pChoice === 'Rock'
// ) {
//     return 'Player_Wins';
// } else return 'Computer_Wins';


// Calling another method
startGameBtn.addEventListener('click', function () {

    if (gameIsRunning) {
        return;
    }

    gameIsRunning = true;
    // start();
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    let winner;
    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice);
    }

    let message = `You picked ${playerChoice || 'Rock'}, \n computer picked ${computerChoice}, \n therefore you `;
    if (winner === 'Draw') {
        message += 'had a draw.';
    } else if (winner === 'Player_Wins') {
        message += 'won.'
    } else message += 'lost.';

    // alert(message);
    console.log(message);

    gameIsRunning = false;
});

// Not related to the game

/* / Replaced with the combine function \

const sumUp = (resultHandler, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    }
    let sum = 0;
    for (const num of numbers) {
        sum += validateNumber(num);
    }

    resultHandler(sum);
}

const subtractUp = function (resultHandler, ...numbers) {
    let sum = 0;
    for (const num of numbers) { // Don't use this magic operator.
        sum += num;
    }

    resultHandler(sum);
}


 */

const combine = (resultHandler, operator, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    }
    let sum = 0;
    for (const num of numbers) {
        if (operator === 'ADD') {
            sum += validateNumber(num);
        } else if (operator === 'SUBTRACT') {
            sum -= validateNumber(num);
        }
    }

    // resultHandler(sum, operator === 'ADD' ? 'adding' : 'subtracting');
    resultHandler(sum);
}

const showResult = (key, result) => {
    alert(`The result after ${key} all numbers is: ${result}`);
}

combine(showResult.bind(this, 'adding'), 'ADD', 56, 99, -25, 123, 'test', -77);
combine(showResult.bind(this, 'subtracting'), 'SUBTRACT', 8, 120, -150, 66);



// This is a function stored in a variable.
const start = function () {
    console.log("Starting Game...");
}; // You must write the semicolon here.

const person = {
    name: 'Amr',
    greet: function () {
        console.log(`Hello, ${name}`);
    }
}

// Calling a method
person.greet();