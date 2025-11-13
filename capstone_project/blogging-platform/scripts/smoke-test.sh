#!/bin/bash

# Smoke Test Script for Blogging Platform

# Define the services to test
SERVICES=("user-service" "post-service" "comment-service" "api-gateway")

# Define the base URL for the services
BASE_URL="http://localhost:3000"

# Function to perform a smoke test on a service
function smoke_test() {
    SERVICE=$1
    echo "Testing $SERVICE..."

    # Check the health endpoint
    RESPONSE=$(curl --write-out "%{http_code}" --silent --output /dev/null "$BASE_URL/$SERVICE/health")

    if [ "$RESPONSE" -eq 200 ]; then
        echo "$SERVICE is up and running."
    else
        echo "Error: $SERVICE is not responding. HTTP Status: $RESPONSE"
    fi
}

# Run smoke tests for each service
for SERVICE in "${SERVICES[@]}"; do
    smoke_test "$SERVICE"
done

echo "Smoke tests completed."