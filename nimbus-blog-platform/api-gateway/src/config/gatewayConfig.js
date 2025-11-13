const gatewayConfig = {
    services: {
        userService: {
            url: 'http://user-service:3001',
            routes: {
                register: '/api/v1/users/register',
                login: '/api/v1/users/login',
                getUser: '/api/v1/users/:id',
            },
        },
        postService: {
            url: 'http://post-service:3002',
            routes: {
                createPost: '/api/v1/posts',
                getPosts: '/api/v1/posts',
                getPost: '/api/v1/posts/:id',
            },
        },
        commentService: {
            url: 'http://comment-service:3003',
            routes: {
                addComment: '/api/v1/comments',
                getComments: '/api/v1/comments/:postId',
            },
        },
    },
    cors: {
        origin: '*', // Adjust this for production
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    },
    rateLimit: {
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // Limit each IP to 100 requests per windowMs
    },
};

module.exports = gatewayConfig;