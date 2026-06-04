// API client with configured interceptors for logging

import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor for logging OUTGOING requests
apiClient.interceptors.request.use(
    (config) => {
        console.log(`\n→ [REQUEST] ${config.method.toUpperCase()} ${config.baseURL}${config.url}`);
        if (config.data) {
            console.log('  Request body:', JSON.stringify(config.data));
        }
        return config;
    },
    (error) => {
        console.log('✗ [REQUEST ERROR]', error.message);
        return Promise.reject(error);
    }
);

// Interceptor for logging INCOMING responses
apiClient.interceptors.response.use(
    (response) => {
        console.log(`← [RESPONSE] ${response.status} ${response.statusText}`);
        return response;
    },
    (error) => {
        if (error.response) {
            console.log(`✗ [RESPONSE ERROR] ${error.response.status} ${error.response.statusText}`);
        } else {
            console.log('✗ [RESPONSE ERROR]', error.message);
        }
        return Promise.reject(error);
    }
);

export default apiClient;
