# API Gateway

This is the API Gateway for the Blogging Platform Microservices project. The API Gateway acts as a single entry point for all client requests and routes them to the appropriate microservices (User, Post, and Comment services).

## Features

- **Routing**: Forwards requests to the respective microservices based on the endpoint.
- **CORS Support**: Configured to allow cross-origin requests.
- **Logging**: Middleware for logging requests and responses.

## Getting Started

### Prerequisites

- Node.js
- MongoDB (for microservices)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the API Gateway directory:
   ```
   cd api-gateway
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Running the API Gateway

To start the API Gateway, run:
```
npm start
```

The API Gateway will be available at `http://localhost:3000` (or the port specified in your environment variables).

### API Endpoints

- **User Service**: `/api/users`
- **Post Service**: `/api/posts`
- **Comment Service**: `/api/comments`

Refer to the individual service documentation for details on their respective endpoints.

## Docker

To build and run the API Gateway using Docker, use the following commands:

1. Build the Docker image:
   ```
   docker build -t api-gateway .
   ```

2. Run the Docker container:
   ```
   docker run -p 3000:3000 api-gateway
   ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.