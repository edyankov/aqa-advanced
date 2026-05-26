// Task 4: Adding and removing object properties

const person = {
    firstName: 'Emily',
    lastName: 'Johnson',
    age: 30,
};

// Adding a new property email
person.email = 'emily.johnson@example.com';

// Removing the age property using delete operator
delete person.age;

console.log(person);
