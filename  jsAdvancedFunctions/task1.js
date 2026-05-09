// Task 1: handleNum function with callbacks for even/odd numbers
function handleNum(num, onEven, onOdd) {
    if (num % 2 === 0) {
        onEven();
    } else {
        onOdd();
    }
}
// Callback functions
function handleEven() {
    console.log("number is even");
}
function handleOdd() {
    console.log("number is odd");
}
// Calls with different numbers
handleNum(4, handleEven, handleOdd);  // number is even
handleNum(7, handleEven, handleOdd);  // number is odd