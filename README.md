# CSE 341 Contact Management API

A robust RESTful API for managing contacts and user information. Built with Node.js, Express, and MongoDB, this project provides a complete backend solution for storing, retrieving, and managing contact information with authentication and API documentation.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Authentication](#authentication)
- [Documentation](#documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **CRUD Operations**: Create, read, update, and delete contacts
- **MongoDB Integration**: Persistent data storage with MongoDB
- **RESTful API Design**: Standard HTTP methods and status codes
- **Swagger Documentation**: Auto-generated API documentation with Swagger UI
- **GitHub Authentication**: OAuth 2.0 authentication via Passport.js
- **CORS Support**: Cross-origin request handling
- **Session Management**: Express session middleware for user sessions
- **Error Handling**: Comprehensive error responses
- **Production Ready**: Deployed and accessible on Render

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (local instance or MongoDB Atlas account)
- **Git**

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/andersonhavah/cse341-contact-project.git
   cd cse341-contact-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment variables file**
   ```bash
   # Create a .env file in the root directory
   touch .env
   ```

4. **Configure environment variables** (see [Configuration](#configuration) section)

5. **Start the server**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`

## ⚙️ Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
MONGODB_URL= copy and paste your link here

# GitHub OAuth Configuration
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
CALLBACK_URL=http://localhost:3000/callback

# Port Configuration
PORT=3000
```

### Setting up GitHub OAuth:
1. Go to [GitHub Developer Settings](https://github.com/settings/apps)
2. Click "New OAuth App"
3. Fill in the application details
4. Set Authorization callback URL to `http://localhost:3000/callback` (or your deployed URL)
5. Copy the Client ID and Client Secret to your `.env` file

## 📖 Usage

### Starting the Development Server

```bash
npm start
```

The API will be available at `http://localhost:3000`

### Testing Endpoints

Use any REST client (Postman, VS Code REST Client, etc.) to test the endpoints:

```http
# Get all users
GET http://localhost:3000/users

# Get a single user by ID
GET http://localhost:3000/users/{userId}

# Create a new user
POST http://localhost:3000/users
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "favoriteColor": "blue",
  "birthday": "1990-01-15"
}

# Update a user
PUT http://localhost:3000/users/{userId}
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane.doe@example.com",
  "favoriteColor": "red",
  "birthday": "1992-05-20"
}

# Delete a user
DELETE http://localhost:3000/users/{userId}
```

## 🔌 API Endpoints

### Welcome Endpoint

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Welcome message and API overview |

### User Endpoints

| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| GET | `/users` | Retrieve all users | Array of user objects |
| GET | `/users/:id` | Retrieve a specific user | User object |
| POST | `/users` | Create a new user | 204 No Content |
| PUT | `/users/:id` | Update a user | 204 No Content |
| DELETE | `/users/:id` | Delete a user | 204 No Content |

### User Object Schema

```json
{
  "_id": "MongoDB ObjectId",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "favoriteColor": "string",
  "birthday": "string (YYYY-MM-DD format)"
}
```

### Documentation Endpoint

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api-docs` | Interactive Swagger API documentation |

## 📁 Project Structure

```
cse341-contact-project/
├── controllers/
│   └── usersController.js      # Business logic for user operations
├── data/
│   └── database.js              # MongoDB connection and initialization
├── middleware/
│   └── authenticate.js          # Authentication middleware
├── routes/
│   ├── index.js                # Main router
│   ├── usersRoute.js           # User routes
│   └── swaggerRoute.js         # Swagger documentation route
├── .env                        # Environment variables (not in repo)
├── .gitignore                  # Git ignore file
├── package.json                # Project metadata and dependencies
├── server.js                   # Express server setup
├── swagger.js                  # Swagger configuration
├── swagger.json                # Generated Swagger documentation
└── README.md                   # This file
```

### Key Files Description

- **server.js**: Main Express application setup, middleware configuration, and Passport authentication setup
- **controllers/usersController.js**: Contains all database operation handlers (CRUD)
- **routes/usersRoute.js**: Defines user-related endpoints
- **data/database.js**: Manages MongoDB connection and database instance
- **middleware/authenticate.js**: Authentication checks for protected routes
- **swagger.js**: Auto-generates Swagger API documentation

## 🔐 Authentication

This project uses **Passport.js** with GitHub OAuth 2.0 for authentication.

### How Authentication Works

1. Users are redirected to GitHub for login
2. GitHub redirects back with user profile information
3. User profile is stored in session
4. Protected routes check for active session (`isAuthenticated` middleware)

### Protected Routes

Currently, authentication middleware is available but can be applied to routes:

```javascript
router.get('/users', isAuthenticated, usersController.getAll);
```

## 📚 Documentation

### Swagger UI

Interactive API documentation is available at `/api-docs` when the server is running.

This documentation includes:
- All available endpoints
- Request/response examples
- Parameter descriptions
- HTTP status codes

### Accessing Documentation

1. Start the server: `npm start`
2. Open browser: `http://localhost:3000/api-docs`

## 🌐 Deployment

This project is deployed on [Render](https://render.com/).

### Deployed URL
```
https://cse341-contact-project-4vz4.onrender.com
```

### Deploying to Render

1. Push code to GitHub
2. Create new Web Service on Render
3. Connect your GitHub repository
4. Set environment variables in Render dashboard
5. Deploy

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^5.2.1 | Web framework |
| mongodb | ^7.0.0 | Database driver |
| passport | ^0.7.0 | Authentication middleware |
| passport-github2 | ^0.1.12 | GitHub OAuth strategy |
| express-session | ^1.19.0 | Session management |
| body-parser | ^2.2.2 | Parse request bodies |
| cors | ^2.8.6 | Cross-origin support |
| dotenv | ^17.2.3 | Environment variables |
| swagger-autogen | ^2.23.7 | Generate Swagger docs |
| swagger-ui-express | ^5.0.1 | Swagger UI interface |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

**Author**: Anderson Havah  
**Repository**: [github.com/andersonhavah/cse341-contact-project](https://github.com/andersonhavah/cse341-contact-project)  
**Course**: CSE 341 - Web Services (BYU-Idaho)
