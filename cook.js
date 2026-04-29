let currentOrder = [];
let time = 30;
let timerInterval;
let score = 0;

// START GAME
document.addEventListener("DOMContentLoaded", () => {
    generateOrder();
    startTimer();
    updateScore();
});

// GENERATE RANDOM ORDER
function generateOrder() {
    currentOrder = [];

    let foods = ["burger", "fries", "soda", "milkshake", "mustard", "ketchup"];
    let length = Math.floor(Math.random() * 4) + 2;

    for (let i = 0; i < length; i++) {
        let randomFood = foods[Math.floor(Math.random() * foods.length)];
        currentOrder.push(randomFood);
    }

    updateReceipt();
}

// HANDLE CLICK
function handleFoodClick(food) {
    if (food === currentOrder[0]) {
        currentOrder.shift(); // remove first item
        console.log("Correct");
    } else {
        alert("Wrong order! Follow the list.");
        return;
    }

    updateReceipt();

    // NEW ORDER
    if (currentOrder.length === 0) {
        score++;
        updateScore();
        time = 30;
        setTimeout(generateOrder, 1000);
    }
}

// UPDATE RECEIPT UI
function updateReceipt() {
    let receipt = document.getElementById("receipt");

    receipt.innerHTML = currentOrder
        .map((item, i) => `<p>${i + 1}. ${item}</p>`)
        .join("");
}

// TIMER
function startTimer() {
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        time--;
        document.getElementById("timer").textContent = "Time: " + time;

        if (time <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Score reset.");

            score = 0;
            time = 30;

            updateScore();
            generateOrder();
            startTimer();
        }
    }, 1000);
}

//Score
function updateScore() {
    document.getElementById("score").textContent = "Score: " + score;
}