// Test scenario for the JSONPlaceholder API

import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import apiClient from './apiClient.js';

describe('JSONPlaceholder API Tests', () => {
    // === GET requests ===

    test('GET /posts — retrieve a list of all posts', async () => {
        const response = await apiClient.get('/posts');

        // Verify status code
        assert.strictEqual(response.status, 200, 'Status should be 200');

        // Verify that an array is returned
        assert.ok(Array.isArray(response.data), 'Data should be an array');

        // Verify the number of posts (JSONPlaceholder always returns 100 posts)
        assert.strictEqual(response.data.length, 100, 'There should be 100 posts');

        // Verify the structure of the first post
        const firstPost = response.data[0];
        assert.ok('userId' in firstPost, 'Post should contain userId field');
        assert.ok('id' in firstPost, 'Post should contain id field');
        assert.ok('title' in firstPost, 'Post should contain title field');
        assert.ok('body' in firstPost, 'Post should contain body field');
    });

    test('GET /posts/1 — retrieve a specific post by id', async () => {
        const response = await apiClient.get('/posts/1');

        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.data.id, 1, 'id should equal 1');
        assert.strictEqual(response.data.userId, 1, 'userId should equal 1');
        assert.strictEqual(typeof response.data.title, 'string', 'title should be a string');
        assert.strictEqual(typeof response.data.body, 'string', 'body should be a string');
    });

    test('GET /users/1 — retrieve user information', async () => {
        const response = await apiClient.get('/users/1');

        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.data.id, 1);
        assert.strictEqual(response.data.name, 'Leanne Graham');
        assert.strictEqual(response.data.username, 'Bret');
        assert.strictEqual(response.data.email, 'Sincere@april.biz');

        // Verify nested address structure
        assert.ok(response.data.address, 'User should have an address');
        assert.strictEqual(typeof response.data.address.city, 'string');
        assert.ok(response.data.address.geo, 'Address should contain geo');
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
        assert.strictEqual(response.status, 201, 'Status should be 201 (Created)');

        // Verify that the response contains our data
        assert.strictEqual(response.data.title, newPost.title);
        assert.strictEqual(response.data.body, newPost.body);
        assert.strictEqual(response.data.userId, newPost.userId);

        // JSONPlaceholder adds an id to the newly created object
        assert.ok(response.data.id, 'New post should receive an id');
        assert.strictEqual(typeof response.data.id, 'number');
    });

    test('POST /posts — create a post with minimal data', async () => {
        const minimalPost = {
            title: 'Minimal Post',
            userId: 5,
        };

        const response = await apiClient.post('/posts', minimalPost);

        assert.strictEqual(response.status, 201);
        assert.strictEqual(response.data.title, 'Minimal Post');
        assert.strictEqual(response.data.userId, 5);
        assert.ok(response.data.id);
    });
});
