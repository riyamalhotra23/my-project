# Blogging Platform

## Overview
This is a microservices-based blogging platform designed to handle user management, post creation, and comment functionality. Each service is independently deployable and communicates through a centralized API Gateway. The platform is built using Node.js with Express and utilizes MongoDB for data storage.

## Architecture
The system is composed of the following microservices:
- **User Service**: Manages user registration, authentication, and profile management.
- **Post Service**: Handles the creation, retrieval, and deletion of blog posts.
- **Comment Service**: Manages comments on blog posts.

### API Gateway
The API Gateway serves as the single entry point for all client requests, routing them to the appropriate microservice. It also handles CORS, authentication, rate limiting, and logging.

## Features
- **Service Decomposition**: Each service has its own domain and data ownership.
- **Inter-Service Communication**: Services communicate via RESTful APIs with proper error handling and retries.
- **Authentication**: JWT tokens are used for secure communication between services.
- **Resilience Patterns**: Circuit breakers and retry mechanisms are implemented to ensure system reliability.
- **Observability**: Structured logging and health check endpoints are provided for monitoring.

## Getting Started

### Prerequisites
- Docker
- Docker Compose
- Node.js (for local development)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd blogging-platform
   ```

2. Build and run the services using Docker Compose:
   ```
   cd infra
   docker-compose up --build
   ```

3. Access the application:
   - API Gateway: `http://localhost:3000`
   - UI: `http://localhost:3001`

### Running Tests
To run smoke tests, execute the following script:
```
cd scripts
./smoke-test.sh
```

## Directory Structure
```
blogging-platform
├── services
│   ├── user-service
│   ├── post-service
│   └── comment-service
├── api-gateway
├── ui
├── infra
├── scripts
├── Makefile
└── README.md
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.