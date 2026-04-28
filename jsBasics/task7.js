// Task 3: Generating a multiplication table

const number = 7;

// For loop
console.log("Multiplication table (for):");
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// While loop
console.log("Multiplication table (while):");
let i = 1;
while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}