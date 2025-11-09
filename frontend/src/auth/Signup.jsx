import React, { useState } from "react";
import { signupUser } from "../api";
import { useAuth } from "./AuthContext";

export default function Signup() {
  const { login } = useAuth();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await signupUser(form);

      alert(res.message || "Signup successful!");
      login(res.user); // Save user to context/localStorage

      // Optional: redirect to feed
      // window.location.href = "/feed";
    } catch (err) {
      console.error("Signup error:", err);
      alert(err.message || "Signup failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <h2>Create an Account</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "inline-block",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          style={{ display: "block", margin: "10px auto", padding: "8px" }}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ display: "block", margin: "10px auto", padding: "8px" }}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{ display: "block", margin: "10px auto", padding: "8px" }}
          required
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Signing up..." : "Signup"}
        </button>
      </form>
    </div>
  );
}
