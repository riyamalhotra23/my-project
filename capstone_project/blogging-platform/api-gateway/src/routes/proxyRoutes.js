const express = require('express');
const router = express.Router();
const axios = require('axios');

// User Service Routes
router.use('/users', require('../../services/user-service/src/routes/userRoutes'));

// Post Service Routes
router.use('/posts', require('../../services/post-service/src/routes/postRoutes'));

// Comment Service Routes
router.use('/comments', require('../../services/comment-service/src/routes/commentRoutes'));

// Proxy for User Service
router.all('/users/*', async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: `http://user-service${req.originalUrl}`,
            data: req.body,
            headers: {
                Authorization: req.headers.authorization,
            },
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : { message: 'Internal Server Error' });
    }
});

// Proxy for Post Service
router.all('/posts/*', async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: `http://post-service${req.originalUrl}`,
            data: req.body,
            headers: {
                Authorization: req.headers.authorization,
            },
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : { message: 'Internal Server Error' });
    }
});

// Proxy for Comment Service
router.all('/comments/*', async (req, res) => {
    try {
        const response = await axios({
            method: req.method,
            url: `http://comment-service${req.originalUrl}`,
            data: req.body,
            headers: {
                Authorization: req.headers.authorization,
            },
        });
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : { message: 'Internal Server Error' });
    }
});

module.exports = router;