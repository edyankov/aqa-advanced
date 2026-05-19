// Task 2: fetch with then() / catch(), Promise.all, Promise.race

// Fetch request generator (pattern from the lesson)
const fetchGenerator = (url) => fetch(url, { method: 'GET' });

// Function for getting todo by id
const getTodo = (id) => {
    return fetchGenerator(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

// Function for getting user by id
const getUser = (id) => {
    return fetchGenerator(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

// Promise.all — waits until ALL promises are resolved
const allResults = Promise.all([getTodo(1), getUser(1)])
    .then((res) => {
        console.log('Promise.all result:', res);
        return res;
    })
    .catch((err) => console.log(err));

// Promise.race — returns the result of the FIRST resolved promise
const raceResult = Promise.race([getTodo(1), getUser(1)])
    .then((res) => {
        console.log('Promise.race result:', res);
        return res;
    })
    .catch((err) => console.log(err));

console.log('After Promise.all and Promise.race calls');