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

# Build the project
mvn clean install

# Run the application
mvn spring-boot:run 
```

# Event Platform API - Frontend

For details on the frontend (Next.js app), see the [frontend/README.md](frontend/README.md).
