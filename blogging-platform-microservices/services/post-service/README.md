# Post Service

This is the Post Service of the Blogging Platform Microservices project. It is responsible for handling all operations related to blog posts.

## Features

- Create, read, update, and delete blog posts.
- Integration with MongoDB for data storage.
- RESTful API endpoints for interaction with the front-end and other services.

## Directory Structure

- `src/`: Contains the source code for the post service.
  - `app.js`: Entry point for the service.
  - `controllers/`: Contains the logic for handling requests.
  - `models/`: Defines the Mongoose model for posts.
  - `routes/`: Defines the routes for the post service.
  - `config/`: Contains configuration files, including database connection.

## Installation

1. Clone the repository.
2. Navigate to the `post-service` directory.
3. Install dependencies:

   ```
   npm install
   ```

4. Set up the environment variables by copying `.env.example` to `.env` and updating the values as needed.

## Running the Service

To start the Post Service, run:

```
npm start
```

## API Endpoints

- `POST /posts`: Create a new post.
- `GET /posts`: Retrieve all posts.
- `GET /posts/:id`: Retrieve a specific post by ID.
- `PUT /posts/:id`: Update a specific post by ID.
- `DELETE /posts/:id`: Delete a specific post by ID.

## Docker

To build and run the Post Service using Docker, use the following commands:

```
docker build -t post-service .
docker run -p 3000:3000 post-service
```

## License

This project is licensed under the MIT License.