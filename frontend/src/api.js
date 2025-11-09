const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

// ✅ Signup
export async function signupUser(data) {
  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Signup failed:", errText);
    throw new Error("Signup failed");
  }

  return res.json();
}

// ✅ Login
export async function loginUser(data) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Login failed:", errText);
    throw new Error("Login failed");
  }

  return res.json();
}

// ✅ Fetch all posts
export async function fetchPosts() {
  const res = await fetch(`${API_BASE}/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

// ✅ Create post (with token)
export async function createPost(data, token) {
  const res = await fetch(`${API_BASE}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error("Create post failed:", text);
    throw new Error("Failed to create post");
  }
  return JSON.parse(text);
}
