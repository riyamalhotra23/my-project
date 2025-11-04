import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Update with your API Gateway URL

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/posts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export const fetchComments = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/comments`);
        return response.data;
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw error;
    }
};

export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users`, userData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const createPost = async (postData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/posts`, postData);
        return response.data;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
};

export const createComment = async (commentData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/comments`, commentData);
        return response.data;
    } catch (error) {
        console.error('Error creating comment:', error);
        throw error;
    }
};