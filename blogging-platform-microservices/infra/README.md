# Infrastructure Setup for Blogging Platform Microservices

This directory contains the infrastructure setup for the Blogging Platform Microservices project. It includes configurations for Docker and Kubernetes to facilitate the deployment and management of the microservices architecture.

## Docker Setup

The `docker-compose.yml` file defines the services, networks, and volumes required to run the microservices locally using Docker. It allows for easy orchestration of the user, post, and comment services along with the API Gateway.

## Kubernetes Setup

The `k8s` directory contains the necessary configuration files for deploying the microservices on a Kubernetes cluster. 

- `deployment.yaml`: This file specifies the deployment configurations for each microservice, including replicas, container images, and environment variables.
- `service.yaml`: This file defines the service configurations, enabling communication between the microservices and exposing them to the outside world.

## Usage

To get started with the infrastructure setup, follow these steps:

1. **Docker**: Use the `docker-compose.yml` file to build and run the services locally.
   ```bash
   docker-compose up --build
   ```

2. **Kubernetes**: Apply the configurations in the `k8s` directory to your Kubernetes cluster.
   ```bash
   kubectl apply -f k8s/deployment.yaml
   kubectl apply -f k8s/service.yaml
   ```

Ensure that you have Docker and Kubernetes installed and configured on your machine before proceeding with the setup.

## Conclusion

This README provides an overview of the infrastructure setup for the Blogging Platform Microservices project. For more detailed information on each microservice, please refer to their respective documentation in the `services` directory.