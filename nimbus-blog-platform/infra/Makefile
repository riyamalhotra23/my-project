# Makefile for Nimbus Blog Platform

# This Makefile provides commands for building and running the microservices-based blogging platform.

.PHONY: build up down logs

# Build all services and the API gateway
build:
	docker-compose build

# Start all services and the API gateway
up:
	docker-compose up

# Stop all services and the API gateway
down:
	docker-compose down

# View logs for all services
logs:
	docker-compose logs -f