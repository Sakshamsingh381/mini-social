import React from "react";

export default function PostCard({ post }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: "left",
      }}
    >
      <h3>{post.authorName}</h3>
      {post.text && <p>{post.text}</p>}
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt="Post"
          style={{ maxWidth: "100%", borderRadius: "10px" }}
        />
      )}
      <small style={{ color: "#777" }}>
        {new Date(post.createdAt).toLocaleString()}
      </small>
    </div>
  );
}
