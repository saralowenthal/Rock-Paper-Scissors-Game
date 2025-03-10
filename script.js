// Sara Lowenthal 3/10/25

let userChoice = "";
const choices = ["rock", "paper", "scissors"];

// Function to handle user choice via click
function getUsersChoice(event) {
    userChoice = event.target.id;
    playGame();
}

// Function to handle user choice via keyboard
function handleKeyPress(event) {

    document.querySelectorAll(".icons").forEach(icon => {
        icon.classList.remove("selected");
    });
    
    const key = event.key.toLowerCase();
    if (key === "r") userChoice = "rock";
    else if (key === "p") userChoice = "paper";
    else if (key === "s") userChoice = "scissors";
    else return;  // Ignore other keys

    document.getElementById(userChoice).classList.add("selected");
    playGame();
}

let gameOver = false;
function playGame() {
    if (gameOver) return;  // Prevent further input

    const randomIndex = Math.floor(Math.random() * choices.length);
    const compChoice = choices[randomIndex];

    document.getElementById("computerChoiceDisplay").innerText = `Computer chose: ${compChoice}`;

    let resultMessage = "";
    if (userChoice === compChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        resultMessage = "You win!";
    } else {
        resultMessage = "Computer wins!";
    }

    document.getElementById("resultMessage").innerText = resultMessage;
    gameOver = true;
}

function resetGame() {
    userChoice = "";
    gameOver = false;
    document.getElementById("computerChoiceDisplay").innerText = "";
    document.getElementById("resultMessage").innerText = "";
    document.querySelectorAll(".icons").forEach(icon => icon.classList.remove("selected"));
}

// Event Listeners
document.querySelectorAll(".icons").forEach(icon => {
    icon.addEventListener("click", getUsersChoice);
});
document.addEventListener("keydown", handleKeyPress);
document.getElementById("resetButton").addEventListener("click", resetGame);
