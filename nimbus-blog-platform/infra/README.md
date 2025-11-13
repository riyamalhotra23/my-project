# Nimbus Blog Platform Infrastructure Documentation

This README provides instructions for setting up and running the Nimbus Blog Platform, which is a microservices-based blogging application. The platform consists of user, post, and comment services, along with an API gateway and a React frontend.

## Prerequisites

- Ensure that Docker and Docker Compose are installed on your machine.
- Familiarity with Node.js, Express, MongoDB, and React is beneficial.

## Project Structure

The project is organized into several services and a frontend application:

- **services/**: Contains the microservices for user, post, and comment functionalities.
- **api-gateway/**: Acts as a single entry point for routing requests to the respective services.
- **ui/**: Contains the React application for the frontend.
- **packages/common/**: Includes shared utilities or types across services.
- **infra/**: Contains infrastructure-related files, including Docker Compose and Makefile.

## Running the Project

To run the project live, follow these steps:

1. **Clone the Repository**: Clone the repository to your local machine.

2. **Navigate to the Infra Directory**:
   ```bash
   cd nimbus-blog-platform/infra
   ```

3. **Set Up Environment Variables**:
   - Copy the `.env.example` files in each service and the API gateway to `.env` files:
     ```bash
     cp ../services/user-service/.env.example ../services/user-service/.env
     cp ../services/post-service/.env.example ../services/post-service/.env
     cp ../services/comment-service/.env.example ../services/comment-service/.env
     cp ../api-gateway/.env.example ../api-gateway/.env
     cp ../ui/react-app/.env.example ../ui/react-app/.env
     ```
   - Fill in the necessary environment variables in each `.env` file.

4. **Build and Start Services**:
   Run the following command to build and start all services, including the API gateway and MongoDB instances:
   ```bash
   docker-compose up --build
   ```

5. **Access the Application**:
   - The application can be accessed through the API gateway URL specified in the `.env` file.

6. **Run the React UI**:
   - Navigate to the React application directory:
     ```bash
     cd ../ui/react-app
     ```
   - Start the development server:
     ```bash
     npm start
     ```
   - Alternatively, you can build the Docker image for the React app and run it similarly.

## Additional Notes

- Ensure that each service is properly configured to connect to its respective MongoDB instance.
- Monitor the logs for any errors during startup and address them as needed.
- For production deployment, consider additional configurations for security, scaling, and monitoring.

This documentation should help you set up and run the Nimbus Blog Platform successfully. For further assistance, refer to the individual service README files for more specific instructions.