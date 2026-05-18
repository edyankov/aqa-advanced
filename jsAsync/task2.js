// Task 2: fetch with then() / catch(), Promise.all, Promise.race

// Fetch request generator (pattern from the lesson)
const fetchGenerator = (url) => fetch(url, { method: 'GET' });

// Function for getting a todo
const getTodo = () => {
    return fetchGenerator('https://jsonplaceholder.typicode.com/todos/1')
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

// Function for getting a user
const getUser = () => {
    return fetchGenerator('https://jsonplaceholder.typicode.com/users/1')
        .then((res) => res.json())
        .catch((err) => console.log(err));
};

// Promise.all — waits until ALL promises are resolved
const allResults = Promise.all([getTodo(), getUser()])
    .then((res) => {
        console.log('Promise.all result:', res);
        return res;
    })
    .catch((err) => console.log(err));

// Promise.race — returns the result of the FIRST resolved promise
const raceResult = Promise.race([getTodo(), getUser()])
    .then((res) => {
        console.log('Promise.race result:', res);
        return res;
    })
    .catch((err) => console.log(err));

console.log('After Promise.all and Promise.race calls');