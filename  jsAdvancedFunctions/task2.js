// Task 2: Recursive counter
function countDown(num) {
    console.log(num);
    // Base case — stop the recursion when num becomes <= 0
    if (num - 1 <= 0) {
        return;
    }
    // Recursive call with the decreased value
    countDown(num - 1);
}
countDown(5);
