# Comment Service

This is the comment service for the blogging platform microservices architecture. It is responsible for handling all operations related to comments on posts.

## Features

- Create, read, update, and delete comments.
- Integration with MongoDB for data storage.
- RESTful API endpoints for interaction with the front-end and other services.

## Directory Structure

- `src/`: Contains the source code for the comment service.
  - `app.js`: Entry point for the comment service.
  - `controllers/`: Contains the logic for handling comment-related requests.
  - `models/`: Defines the Mongoose model for comments.
  - `routes/`: Defines the API routes for comments.
  - `config/`: Contains database connection logic.

## Installation

1. Clone the repository.
2. Navigate to the comment service directory:
   ```
   cd services/comment-service
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Environment Variables

Create a `.env` file in the root of the comment service directory and define the following variables:

```
MONGODB_URI=<your_mongodb_connection_string>
PORT=3000
```

## Running the Service

To start the comment service, run:

```
npm start
```

## API Endpoints

- `POST /comments`: Create a new comment.
- `GET /comments/:id`: Retrieve a comment by ID.
- `PUT /comments/:id`: Update a comment by ID.
- `DELETE /comments/:id`: Delete a comment by ID.

## License

This project is licensed under the MIT License.