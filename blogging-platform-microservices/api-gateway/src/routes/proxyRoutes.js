const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const setProxyRoutes = (app) => {
    const userServiceUrl = 'http://user-service:3001';
    const postServiceUrl = 'http://post-service:3002';
    const commentServiceUrl = 'http://comment-service:3003';

    app.use('/api/users', createProxyMiddleware({ target: userServiceUrl, changeOrigin: true }));
    app.use('/api/posts', createProxyMiddleware({ target: postServiceUrl, changeOrigin: true }));
    app.use('/api/comments', createProxyMiddleware({ target: commentServiceUrl, changeOrigin: true }));
};

module.exports = setProxyRoutes;