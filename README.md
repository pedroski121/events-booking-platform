# Event Platform API - Frontend

For details on the frontend (Next.js app), see the [frontend/README.md](frontend/README.md).

# Event Platform API - Backend

## Tech Stack
- **Java 21** - Modern LTS version
- **Spring Boot 3.1.5** - Comprehensive framework for REST APIs
- **Spring Data JPA** - Database operations made simple
- **H2 Database** - Lightweight in-memory database for development
- **Maven** - Dependency management
- **OpenAPI/Swagger** - API documentation

## Why These Choices?
1. **Spring Boot**: Provides production-ready features, easy configuration, and extensive ecosystem
2. **H2 Database**: Good for demonstration - no setup required, supports SQL operations
3. **JPA/Hibernate**: Object-relational mapping simplifies data access
4. **Maven**: Standard Java build tool with clear dependency management

## Setup & Running

### Prerequisites
- Java 21 or higher
- Maven 3.6+

### Installation

```bash
# Clone repository
git clone https://github.com/pedroski121/events-booking-platform.git
cd event-booking-platform/backend

# Run the application
./mvnw spring-boot:run 

# Test the application
./mvnw test
```



# Docker Integration

You can run the entire project (backend and frontend) using Docker and Docker Compose.

## Prerequisites
- [Docker](https://www.docker.com/get-started) installed
- [Docker Compose](https://docs.docker.com/compose/install/) (if not included with Docker Desktop)

## Quick Start

From the project root, build and start all services:

```bash
docker-compose up --build
```

- The backend will be available at [http://localhost:8080](http://localhost:8080)
- The frontend will be available at [http://localhost:3000](http://localhost:3000)

## Stopping the Services

Press `Ctrl+C` in the terminal, then run:

```bash
docker-compose down
```

## Notes
- The backend uses Java 21 and runs on port 8080.
- The frontend uses Node.js 22 and runs on port 3000.
- You can modify environment variables in `docker-compose.yml` as needed.
