import React, { useState } from "react";
import { createPost } from "../api";
import { useAuth } from "../auth/AuthContext";

export default function CreatePost() {
  const { user } = useAuth();
  const [text, setText] = useState("");

  const handlePost = async (e) => {
    e.preventDefault();
    if (!user) return alert("Please login first");
    try {
      await createPost({ content: text }, user.token);
      alert("Post created!");
      setText("");
    } catch (err) {
      alert("Failed to create post");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handlePost}>
      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Post</button>
    </form>
  );
}
