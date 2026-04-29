// Task 3: Checking the possibility of placing an order
 
function checkOrder(available, ordered) {
    if (ordered === 0) {
        return "Your order is empty";
    }
    if (ordered > available) {
        return "Your order is too large, we don't have enough goods.";
    }
    return "Your order is accepted";
}
 
// Checking all three cases
console.log(checkOrder(10, 0));   // Your order is empty
console.log(checkOrder(10, 15));  // Your order is too large...
console.log(checkOrder(10, 5));   // Your order is accepted