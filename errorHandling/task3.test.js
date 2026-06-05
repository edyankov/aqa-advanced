// Task 3: Mocking Axios in Jest

import axios from 'axios';

// Mock the entire axios module — all its methods become jest.fn()
jest.mock('axios');

// Function to be tested with mocks
export async function getUserData(userId) {
    try {
        const response = await axios.get(`https://api.example.com/users/${userId}`);
        return {
            success: true,
            data: response.data,
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
        };
    }
}

// === Tests ===

describe('Task 3: Mocking Axios', () => {
    // Clear mocks after each test so tests do not affect each other
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should return user data on a successful request', async () => {
        // Prepare fake response data
        const mockUser = {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
        };

        // Configure the mock: when axios.get is called, return mockUser
        axios.get.mockResolvedValue({
            status: 200,
            data: mockUser,
        });

        const result = await getUserData(1);

        // Verify the result
        expect(result.success).toBe(true);
        expect(result.data).toEqual(mockUser);

        // Verify that axios.get was called with the correct URL
        expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/1');
        expect(axios.get).toHaveBeenCalledTimes(1);
    });

    test('should handle a failed request (network error)', async () => {
        // Configure the mock to simulate a network error
        axios.get.mockRejectedValue(new Error('Network Error'));

        const result = await getUserData(1);

        expect(result.success).toBe(false);
        expect(result.error).toBe('Network Error');
    });

    test('should handle a 404 error', async () => {
        // Simulate a 404 error (the way axios returns it)
        const errorResponse = {
            response: {
                status: 404,
                data: { message: 'User not found' },
            },
            message: 'Request failed with status code 404',
        };

        axios.get.mockRejectedValue(errorResponse);

        const result = await getUserData(999);

        expect(result.success).toBe(false);
        expect(result.error).toBe('Request failed with status code 404');
    });

    test('should call the API with the correct URL for different userId', async () => {
        axios.get.mockResolvedValue({
            status: 200,
            data: { id: 42, name: 'Test User' },
        });

        await getUserData(42);

        expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/42');
    });

    test('should handle multiple sequential calls', async () => {
        // First call succeeds, second call fails
        axios.get
            .mockResolvedValueOnce({ status: 200, data: { id: 1, name: 'Alice' } })
            .mockRejectedValueOnce(new Error('Server Error'));

        const result1 = await getUserData(1);
        const result2 = await getUserData(2);

        expect(result1.success).toBe(true);
        expect(result1.data.name).toBe('Alice');

        expect(result2.success).toBe(false);
        expect(result2.error).toBe('Server Error');

        expect(axios.get).toHaveBeenCalledTimes(2);
    });
});
