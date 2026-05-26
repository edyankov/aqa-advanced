// Task 6: Sorting an array (without mutating the original)

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

// Copy the array using the spread operator because .sort() mutates the original
const sortedNumbers = [...numbersList].sort((a, b) => a - b);

console.log('Original array:', numbersList);
console.log('Sorted array:', sortedNumbers);
