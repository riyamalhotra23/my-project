# nimbus-blog-platform API Gateway

This is the API Gateway for the Nimbus Blog Platform, which serves as a single entry point for routing requests to the underlying microservices: User Service, Post Service, and Comment Service.

## Features

- **Routing**: The API Gateway routes incoming requests to the appropriate microservice based on the request path.
- **CORS Support**: Configured to handle Cross-Origin Resource Sharing for frontend applications.
- **Authentication**: Validates JWT tokens issued by the User Service to ensure secure access to the APIs.
- **Rate Limiting**: Implements rate limiting to prevent abuse of the API.
- **Logging**: Logs incoming requests for monitoring and debugging purposes.
- **Health Checks**: Provides health check endpoints to monitor the status of the gateway and downstream services.

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nimbus-blog-platform
   ```

2. Copy the environment variable example:
   ```
   cp .env.example .env
   ```

3. Fill in the necessary environment variables in the `.env` file.

### Running the API Gateway

1. Navigate to the `infra` directory:
   ```
   cd infra
   ```

2. Start the services using Docker Compose:
   ```
   docker-compose up --build
   ```

3. Access the API Gateway at the URL specified in the `.env` file.

### API Endpoints

- **User Service**: `/api/v1/users`
- **Post Service**: `/api/v1/posts`
- **Comment Service**: `/api/v1/comments`

### Development

To make changes to the API Gateway, modify the files in the `src` directory. After making changes, rebuild the Docker image and restart the services.

### Testing

Ensure to run tests for each service independently and for the API Gateway to verify that routing and authentication are functioning correctly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.