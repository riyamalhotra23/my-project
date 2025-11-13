const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(authMiddleware);

// Routes
app.use('/api/v1/users', userRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => {
            console.log(`User service running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });