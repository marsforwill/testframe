# testframe
This project uses NestJS framework with Prisma ORM for database operations.

# NestJS with Prisma Project

This project uses NestJS framework with Prisma ORM for database operations.

## Setup Instructions

### Installation

```bash
# Install dependencies
npm install
```

### Database Configuration

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Open Prisma Studio
npx prisma studio
```

### add user module
nest g module user
nest g controller user
nest g service user

### Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod
```

## Project Structure

- `/prisma` - Contains Prisma schema and migrations
- `/src` - Application source code
  - `/modules` - Feature modules
  - `/common` - Shared components, guards, etc.
  - `/config` - Configuration files

## API Documentation

API documentation is available at `/api/docs` when the application is running.

