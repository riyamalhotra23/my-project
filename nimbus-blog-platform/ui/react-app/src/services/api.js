import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api/v1';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
});

// User Service API calls
export const registerUser = async (userData) => {
    return apiClient.post('/users/register', userData);
};

export const loginUser = async (credentials) => {
    return apiClient.post('/users/login', credentials);
};

// Post Service API calls
export const fetchPosts = async (params) => {
    return apiClient.get('/posts', { params });
};

export const createPost = async (postData) => {
    return apiClient.post('/posts', postData);
};

export const updatePost = async (postId, postData) => {
    return apiClient.put(`/posts/${postId}`, postData);
};

export const deletePost = async (postId) => {
    return apiClient.delete(`/posts/${postId}`);
};

// Comment Service API calls
export const fetchComments = async (postId) => {
    return apiClient.get(`/posts/${postId}/comments`);
};

export const addComment = async (postId, commentData) => {
    return apiClient.post(`/posts/${postId}/comments`, commentData);
};

export const deleteComment = async (postId, commentId) => {
    return apiClient.delete(`/posts/${postId}/comments/${commentId}`);
};