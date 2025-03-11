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
![image](https://github.com/user-attachments/assets/1d5a78c9-00a8-40fe-93b1-1058aa3b8210)

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
![image](https://github.com/user-attachments/assets/6a0bd3f6-1e0b-45c4-ba0e-04bd6a0b949a)

## Project Structure

- `/prisma` - Contains Prisma schema and migrations
- `/src` - Application source code
  - `/modules` - Feature modules
  - `/common` - Shared components, guards, etc.
  - `/config` - Configuration files

## API Documentation

API documentation is available at `/api/docs` when the application is running.

