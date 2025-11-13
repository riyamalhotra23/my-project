const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const { errorHandler } = require('./middleware/errorHandler');
const { connectDB } = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use('/api/v1/posts', postRoutes);
app.use(errorHandler);

// Database connection
connectDB();

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Post Service is running' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Post Service running on port ${PORT}`);
});