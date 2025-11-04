# User Service Documentation

## Overview
The User Service is a microservice responsible for managing user-related operations in the blogging platform. It provides endpoints for creating, retrieving, updating, and deleting user information.

## Features
- User registration
- User authentication
- User profile management
- Integration with MongoDB for data storage

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- Docker (optional, for containerization)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd blogging-platform-microservices/services/user-service
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` and update the values as needed.

### Running the Service
To start the user service, run:
```
npm start
```

### Docker
To build and run the service using Docker, use:
```
docker build -t user-service .
docker run -p 3000:3000 user-service
```

## API Endpoints
- `POST /users` - Create a new user
- `GET /users/:id` - Retrieve user information
- `PUT /users/:id` - Update user information
- `DELETE /users/:id` - Delete a user

## Testing
To run tests, use:
```
npm test
```

## License
This project is licensed under the MIT License. See the LICENSE file for details.