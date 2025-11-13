const express = require('express');
const mongoose = require('mongoose');
const commentRoutes = require('./routes/commentRoutes');
const { errorHandler } = require('./middleware/errorHandler');
const { connectDB } = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api/v1/comments', commentRoutes);

// Error handling middleware
app.use(errorHandler);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Comment service running on port ${PORT}`);
});