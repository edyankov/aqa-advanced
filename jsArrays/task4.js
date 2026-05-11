// Task 4: Filtering even numbers using filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Keep only the numbers where the remainder after division by 2 equals 0
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);