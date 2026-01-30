# Mini Social Platform (MERN Stack)

A production-ready full-stack social feed application built using the MERN stack.  
The application supports secure authentication, post creation, engagement actions, and role-based authorization with a deployed frontend and backend.

---

## Live Deployment

- **Frontend (Vercel)**  
  https://mini-social-nu.vercel.app

- **Backend API (Render)**  
  https://mini-social-backend-pdmj.onrender.com/api

---

## Core Capabilities

### Authentication & Security
- Stateless authentication using **JWT**
- Password hashing with **bcrypt**
- Protected routes enforced via middleware
- Authorization checks at API level (owner-only deletion)

### Social Feed
- Create posts with text and optional image URLs
- Global feed sorted by creation time
- Real-time UI updates after create / delete actions

### Engagement
- Like and unlike posts
- Comment system with username and timestamp tracking
- Atomic updates for likes and comments

### Reliability
- Environment-based configuration (no secrets in source control)
- Centralized error handling
- CORS configured for production frontend

---

## Tech Stack

**Frontend**
- React.js
- Context API (Auth state management)
- CSS (custom, minimal)

**Backend**
- Node.js
- Express.js
- RESTful API architecture

**Database**
- MongoDB Atlas
- Mongoose ODM

**Auth & Security**
- JSON Web Tokens
- bcrypt

**Deployment**
- Frontend: Vercel
- Backend: Render

---

## Architecture Overview

# Mini Social Platform (MERN Stack)

A production-ready full-stack social feed application built using the MERN stack.  
The application supports secure authentication, post creation, engagement actions, and role-based authorization with a deployed frontend and backend.

---

## Live Deployment

- **Frontend (Vercel)**  
  https://mini-social-nu.vercel.app

- **Backend API (Render)**  
  https://mini-social-backend-pdmj.onrender.com/api

---

## Core Capabilities

### Authentication & Security
- Stateless authentication using **JWT**
- Password hashing with **bcrypt**
- Protected routes enforced via middleware
- Authorization checks at API level (owner-only deletion)

### Social Feed
- Create posts with text and optional image URLs
- Global feed sorted by creation time
- Real-time UI updates after create / delete actions

### Engagement
- Like and unlike posts
- Comment system with username and timestamp tracking
- Atomic updates for likes and comments

### Reliability
- Environment-based configuration (no secrets in source control)
- Centralized error handling
- CORS configured for production frontend

---

## Tech Stack

**Frontend**
- React.js
- Context API (Auth state management)
- CSS (custom, minimal)

**Backend**
- Node.js
- Express.js
- RESTful API architecture

**Database**
- MongoDB Atlas
- Mongoose ODM

**Auth & Security**
- JSON Web Tokens
- bcrypt

**Deployment**
- Frontend: Vercel
- Backend: Render

---

## Architecture Overview

Client (React)
↓ JWT
API Gateway (Express)
↓
Business Logic Layer
↓
MongoDB Atlas

---

## Repository Structure

mini-social/
│
├── backend/
│ ├── server.js
│ ├── models.js
│ ├── middleware/
│ │ └── auth.js
│ ├── .env.example
│ └── .gitignore
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── api.js
│ │ ├── auth/
│ │ ├── feed/
│ │ └── index.css
│ └── .gitignore
│
└── README.md

---

## API Design

### Authentication
| Method | Endpoint | Description |
|------|---------|------------|
| POST | /api/auth/signup | User registration |
| POST | /api/auth/login | JWT-based login |

### Posts
| Method | Endpoint | Description |
|------|---------|------------|
| GET | /api/posts | Fetch feed |
| POST | /api/posts | Create post |
| DELETE | /api/posts/:id | Delete own post |

---

## Data Models

### User
```js
{
  username: String,
  email: String,
  passwordHash: String
}
Post
{
  authorId: ObjectId,
  authorName: String,
  text: String,
  imageUrl: String,
  likes: [ObjectId],
  comments: [
    {
      userId: ObjectId,
      username: String,
      text: String,
      createdAt: Date
    }
  ],
  createdAt: Date
}

Local Setup
Backend
cd backend
npm install
npm run dev


Create .env:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=4000
CLIENT_URL=http://localhost:5173

Frontend
cd frontend
npm install
npm run dev

Engineering Notes

Secrets are excluded using .gitignore

Environment parity maintained between local and production

API designed for extensibility (pagination, profiles, media uploads)

Author

Saksham Singh
Full-Stack Developer (MERN)

GitHub: https://github.com/Sakshamsingh381