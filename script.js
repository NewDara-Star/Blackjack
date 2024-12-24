let card = document.querySelector("#cards");
let sum = document.querySelector("#sum");
let message = document.querySelector("#message");
let cards = []; 
let totalSum = 0;
let firstCard, secondCard;


function renderGame() {
    sum.textContent = "Sum: " + totalSum;
    card.textContent = "Cards: " + cards.join("+ ");

    if (totalSum <= 20) {
        message.textContent = "Do you want to draw a new card?";
    } else if (totalSum === 21) {
        message.textContent = "You've got Blackjack!";
        alert("You've got Blackjack!🙀🎉");
    } else {
        message.textContent = "You're out of the game!";
        alert("You're out of the game!😭");
    }
}

function startGame() {
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    totalSum = firstCard + secondCard;
    console.log("this code works");
    renderGame();
}

function newCard() {
    if (totalSum < 21) {
        let newCard = getRandomCard();
        cards.push(newCard);
        totalSum += newCard; 
        renderGame();
    } else {
        console.log("Cannot draw a new card. Game is over.");
    }
}
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}  

function restartGame() {
    cards = [];
    totalSum = 0;
    
    card.textContent = "Cards: ";
    sum.textContent = "Sum: 0";
    message.textContent = "Start a new game!";
}


