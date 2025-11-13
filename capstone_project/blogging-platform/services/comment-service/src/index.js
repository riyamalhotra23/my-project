const express = require('express');
const mongoose = require('mongoose');
const commentRoutes = require('./routes/commentRoutes');
const { errorHandler } = require('./middleware/errorHandler');
const { connectDB } = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use('/api/v1/comments', commentRoutes);
app.use(errorHandler);

// Database connection
connectDB();

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Comment service running on port ${PORT}`);
});