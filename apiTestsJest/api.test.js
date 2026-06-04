// Test scenario for the JSONPlaceholder API (Jest)

import apiClient from './apiClient.js';

describe('JSONPlaceholder API Tests', () => {
    // === GET requests ===

    test('GET /posts — retrieve a list of all posts', async () => {
        const response = await apiClient.get('/posts');

        // Verify status code
        expect(response.status).toBe(200);

        // Verify that an array is returned
        expect(Array.isArray(response.data)).toBe(true);

        // JSONPlaceholder always returns 100 posts
        expect(response.data.length).toBe(100);

        // Verify the structure of the first post
        const firstPost = response.data[0];
        expect(firstPost).toHaveProperty('userId');
        expect(firstPost).toHaveProperty('id');
        expect(firstPost).toHaveProperty('title');
        expect(firstPost).toHaveProperty('body');
    });

    test('GET /posts/1 — retrieve a specific post by id', async () => {
        const response = await apiClient.get('/posts/1');

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
        expect(response.data.userId).toBe(1);
        expect(typeof response.data.title).toBe('string');
        expect(typeof response.data.body).toBe('string');
    });

    test('GET /users/1 — retrieve user information', async () => {
        const response = await apiClient.get('/users/1');

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(1);
        expect(response.data.name).toBe('Leanne Graham');
        expect(response.data.username).toBe('Bret');
        expect(response.data.email).toBe('Sincere@april.biz');

        // Verify nested address structure
        expect(response.data.address).toBeDefined();
        expect(typeof response.data.address.city).toBe('string');
        expect(response.data.address.geo).toBeDefined();
    });

    // === POST requests ===

    test('POST /posts — create a new post', async () => {
        const newPost = {
            title: 'Test Post',
            body: 'This is the body of a test post',
            userId: 1,
        };

        const response = await apiClient.post('/posts', newPost);

        // JSONPlaceholder returns 201 for successful creation
        expect(response.status).toBe(201);

        // Verify that the response contains our data
        expect(response.data.title).toBe(newPost.title);
        expect(response.data.body).toBe(newPost.body);
        expect(response.data.userId).toBe(newPost.userId);

        // JSONPlaceholder adds an id to the newly created object
        expect(response.data.id).toBeDefined();
        expect(typeof response.data.id).toBe('number');
    });

    test('POST /posts — create a post with minimal data', async () => {
        const minimalPost = {
            title: 'Minimal Post',
            userId: 5,
        };

        const response = await apiClient.post('/posts', minimalPost);

        expect(response.status).toBe(201);
        expect(response.data.title).toBe('Minimal Post');
        expect(response.data.userId).toBe(5);
        expect(response.data.id).toBeDefined();
    });
});
