build-dev-image:
	docker build -t vue-app-dev -f Dockerfile.dev .

run-dev:
	docker run -i -d -p 8000:8000 vue-app-dev

build-prod-image:
	docker build -t vue-app -f Dockerfile.prod .

deploy:
	docker run -d -p 8080:80 vue-app