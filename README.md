# Node API Dev

A RESTful API built with Express.js, TypeScript, and MongoDB. This project provides authentication, user management, and order management functionality.

## Features

- **Authentication**: JWT-based authentication with bcrypt password hashing
- **User Management**: Create, read, and manage users
- **Order Management**: Handle user orders
- **Input Validation**: Zod-based data validation
- **Error Handling**: Centralized error handling middleware
- **Logging**: Request logging with Morgan
- **TypeScript**: Full TypeScript support for type safety

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **MongoDB** - Local instance or MongoDB Atlas cloud database - [Setup Guide](https://docs.mongodb.com/manual/installation/)
- **Git** (optional) - For version control

## Installation

1. **Clone the repository** (if using Git):
   ```bash
   git clone <repository-url>
   cd node-api-dev
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or with yarn:
   ```bash
   yarn install
   ```

## Configuration

1. **Create a `.env` file** in the root directory:
   ```bash
   cp .env.example .env
   ```

2. **Add the following environment variables** to `.env`:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/node-api-dev
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

   **Configuration Details**:
   - `PORT`: Server port (default: 3000)
   - `MONGODB_URI`: MongoDB connection string
     - Local: `mongodb://localhost:27017/node-api-dev`
     - MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/node-api-dev`
   - `JWT_SECRET`: Secret key for JWT token generation (use a strong random string)
   - `NODE_ENV`: Environment mode (development/production)

## Project Structure

```
src/
├── server.ts                 # Main application entry point
├── config/
│   └── db.ts                # MongoDB connection configuration
├── controllers/
│   ├── authController.ts    # Authentication logic
│   ├── userController.ts    # User management logic
│   └── orderController.ts   # Order management logic
├── middlewares/
│   ├── auth.ts              # JWT authentication middleware
│   ├── errorHandler.ts      # Global error handling
│   ├── logger.ts            # Request logging
│   └── validateData.ts      # Request validation
├── models/
│   ├── User.ts              # User database schema
│   └── OrderModel.ts        # Order database schema
├── routes/
│   ├── authRoute.ts         # Authentication routes
│   ├── userRoute.ts         # User routes
│   └── orderRoute.ts        # Order routes
├── services/
│   ├── authService.ts       # Authentication business logic
│   └── userService.ts       # User business logic
├── utils/
│   └── errorHelper.ts       # Error handling utilities
└── validations/
    ├── userValidation.ts    # User input validation
    └── orderValidation.ts   # Order input validation
```

## Running the Project

### Development Mode

Start the development server with auto-reload on file changes:

```bash
npm run dev
```

The server will start on `http://localhost:3000` (or the port specified in `.env`)

**Output**:
```
Server running on port 3000
```

### Production Build

Build the TypeScript code to JavaScript:

```bash
npm run build
```

This generates compiled files in the `dist/` directory.

### Start Production Server

Run the compiled application:

```bash
npm start
```

## API Endpoints

### Authentication Routes (`/auth`)
- `POST /auth/login` - User login
- `POST /auth/register` - User registration

### User Routes (`/users`)
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create a new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

### Order Routes (`/orders`)
- `GET /orders` - Get all orders
- `GET /orders/:id` - Get order by ID
- `POST /orders` - Create a new order
- `PUT /orders/:id` - Update order
- `DELETE /orders/:id` - Delete order

## Testing the API

You can test the API using:

- **Postman**: [Download](https://www.postman.com/downloads/)
- **Insomnia**: [Download](https://insomnia.rest/)
- **cURL**: Command-line tool (built-in on macOS/Linux)
- **REST Client Extension**: VS Code extension

**Example cURL request**:
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password123"}'
```

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally: `mongod`
- For MongoDB Atlas, verify connection string and IP whitelist
- Check `.env` file for correct `MONGODB_URI`

### Port Already in Use
- Change the `PORT` in `.env` file
- Or kill the process using the port:
  ```bash
  lsof -i :3000
  kill -9 <PID>
  ```

### Dependencies Installation Issues
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

### TypeScript Compilation Errors
- Ensure `tsconfig.json` is properly configured
- Check Node.js and TypeScript versions match requirements

## Technologies Used

- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (jsonwebtoken) + bcrypt
- **Validation**: Zod
- **Logging**: Morgan
- **Development**: ts-node-dev

## Environment Setup

### macOS/Linux
```bash
npm install
npm run dev
```

### Windows
```bash
npm install
npm run dev
```

## Additional Commands

```bash
# Clean build artifacts
npm run clean

# Run linting (if configured)
npm run lint

# Run tests (if configured)
npm test
```

## Contributing

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit changes: `git commit -m "Add your feature"`
4. Push to branch: `git push origin feature/your-feature`
5. Create a pull request

## License

ISC

## Support

For issues or questions, please create an issue in the repository or contact the development team.

---

**Happy coding!** 🚀
