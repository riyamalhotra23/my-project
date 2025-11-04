# Blogging Platform Microservices

This project is a microservices-based blogging platform built using Node.js, Express, and MongoDB for the backend services, and React for the frontend UI. The architecture consists of three main services: User Service, Post Service, and Comment Service, all of which communicate through an API Gateway.

## Project Structure

```
blogging-platform-microservices
├── services
│   ├── user-service          # Service for user management
│   ├── post-service          # Service for blog posts
│   └── comment-service       # Service for comments on posts
├── api-gateway               # API Gateway to route requests
├── ui                        # Frontend React application
├── packages                  # Common packages shared across services
├── infra                     # Infrastructure setup (Docker, Kubernetes)
├── .gitignore                # Git ignore file
└── .env.example              # Example environment variables
```

## Services Overview

### User Service
- Manages user registration, authentication, and profile management.
- Exposes endpoints for creating, retrieving, updating, and deleting users.

### Post Service
- Handles blog post creation, retrieval, updating, and deletion.
- Exposes endpoints for managing posts.

### Comment Service
- Manages comments on blog posts.
- Exposes endpoints for creating, retrieving, updating, and deleting comments.

### API Gateway
- Acts as a single entry point for the frontend to interact with the backend services.
- Routes requests to the appropriate service based on the endpoint.

### Frontend (React)
- Provides a user interface for interacting with the blogging platform.
- Displays lists of users, posts, and comments, and allows users to create and manage them.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   cd blogging-platform-microservices
   ```

2. Set up environment variables:
   - Copy `.env.example` to `.env` in each service and the UI, and fill in the required values.

3. Start the services:
   - Use Docker Compose to start all services:
   ```
   cd infra
   docker-compose up
   ```

4. Access the frontend:
   - Navigate to the React app in your browser (default: `http://localhost:3000`).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.