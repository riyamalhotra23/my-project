#!/bin/bash

# Start all services defined in the Docker Compose file
docker-compose -f ../infra/docker-compose.yml up --build -d

# Wait for services to be up and running
echo "Waiting for services to start..."
sleep 10

# Check the health of the API Gateway
if curl -s http://localhost:3000/health | grep -q "OK"; then
  echo "API Gateway is up and running."
else
  echo "API Gateway failed to start."
  exit 1
fi

# Check the health of the User service
if curl -s http://localhost:3001/health | grep -q "OK"; then
  echo "User service is up and running."
else
  echo "User service failed to start."
  exit 1
fi

# Check the health of the Post service
if curl -s http://localhost:3002/health | grep -q "OK"; then
  echo "Post service is up and running."
else
  echo "Post service failed to start."
  exit 1
fi

# Check the health of the Comment service
if curl -s http://localhost:3003/health | grep -q "OK"; then
  echo "Comment service is up and running."
else
  echo "Comment service failed to start."
  exit 1
fi

echo "All services are up and running."