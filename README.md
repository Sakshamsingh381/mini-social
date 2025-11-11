# Mini Social Post Application

## Project Overview

The **Mini Social Post Application** is a full-stack web project developed as part of the **3W Full Stack Internship Assignment**.  
It provides users with the ability to create accounts, log in securely, post text or images, view posts from all users, like, comment, and delete their own posts.

This project demonstrates complete full-stack development skills — from authentication to database integration and modern UI design.

---

## Features

### 1. Authentication
- User signup and login using email and password.  
- Passwords are securely hashed using **bcrypt** before storage.  
- **JWT (JSON Web Token)** authentication ensures secure access to protected routes.

### 2. Post Creation
- Users can create posts with either text, image, or both.  
- Only logged-in users can create posts.  
- Posts are automatically linked to the author’s username.

### 3. Feed
- Displays all posts from all users in **reverse chronological order**.  
- Shows the post author, content, image, like count, and comment count.  
- Automatically updates after a post is created or deleted.

### 4. Likes and Comments
- Any user can like or comment on posts.  
- Likes and comments are updated instantly on the UI.  
- Each comment stores the username and timestamp of the commenter.

### 5. Delete Post
- Authors can delete only their own posts.  
- Confirmation prompts before deletion to prevent accidental actions.

### 6. Responsive UI
- Clean and modern design inspired by the TaskPlanet app’s social feed.  
- Built using **Material UI** and **CSS** for styling.

---

## Tech Stack

| Category | Technologies Used |
|-----------|-------------------|
| **Frontend** | React.js, Material UI, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | JWT (JSON Web Token), bcrypt |
| **Tools** | Nodemon, Morgan, CORS |
| **Hosting (optional)** | Vercel (Frontend), Render (Backend) |

---

## Project Structure
mini-social/
│
├── backend/
│ ├── server.js
│ ├── models.js
│ ├── middleware/
│ │ └── auth.js
│ ├── package.json
│ ├── .env
│ └── ...
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── api.js
│ │ ├── auth/
│ │ │ ├── Login.jsx
│ │ │ ├── Signup.jsx
│ │ │ └── AuthContext.jsx
│ │ ├── feed/
│ │ │ ├── Feed.jsx
│ │ │ ├── PostCard.jsx
│ │ │ └── CreatePost.jsx
│ │ └── index.css
│ ├── package.json
│ └── ...
│
└── README.md

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Nehal381/mini-social.git
cd mini-social

### 2. Setup Backend
cd backend
npm install

Create a .env file inside backend/ with:
MONGO_URI=your_mongodb_connection_url
JWT_SECRET=supersecretkey
PORT=4000
CLIENT_URL=http://localhost:5173
Run the backend server:
npm run dev
Backend will start on http://localhost:4000

3. Setup Frontend
cd ../frontend
npm install

Start the frontend server:
npm run dev
Frontend will run on http://localhost:5173

##API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/auth/signup	Create a new user
POST	/api/auth/login	Authenticate user and return JWT
Posts
Method	Endpoint	Description
GET	/api/posts	Get all posts
POST	/api/posts	Create a new post (requires token)
DELETE	/api/posts/:id	Delete post (author only)

##Database Structure
#User Schema
{
  username: String,
  email: String,
  passwordHash: String
}

 #Post Schema
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
  createdAt: Date,
  updatedAt: Date
}

### Future Enhancements
Add profile pages for each user
Enable editing posts
Implement image uploads via Cloudinary
Add pagination for the feed
Improve responsive design

Author
Saksham Singh
Full Stack Developer Intern | MERN Stack | MongoDB | React | Node.js
GitHub: https://github.com/Nehal381