# Comment Service

This is the Comment Service of the Nimbus Blog Platform, which is responsible for managing comments on blog posts. It is built using Node.js and Express, and it interacts with a MongoDB database to store and retrieve comment data.

## Features

- **Create Comments**: Allows users to add comments to specific blog posts.
- **Retrieve Comments**: Fetches comments associated with a particular post.
- **Update Comments**: Enables users to edit their existing comments.
- **Delete Comments**: Allows users to remove their comments from a post.

## API Endpoints

- `POST /api/v1/comments`: Create a new comment.
- `GET /api/v1/comments/:postId`: Retrieve all comments for a specific post.
- `PUT /api/v1/comments/:commentId`: Update a specific comment.
- `DELETE /api/v1/comments/:commentId`: Delete a specific comment.

## Setup

1. **Environment Variables**: Copy the `.env.example` file to `.env` and configure the necessary environment variables.
2. **Install Dependencies**: Run `npm install` to install the required packages.
3. **Run the Service**: Use `npm start` to start the comment service locally or build the Docker image and run it using Docker.

## Docker

To build and run the Comment Service using Docker, use the following command:

```bash
docker build -t comment-service .
docker run -p 3000:3000 comment-service
```

## Database

This service uses MongoDB to store comments. Ensure that the MongoDB instance is running and accessible as specified in the environment variables.

## Health Check

The service exposes a health check endpoint at `/health` to verify its status.

## Logging

Structured JSON logs are implemented for better observability and debugging.

## Versioning

The API is versioned, and all endpoints are prefixed with `/api/v1/` to allow for future changes without breaking existing clients.

## Contributing

Feel free to contribute to the Comment Service by submitting issues or pull requests. Please ensure to follow the coding standards and include tests for new features.

## License

This project is licensed under the MIT License.