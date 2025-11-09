import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User, Post } from "./models.js";
import { requireAuth } from "./middleware/auth.js";

const app = express();
const router = express.Router();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB connected"))
  .catch((e) => console.error("MongoDB Error:", e));

function sign(user) {
  return jwt.sign(
    { id: user._id, email: user.email, username: user.username },
    process.env.JWT_SECRET
  );
}

// ---------------------- AUTH ROUTES ----------------------

router.post("/auth/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Email already registered" });

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, passwordHash });

    res.status(201).json({
      message: "Signup successful",
      token: sign(user),
      user: { id: user._id, username: user.username },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Error during signup" });
  }
});

router.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login attempt:", email);

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    console.log("User found:", user.email);

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    console.log("Password match result:", isMatch);

    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    res.json({
      message: "Login successful",
      token: sign(user),
      user: { id: user._id, username: user.username },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

// ---------------------- POST ROUTES ----------------------

router.post("/posts", requireAuth, async (req, res) => {
  console.log(" [CREATE POST CALLED]");
  console.log("User decoded from token:", req.user);
  console.log("Request body:", req.body);

  try {
    const { text, imageUrl } = req.body;
    if (!text && !imageUrl) {
      console.log("Missing text or image");
      return res.status(400).json({ message: "Add text or image" });
    }

    const post = await Post.create({
      authorId: req.user.id,
      authorName: req.user.username,
      text,
      imageUrl,
    });

    console.log(" Post created:", post);
    res.status(201).json(post);
  } catch (error) {
    console.error(" Error creating post:", error);
    res.status(500).json({ message: "Server error while creating post" });
  }
});

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    console.error("Feed error:", error);
    res.status(500).json({ message: "Failed to load posts" });
  }
});

// ---------------------- MOUNT ROUTER ----------------------
app.use("/api", router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
