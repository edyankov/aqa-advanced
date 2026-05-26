// Task 3: Merging objects using spread

const car1 = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
};

const car2 = {
    brand: 'Honda',
    model: 'Civic',
    owner: 'Michael',
};

// Spread merges properties. If keys are the same (brand, model) —
// values from car2 overwrite values from car1 because car2 comes later.
const car3 = { ...car1, ...car2 };

console.log(car3);
