# React Blogging Platform

This is a microservices-based blogging platform built with Node.js, Express, and MongoDB for the backend services, and React for the frontend. The platform consists of three main services: User Service, Post Service, and Comment Service, all of which are accessible through an API Gateway.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- Docker (optional, for containerization)

### Installation

1. Clone the repository:

   git clone <repository-url>

2. Navigate to the `ui/react-app` directory:

   cd ui/react-app

3. Install the dependencies:

   npm install

### Running the Application

To run the application in development mode, use the following command:

npm start

This will start the React application on `http://localhost:3000`.

### API Gateway

The React application interacts with the backend services through the API Gateway. Ensure that the API Gateway and the microservices are running before accessing the frontend.

### Docker

If you prefer to run the application using Docker, you can build and run the Docker containers. Refer to the respective service Dockerfiles for instructions.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

### License

This project is licensed under the MIT License. See the LICENSE file for details.