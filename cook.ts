let orderQueue: string[] = ["burger", "fries", "soda", "milkshake"];

function handleFoodClick(food: string) {
    let currentItem = orderQueue[0];

    if (food === currentItem) {
        console.log("Correct!");
        orderQueue.shift(); // removes first item (queue behavior)
    } else {
        console.log("Wrong item!");
    }

    console.log("Remaining order:", orderQueue);
}