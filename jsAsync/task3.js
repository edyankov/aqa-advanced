// Task 3: The same but using async/await

// Fetch request generator (pattern from the lesson)
const fetchGenerator = (url) => fetch(url, { method: 'GET' });

// Async functions for getting todo and user
const getTodo = async () => {
    const res = await fetchGenerator('https://jsonplaceholder.typicode.com/todos/1');
    return res.json();
};

const getUser = async () => {
    const res = await fetchGenerator('https://jsonplaceholder.typicode.com/users/1');
    return res.json();
};

// Resolver function for running requests (fetchResolver pattern from the lesson)
const fetchResolver = async () => {
    try {
        // Promise.all — both requests in parallel
        const allResults = await Promise.all([getTodo(), getUser()]);
        console.log('Promise.all result:', allResults);

        // Promise.race — race winner
        const raceResult = await Promise.race([getTodo(), getUser()]);
        console.log('Promise.race result:', raceResult);
    } catch (error) {
        console.log(error);
    }
};

fetchResolver();
console.log('After fetchResolver call');