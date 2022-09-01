build-dev-images:
	cd client && $(MAKE) build-dev-image
	cd server && $(MAKE) build-dev-image

run-dev:
	docker compose -f docker-compose.dev.yml up

deploy:
	docker compose -f docker-compose.prod.yml up

stop-dev:
	docker compose -f docker-compose.dev.yml down

stop-prod:
	docker compose -f docker-compose.prod.yml down