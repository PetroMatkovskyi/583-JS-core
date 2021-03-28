let questions = confirm('Do you want to play a game?');
const prize = [2, 5, 10];
let stepForPrize = 1;
let stepForRange = 1;
let attemptsLeft = 3;
let totalPrize = 0;
let possiblePrize;
let userEnter
let randomValue;

if (!questions) {
    console.log(`You did not become a millionaire`)
} else {
    randomNumber()
    enterUserNumber()
}

function randomNumber() {
    randomValue = Math.ceil(Math.random() * 5 * stepForRange);
    console.log(randomValue)
}

function enterUserNumber() {
    possiblePrize = prize[attemptsLeft - 1] * stepForPrize;
    userEnter = prompt(`Enter a number form 0 to ${5 * stepForRange}
  Attempts left: ${attemptsLeft}
  Total prize: ${totalPrize}
  Possibel prize on curent attempt: ${possiblePrize}`, '')
    gameBody()
};

function gameBody() {
    attemptsLeft--
    if (userEnter == randomValue) {
        totalPrize += possiblePrize;
        attemptsLeft = 3
        stepForPrize *= 3;
        stepForRange *= 2;
        prize.forEach(item => item * 3)
        let nextLevel = confirm('Do you want to continue the game?')
        if (nextLevel) {
            randomNumber()
            enterUserNumber()
        } else {
            console.log(`Your prize is: ${totalPrize}`)
            newgameBody()
        }
    } else if (attemptsLeft > 0) {
        enterUserNumber()
    } else {
        console.log(`Your prize is: ${totalPrize}`)
        newgameBody()
    }
}

function newgameBody() {
    let newGame = confirm('Do you want to play again?')
    if (newGame) {
        attemptsLeft = 3;
        stepForPrize = 1;
        stepForRange = 1;
        totalPrize = 0;
        randomNumber()
        enterUserNumber()
    } else {
        document.write(`<h1>THE END</h1>`)
    }
}
