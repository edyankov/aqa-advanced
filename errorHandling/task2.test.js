// Task 2: Testing custom headers and query parameters

import axios from 'axios';

// Function with custom headers and parameters
export async function fetchWithCustomConfig(userId) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'X-Custom-Header': 'TestValue',
            Authorization: 'Bearer test-token-123',
            Accept: 'application/json',
        },
        params: {
            userId: userId,
            _limit: 5,
        },
    });
    return response;
}

// === Tests ===

describe('Task 2: Request headers and query parameters', () => {
    test('should successfully make a request and return data', async () => {
        const response = await fetchWithCustomConfig(1);

        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
    });

    test('should include custom headers in the request config', async () => {
        const response = await fetchWithCustomConfig(1);

        // Verify that headers were passed in the request configuration
        expect(response.config.headers['X-Custom-Header']).toBe('TestValue');
        expect(response.config.headers['Authorization']).toBe('Bearer test-token-123');
        expect(response.config.headers['Accept']).toBe('application/json');
    });

    test('should include query parameters in the request config', async () => {
        const response = await fetchWithCustomConfig(1);

        // Verify query parameters
        expect(response.config.params).toEqual({
            userId: 1,
            _limit: 5,
        });
    });

    test('should filter results according to query parameters (userId=1)', async () => {
        const response = await fetchWithCustomConfig(1);

        // Verify that the server actually applied the userId parameter
        expect(response.data.length).toBeLessThanOrEqual(5);
        response.data.forEach((post) => {
            expect(post.userId).toBe(1);
        });
    });
});
