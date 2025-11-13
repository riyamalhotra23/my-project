const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorHandler');
const { connectDB } = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
connectDB();

// Routes
app.use('/api/v1/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
});