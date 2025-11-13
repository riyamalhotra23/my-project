const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3000', // Adjust this to your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
};

module.exports = cors(corsOptions);