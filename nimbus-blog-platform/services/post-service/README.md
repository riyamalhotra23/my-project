# Post Service

This is the Post Service of the Nimbus Blog Platform, responsible for managing blog posts. It is built using Node.js and Express, and it interacts with a MongoDB database.

## Features

- **Create, Read, Update, Delete (CRUD)** operations for blog posts.
- Each post is associated with a user and can have multiple comments.
- RESTful API endpoints for managing posts.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (running locally or a cloud instance)
- Docker (for containerization)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd nimbus-blog-platform/services/post-service
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up the environment variables by copying the example file:

   ```
   cp .env.example .env
   ```

   Update the `.env` file with your MongoDB connection string and any other necessary configurations.

### Running the Service

You can run the Post Service locally using:

```
npm start
```

Alternatively, you can run it in a Docker container:

```
docker build -t post-service .
docker run -p 3000:3000 post-service
```

### API Endpoints

- `POST /api/v1/posts` - Create a new post
- `GET /api/v1/posts` - Retrieve all posts
- `GET /api/v1/posts/:id` - Retrieve a specific post by ID
- `PUT /api/v1/posts/:id` - Update a post by ID
- `DELETE /api/v1/posts/:id` - Delete a post by ID

### Testing

To run tests, use:

```
npm test
```

### Docker

To build and run the Docker container, use:

```
docker-compose up --build
```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Acknowledgments

- Node.js
- Express
- MongoDB
- Docker

For more information, refer to the main [README.md](../../README.md) of the Nimbus Blog Platform.