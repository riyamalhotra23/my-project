# User Service

This is the User Service for the Nimbus Blog Platform, responsible for managing user-related operations such as registration, authentication, and profile management.

## Features

- **User Registration**: Allows new users to create an account.
- **User Authentication**: Enables users to log in and receive a JWT for secure access.
- **Profile Management**: Users can view and update their profiles.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (running locally or via a cloud provider)
- Docker (optional, for containerization)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nimbus-blog-platform/services/user-service
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.

### Running the Service

To run the service locally, use the following command:
```
npm start
```

### Docker

To build and run the service using Docker, execute:
```
docker build -t user-service .
docker run -p 3000:3000 --env-file .env user-service
```

### API Endpoints

- **POST /api/v1/users/register**: Register a new user.
- **POST /api/v1/users/login**: Authenticate a user and return a JWT.
- **GET /api/v1/users/:id**: Retrieve user profile by ID.
- **PUT /api/v1/users/:id**: Update user profile by ID.

### Testing

To run tests, use:
```
npm test
```

### License

This project is licensed under the MIT License. See the LICENSE file for details.