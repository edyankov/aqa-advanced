// Task 3: Sum of array elements using reduce

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// accumulator — accumulates the sum, currentValue — current element
// 0 — initial value of accumulator
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum:", sum);