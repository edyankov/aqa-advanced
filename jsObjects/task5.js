// Task 5: Iterating over an array of objects using for...of with destructuring

const users = [
    { name: 'Emily Johnson', email: 'emily.johnson@example.com', age: 25 },
    { name: 'Michael Brown', email: 'michael.brown@example.com', age: 32 },
    { name: 'Sophia Williams', email: 'sophia.williams@example.com', age: 28 },
];

// Destructuring directly in the loop syntax
for (const { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
