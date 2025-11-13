const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const { json, urlencoded } = express;
const cors = require('cors');
const { PORT, MONGO_URI } = process.env;

const app = express();

// Middleware
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use('/api/v1/posts', postRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('Post Service is healthy');
});

// Database connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Post Service running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });