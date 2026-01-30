Mini Social Post Application
Overview

The Mini Social Post Application is a full-stack web application developed as part of the 3W Full Stack Internship Assignment.
The application allows users to sign up, log in securely, create posts, like and comment on posts, and delete their own content.

This project demonstrates practical experience in MERN stack development, authentication, RESTful APIs, database design, and cloud deployment.

Live Demo

Frontend (Vercel):
https://mini-social-nu.vercel.app

Backend API (Render):
https://mini-social-backend-pdmj.onrender.com/api

Features
Authentication

Secure user signup and login using email and password.

Password hashing implemented using bcrypt.

JWT-based authentication for protected routes.

Post Management

Create posts with text, image URL, or both.

Posts are associated with the author’s username.

Only authenticated users can create posts.

Feed

Displays posts from all users in reverse chronological order.

Shows author name, post content, image, likes, comments, and timestamps.

Feed updates automatically after creating or deleting a post.

Likes and Comments

Users can like and comment on any post.

Real-time UI updates for likes and comments.

Each comment stores the commenter’s username and timestamp.

Post Deletion

Users can delete only their own posts.

Authorization checks prevent unauthorized deletions.

Responsive UI

Clean and minimal UI inspired by modern social feed layouts.

Responsive design for desktop and mobile screens.

Tech Stack
Layer	Technologies
Frontend	React.js, CSS
Backend	Node.js, Express.js
Database	MongoDB Atlas
Authentication	JWT, bcrypt
Tools	Nodemon, Morgan, CORS
Deployment	Vercel (Frontend), Render (Backend)
Project Structure
mini-social/
│
├── backend/
│   ├── server.js
│   ├── models.js
│   ├── middleware/
│   │   └── auth.js
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── api.js
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── AuthContext.jsx
│   │   ├── feed/
│   │   │   ├── Feed.jsx
│   │   │   ├── PostCard.jsx
│   │   │   └── CreatePost.jsx
│   │   └── index.css
│   ├── package.json
│   └── .gitignore
│
└── README.md

Setup Instructions
1. Clone the Repository
git clone https://github.com/Sakshamsingh381/mini-social.git
cd mini-social

2. Backend Setup
cd backend
npm install


Create a .env file inside backend/:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000
CLIENT_URL=http://localhost:5173


Run the backend server:

npm run dev


Backend will run at:
http://localhost:4000

3. Frontend Setup
cd ../frontend
npm install
npm run dev


Frontend will run at:
http://localhost:5173

API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	Login user and return JWT
Posts
Method	Endpoint	Description
GET	/api/posts	Fetch all posts
POST	/api/posts	Create a new post (authenticated)
DELETE	/api/posts/:id	Delete post (author only)
Database Schema
User
{
  "username": "String",
  "email": "String",
  "passwordHash": "String"
}

Post
{
  "authorId": "ObjectId",
  "authorName": "String",
  "text": "String",
  "imageUrl": "String",
  "likes": ["ObjectId"],
  "comments": [
    {
      "userId": "ObjectId",
      "username": "String",
      "text": "String",
      "createdAt": "Date"
    }
  ],
  "createdAt": "Date",
  "updatedAt": "Date"
}

Security Practices

Environment variables are excluded from Git using .gitignore.

Secrets are managed securely via deployment platforms.

Authorization middleware protects sensitive routes.

Future Improvements

User profile pages

Edit post functionality

Image uploads using Cloudinary

Pagination and infinite scroll

Improved UI and animations

Author

Saksham Singh
Full Stack Developer (MERN Stack)
GitHub: https://github.com/Sakshamsingh381