const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const router = express.Router();

// User Service Proxy
router.use('/api/v1/users', createProxyMiddleware({
    target: 'http://user-service:3000',
    changeOrigin: true,
    pathRewrite: {
        '^/api/v1/users': '/api/v1/users',
    },
}));

// Post Service Proxy
router.use('/api/v1/posts', createProxyMiddleware({
    target: 'http://post-service:3000',
    changeOrigin: true,
    pathRewrite: {
        '^/api/v1/posts': '/api/v1/posts',
    },
}));

// Comment Service Proxy
router.use('/api/v1/comments', createProxyMiddleware({
    target: 'http://comment-service:3000',
    changeOrigin: true,
    pathRewrite: {
        '^/api/v1/comments': '/api/v1/comments',
    },
}));

module.exports = router;