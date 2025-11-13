# Nimbus Blog Platform

## Overview
The Nimbus Blog Platform is a microservices-based blogging application designed to provide a seamless experience for users to create, read, and comment on blog posts. The architecture is composed of independently deployable services for users, posts, and comments, each backed by its own MongoDB database. An API Gateway serves as the single entry point for all external traffic, ensuring efficient routing and management of requests.

## Key Features
- **Microservices Architecture**: The platform is divided into three main services:
  - **User Service**: Manages user authentication and profiles.
  - **Post Service**: Handles blog post creation, retrieval, and management.
  - **Comment Service**: Manages comments on blog posts.

- **API Gateway**: A centralized gateway that routes requests to the appropriate services, handles CORS, authentication, and logging.

- **Service Discovery**: Services can discover each other through DNS-based discovery in Docker Compose.

- **Data Ownership**: Each service owns its data, ensuring no cross-service database access.

- **Inter-Service Communication**: Services communicate via RESTful APIs with built-in timeouts and retries.

- **Authentication & Authorization**: JWT tokens are used for secure access to services.

- **Resilience Patterns**: Implements circuit breakers, exponential backoff, and bulkheads to enhance reliability.

- **Observability**: Structured logging, request tracing, and metrics endpoints for monitoring.

- **Frontend**: A React-based UI that interacts solely with the API Gateway, providing a user-friendly interface for blog interactions.

## Getting Started

### Prerequisites
- Docker
- Docker Compose

### Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd nimbus-blog-platform
   ```

2. Navigate to the `infra` directory:
   ```
   cd infra
   ```

3. Copy the `.env.example` files in each service and the API gateway to `.env` files and fill in the necessary environment variables.

4. Build and start all services:
   ```
   docker-compose up --build
   ```

5. Access the application through the API gateway URL specified in the `.env` file.

6. For the React UI, navigate to `ui/react-app` and run:
   ```
   npm start
   ```
   Alternatively, build the Docker image and run it similarly.

## Directory Structure
```
nimbus-blog-platform
├── services
│   ├── user-service
│   ├── post-service
│   └── comment-service
├── api-gateway
├── ui
│   └── react-app
├── packages
│   └── common
├── infra
│   ├── docker-compose.yml
│   └── Makefile
├── .env.example
└── README.md
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.