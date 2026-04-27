let pq = initPriorityQueue("min"); // smaller number = higher priority
let currentOrder = [];

// Generate order using priority queue
function generateOrder() {
    pq = initPriorityQueue("min");
    currentOrder = [];

    let foods = ["burger", "fries", "soda", "milkshake", "mustard", "ketchup"];
    let length = Math.floor(Math.random() * 4) + 2;

    for (let i = 0; i < length; i++) {
        let food = foods[Math.floor(Math.random() * foods.length)];

        pq.enqueue(food, i); // priority = order position
    }

    rebuildQueueFromPQ();
    updateReceipt();
}

// Convert PQ → array (so UI works easily)
function rebuildQueueFromPQ() {
    currentOrder = [];

    let size = pq.size();
    for (let i = 0; i < size; i++) {
        let item = pq.dequeue();
        if (item) currentOrder.push(item);
    }

    // rebuild PQ again so we don't lose it
    currentOrder.forEach((item, index) => {
        pq.enqueue(item, index);
    });
}

// Handle clicks
function handleFoodClick(food) {
    let next = pq.peek();

    if (food === next) {
        pq.dequeue();
        console.log("Correct");
    } else {
        console.log("Wrong");
    }

    rebuildQueueFromPQ();
    updateReceipt();

    if (pq.size() === 0) {
        setTimeout(generateOrder, 1000);
    }
}

// Update UI
function updateReceipt() {
    let receipt = document.getElementById("receipt");

    receipt.innerHTML = currentOrder
        .map((item, i) => `<p>${i + 1}. ${item}</p>`)
        .join("");
}

// Start game
window.onload = generateOrder;