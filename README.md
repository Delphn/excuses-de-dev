# Excuses de dev

## Stack
  - Front: Vue3 + Vite (with Typescript)
    - Vue Router
    - Store with Composition API
  - Back: NodeJS + Express + MongoDB

## How to run the project
- From the project root directory:
  - For __Dev Environment__ run
    ```bash
    make build-dev-images # to build the docker images  
    make run-dev # to run the docker containers
    make stop-dev # to stop the docker containers
    make clean-dev # to remove the docker containers
    ```
    - Front: http://localhost:8000
    - Back: http://localhost:3000/api  
  - For __Prod Environment__ run
    ```bash
    make build-prod-images  # to build the docker images  
    make run-prod # to run the docker containers
    make stop-prod # to stop the docker containers
    make clean-prod # to remove the docker containers
    ```
    - Front: http://localhost:8083
    - Back: http://localhost:3000/api

- Pages:
  - Home: http://localhost:8000
  - Lost: http://localhost:8000/lost
  - *(404): http://localhost:8000/[random-word]
  - http_code: http://localhost:8000/error/[http_code]

## Troubleshooting
- If you encounter permission issues when running `make` commands, try running `sudo make <command>` or [add your user to the docker group](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user) then log out and log back in to apply the changes.  
If you are on a linux machine, you can also run the following command to activate the changes without logging out: 
  ```bash
  newgrp docker
  ```