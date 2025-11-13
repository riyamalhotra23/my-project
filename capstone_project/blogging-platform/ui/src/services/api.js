import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1'; // Adjust the base URL as needed

// User API calls
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_BASE_URL}/users/register`, userData);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_BASE_URL}/users/login`, credentials);
    return response.data;
};

export const getUser = async (userId) => {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
};

// Post API calls
export const createPost = async (postData, token) => {
    const response = await axios.post(`${API_BASE_URL}/posts`, postData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const getPosts = async () => {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    return response.data;
};

// Comment API calls
export const addComment = async (postId, commentData, token) => {
    const response = await axios.post(`${API_BASE_URL}/posts/${postId}/comments`, commentData, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const getComments = async (postId) => {
    const response = await axios.get(`${API_BASE_URL}/posts/${postId}/comments`);
    return response.data;
};