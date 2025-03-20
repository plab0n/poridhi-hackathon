# Distributed tracing with open-telemetry

A microservices-based application with distributed tracing and monitoring capabilities using OpenTelemetry, Jaeger, and other modern technologies.

## Project Overview

This project demonstrates a distributed system architecture with the following key features:
- Microservices architecture with Gateway and Feed services
- Distributed tracing using OpenTelemetry and Jaeger
- Message queuing with Kafka
- Data persistence using MongoDB and Redis
- Containerized deployment using Docker

## Architecture

The project consists of the following services:

- **Gateway Service**: Entry point for the application (Port: 8080)
- **Feed Service**: Handles feed-related operations (Port: 8081)
- **Kafka**: Message broker for inter-service communication
- **MongoDB**: Primary database (Port: 27017)
- **Redis**: In-memory data store (Port: 6379)
- **OpenTelemetry Collector**: Collects and processes telemetry data
- **Jaeger**: Distributed tracing system (UI Port: 16686)

## Prerequisites

- Docker and Docker Compose
- Git

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/poridhi-hackathon.git
cd poridhi-hackathon
```

2. Create a `.env` file in the root directory with the following variables:
```env
BUILD_VERSION=1.0.0
IMAGE_NAME=otel
COLLECTOR_CONTRIB_IMAGE=otel/opentelemetry-collector-contrib
JAEGERTRACING_IMAGE=jaegertracing/all-in-one
# ... (other environment variables as shown in .env.example)
```

3. Build and start the services:
```bash
docker-compose up --build
```

## Service Endpoints

- Gateway Service: `http://localhost:8080`
- Feed Service: `http://localhost:8081`
- Jaeger UI: `http://localhost:16686`

## Monitoring and Tracing

The application includes comprehensive monitoring and tracing capabilities:

- **Distributed Tracing**: View traces through the Jaeger UI
- **Metrics Collection**: OpenTelemetry Collector gathers metrics from all services
- **Service Dependencies**: Visualize service interactions in Jaeger

## Development

Each service is containerized and can be developed independently:

- `gatewayservice/`: Contains the Gateway service implementation
- `feedservice/`: Contains the Feed service implementation
- `kafka/`: Kafka configuration and setup
- `otelcollector/`: OpenTelemetry Collector configuration
- `volumns/`: Persistent data storage for MongoDB and Redis

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
