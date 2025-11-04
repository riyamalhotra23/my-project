const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const setProxyRoutes = require('./routes/proxyRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

setProxyRoutes(app);

app.listen(PORT, () => {
    console.log(`API Gateway is running on http://localhost:${PORT}`);
});