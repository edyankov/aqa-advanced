// Task 4 (optional): classes with methods for working with API

const fetchGenerator = (url) => fetch(url, { method: 'GET' });

// Class with methods using then/catch (as in task2)
class ApiClient {
    getTodo() {
        return fetchGenerator('https://jsonplaceholder.typicode.com/todos/1')
            .then((res) => res.json())
            .catch((err) => console.log(err));
    }

    getUser() {
        return fetchGenerator('https://jsonplaceholder.typicode.com/users/1')
            .then((res) => res.json())
            .catch((err) => console.log(err));
    }
}

// Class with methods using async/await (as in task3)
class AsyncApiClient {
    async getTodo() {
        const res = await fetchGenerator('https://jsonplaceholder.typicode.com/todos/1');
        return res.json();
    }

    async getUser() {
        const res = await fetchGenerator('https://jsonplaceholder.typicode.com/users/1');
        return res.json();
    }
}

// --- Using ApiClient (with then/catch) ---
const client = new ApiClient();

Promise.all([client.getTodo(), client.getUser()])
    .then((res) => console.log('ApiClient Promise.all:', res))
    .catch((err) => console.log(err));

// --- Using AsyncApiClient (with async/await) ---
const asyncClient = new AsyncApiClient();

const resolver = async () => {
    try {
        const res = await Promise.all([asyncClient.getTodo(), asyncClient.getUser()]);
        console.log('AsyncApiClient Promise.all:', res);
    } catch (error) {
        console.log(error);
    }
};

resolver();
console.log('After resolver call');