const express = require('express');
const mongoose = require('mongoose');
const commentRoutes = require('./routes/commentRoutes');
const dbConfig = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/comments', commentRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Comment service running on port ${PORT}`);
});