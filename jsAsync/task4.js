// Task 4 (optional): classes with methods for working with API

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Base class — contains shared logic for both clients
class BaseApiClient {
    // Public method — will be available in child classes through this
    fetchJson(url) {
        return fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .catch((err) => console.log(err));
    }
}

// Class with methods using then/catch (as in task2)
class ApiClient extends BaseApiClient {
    getTodo(id) {
        return this.fetchJson(`${BASE_URL}/todos/${id}`);
    }

    getUser(id) {
        return this.fetchJson(`${BASE_URL}/users/${id}`);
    }
}

// Class with methods using async/await (as in task3)
class AsyncApiClient extends BaseApiClient {
    async getTodo(id) {
        return this.fetchJson(`${BASE_URL}/todos/${id}`);
    }

    async getUser(id) {
        return this.fetchJson(`${BASE_URL}/users/${id}`);
    }
}

// --- Using ApiClient (with then/catch) ---
const client = new ApiClient();

Promise.all([client.getTodo(1), client.getUser(1)])
    .then((res) => console.log('ApiClient Promise.all:', res))
    .catch((err) => console.log(err));

// --- Using AsyncApiClient (with async/await) ---
const asyncClient = new AsyncApiClient();

const resolver = async () => {
    try {
        const res = await Promise.all([asyncClient.getTodo(1), asyncClient.getUser(1)]);
        console.log('AsyncApiClient Promise.all:', res);
    } catch (error) {
        console.log(error);
    }
};

resolver();
console.log('After resolver call');
