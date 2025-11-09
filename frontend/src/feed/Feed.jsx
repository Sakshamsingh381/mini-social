import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api";
import PostCard from "./PostCard";
import CreatePost from "./CreatePost";
import { useAuth } from "../auth/AuthContext";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        console.error("Feed load error:", err);
        setError("Failed to load posts");
      } finally {
        setLoading(false);
      }
    }
    loadPosts();
  }, []);

  const handlePostCreated = (newPost) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "auto" }}>
      {user && (
        <CreatePost
          token={user.token}
          onPostCreated={handlePostCreated}
        />
      )}

      {posts.length === 0 ? (
        <p>No posts yet!</p>
      ) : (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      )}
    </div>
  );
}
