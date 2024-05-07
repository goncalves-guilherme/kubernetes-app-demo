# Makefile

.DEFAULT_GOAL := default

default: clean down

build:
	docker-compose build

run: build
	docker-compose up

run-deps:
	docker-compose up -d mongodb

down:
	docker-compose down

clean:
	docker-compose down --volumes --remove-orphans --rmi all

publish:
	docker-compose build
	docker-compose push 

.PHONY: default build run down clean
