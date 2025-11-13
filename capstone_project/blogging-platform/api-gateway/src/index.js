const express = require('express');
const cors = require('./middleware/cors');
const rateLimit = require('./middleware/rateLimit');
const authProxy = require('./middleware/authProxy');
const proxyRoutes = require('./routes/proxyRoutes');
const healthCheck = require('./health/healthCheck');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors);
app.use(rateLimit);
app.use(express.json());
app.use(authProxy);

// Routes
app.use('/api', proxyRoutes);
app.use('/health', healthCheck);

// Start server
app.listen(PORT, () => {
    console.log(`API Gateway is running on http://localhost:${PORT}`);
});