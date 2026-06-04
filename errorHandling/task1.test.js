// Task 1: Testing error handling for an invalid URL

import axios from 'axios';

// Function that intentionally sends a request to an invalid URL
export async function fetchFromInvalidUrl() {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/invalid-endpoint-12345'
        );
        return response.data;
    } catch (error) {
        // Create an informative error message
        // Pass the original error as cause — preserving context for debugging
        if (error.response) {
            // Server responded with a non-2xx status code (e.g. 404)
            throw new Error(`Request failed with status ${error.response.status}`, {
                cause: error,
            });
        } else if (error.request) {
            // Request was sent, but no response was received (network error)
            throw new Error('Network error: no response received', { cause: error });
        } else {
            // Request setup error
            throw new Error(`Request setup error: ${error.message}`, { cause: error });
        }
    }
}

// === Tests ===

describe('Task 1: Error handling for an invalid URL', () => {
    test('should throw an error when requesting an invalid URL', async () => {
        // Verify that the function throws an error
        await expect(fetchFromInvalidUrl()).rejects.toThrow();
    });

    test('should throw an error with a 404 status message', async () => {
        // Verify the exact error message
        await expect(fetchFromInvalidUrl()).rejects.toThrow('Request failed with status 404');
    });

    test('error should be an instance of Error', async () => {
        // Verify the error type
        await expect(fetchFromInvalidUrl()).rejects.toBeInstanceOf(Error);
    });
});
