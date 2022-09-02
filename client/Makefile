build-dev-image:
	docker build -t vue-app-dev -f Dockerfile.dev .

run-dev:
	docker run -i -d -p 8000:8000 vue-app-dev

build-prod-image:
	docker build -t vue-app-prod -f Dockerfile.prod .

run-deploy:
	docker run -d -p 8000:8000 vue-app-prod