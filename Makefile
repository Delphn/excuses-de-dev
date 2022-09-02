build-dev-images:
	cd client && $(MAKE) build-dev-image
	cd server && $(MAKE) build-dev-image

build-prod-images:
	cd client && $(MAKE) build-prod-image
	cd server && $(MAKE) build-prod-image

run-dev:
	docker compose -f docker-compose.dev.yml up

run-prod:
	docker compose -f docker-compose.prod.yml up -d

stop-dev:
	docker compose -f docker-compose.dev.yml stop

stop-prod:
	docker compose -f docker-compose.prod.yml stop

clean-dev:
	docker compose -f docker-compose.dev.yml down

clean-prod:
	docker compose -f docker-compose.prod.yml down