const gatewayConfig = {
    port: process.env.GATEWAY_PORT || 3000,
    services: {
        userService: {
            url: process.env.USER_SERVICE_URL || 'http://localhost:3001',
        },
        postService: {
            url: process.env.POST_SERVICE_URL || 'http://localhost:3002',
        },
        commentService: {
            url: process.env.COMMENT_SERVICE_URL || 'http://localhost:3003',
        },
    },
    corsOptions: {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
    },
};

module.exports = gatewayConfig;