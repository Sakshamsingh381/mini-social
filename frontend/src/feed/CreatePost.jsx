import React, { useState } from "react";
import { createPost } from "../api";
import { useAuth } from "../auth/AuthContext";

export default function CreatePost({ onPostCreated }) {
  const { token } = useAuth();
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!token) {
      alert("No token found. Please log in again.");
      setLoading(false);
      return;
    }

    try {
      console.log("Sending token:", token);
      const newPost = await createPost({ text, imageUrl }, token);
      alert("Post created successfully!");
      setText("");
      setImageUrl("");
      if (onPostCreated) onPostCreated(newPost);
    } catch (err) {
      console.error("Create post error:", err);
      alert("Failed to create post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "10px",
        marginBottom: "1rem",
      }}
    >
      <h3>Create Post</h3>
      <textarea
        placeholder="Write something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100%", height: "80px", marginBottom: "10px" }}
        required
      />
      <input
        type="text"
        placeholder="Optional image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Posting..." : "Post"}
      </button>
    </form>
  );
}
