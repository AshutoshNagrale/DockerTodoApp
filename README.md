# Dockerized Full Stack Application

This repository contains a Dockerized full-stack web application using Node.js for the backend, React for the frontend, and MongoDB as the database.

## Prerequisites

Make sure you have Docker installed on your machine.

## Getting Started

1. Clone this repository to your local machine.

```bash
git clone https://github.com/AshutoshNagrale/DockerTodoApp.git
```

2. Navigate to the project directory:

```bash
cd DockerTodoApp
```

3. Build the Docker images:

```bash
docker compose up -d
```

4. Access the application:

   Open your web browser and navigate to `http://localhost:4000` to view the React frontend.

   To access backend you can make api requests to `http://localhost:3000`

   To access mongodb go to `mongodb://mongo:27017/DockerTodoApp`
   To expose mongdb, add following lines to compose.yaml

   ```
   ports:
     - 3000:3000
   ```

5. Important Things

   You need to add below lines to `vite.config.js`

   ```
   server: {
     watch: {
       usePolling: true,
     },
     host: true, // needed for the Docker Container port mapping to work
     strictPort: true,
     port: 4000, // you can replace this port with any port
   }
   ```

6.  Resources used -
  `https://github.com/docker/awesome-compose`

Images:

Frontend - React
![Alt text](frontend.png)

Backend - Node
![Alt text](backend.png)

Docker Desktop
![Alt text](dockerdesktop.png)
