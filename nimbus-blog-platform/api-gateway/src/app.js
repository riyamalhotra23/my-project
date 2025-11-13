const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const proxyRoutes = require('./routes/proxyRoutes');
const gatewayConfig = require('./config/gatewayConfig');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

// Proxy Routes
app.use('/api/v1', proxyRoutes);

// Health Check Endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'UP' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API Gateway is running on port ${PORT}`);
});