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
	docker-compose down --volumes --remove-orphans
	docker volume prune -f
	docker image prune -a -f
	docker container prune -f

publish:
	docker push gdevtestex/test:lastest

.PHONY: default build run down clean
