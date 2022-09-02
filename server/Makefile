build-dev-image:
	docker build -t api-server-dev -f Dockerfile.dev .

run-dev:
	docker run -i -d -p 3000:3000 api-server-dev

build-prod-image:
	docker build -t api-server-prod -f Dockerfile.prod .

run-deploy:
	docker run -d -p 8080:80 api-server-prod