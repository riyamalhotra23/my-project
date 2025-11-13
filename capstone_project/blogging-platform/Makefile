# Makefile

.PHONY: all build up down logs test seed

all: build up

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f

test:
	docker-compose run --rm api-gateway npm test

seed:
	docker-compose run --rm mongo-seed npm run seed