# Refe - Driver Referral System

Welcome to **Refe**, a platform designed to connect drivers with referral opportunities. This project aims to facilitate the referral process for both batch and non-batch license holders.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Folder Structure](#folder-structure)
4. [Setup Instructions](#setup-instructions)
5. [Usage](#usage)
6. [Error Handling](#error-handling)
7. [Logging](#logging)
8. [Contact](#contact)

## Project Overview

**Refe** is a web application that allows users to refer drivers and manage referral processes. The platform will have a frontend built with React.js and a backend using Node.js. It will utilize MongoDB for database management and RabbitMQ for messaging.

## Architecture

The architecture of **Refe** follows a layered approach:

1. **Client Layer**: Built using React.js to create a dynamic user interface.
2. **Server Layer**: Built using Node.js with Express.js to handle HTTP requests.
3. **Database Layer**: MongoDB is used for data storage.
4. **Messaging Layer**: RabbitMQ is used for handling messaging between services.

### Separation of Concerns

- **Controllers**: Responsible for handling incoming requests and returning responses. They interact with the service layer and return data to the client.
- **Services**: Contain the business logic. They interact with the data layer and perform operations like fetching, creating, and updating data.

## Folder Structure

refe/ ├── client/ # React frontend ├── server/ # Node.js backend │ ├── controllers/ # Controllers for handling requests │ ├── models/ # Mongoose models │ ├── routes/ # API routes │ ├── services/ # Business logic │ ├── util/ # Utility functions and error handling │ ├── config/ # Configuration files │ └── server.js # Main server file ├── docker-compose.yml # Docker Compose configuration └── README.md # Project documentation

## Setup Instructions

### 1. Install Docker

- **For Desktop**: [Download Docker Desktop](https://www.docker.com/products/docker-desktop)
- **For Ubuntu Server**: [Install Docker on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04)

### 2. Install Docker Compose

- [Install Docker Compose](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-16-04)

### 3. Start Docker

- **Configuration**:

  - Copy `docker-compose.template.yml` to `docker-compose.yml` and update your configuration.
  - Extract `mongo/secrets.zip` and configure MongoDB authentication.
  - Copy `rabbitmq_management.template.conf` to `rabbitmq_management.conf` and update your configuration.
  - Copy `sample.env` to `.env` and update your configuration.

- **Start Docker**:

  ```bash
  docker-compose up -d
  ```

- **Enter Docker**:

  ```bash
  docker exec -it refe-backend bash
  ```

- **Run Backend Development**:
  ```bash
  npm start
  ```

### 4. Run Source

- **Run Main and Worker Services**:
  ```bash
  # Dev mode
  npm run dev
  npm run dev:worker
  # Production mode
  npm run prod
  npm run worker
  ```

### 5. API Documentation

Visit the [API docs](http://localhost:4001/v1/api-docs) for detailed API specifications.

## Error Handling

Each service function must return an `APIError` with a status code and message. Here’s an example:

```javascript
import APIError from '../util/APIError.js';

const error = new APIError(404, 'User not found');

### Instructions
- Make sure to fill in the placeholder information such as your GitHub username, email, and any other relevant details specific to your project.
- Copy the entire content above into a file named `README.md` for your project.

If you need further assistance or modifications, please let me know!
```
