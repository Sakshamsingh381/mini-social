import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./auth/Signup.jsx";
import Login from "./auth/Login.jsx";
import Feed from "./feed/Feed.jsx";
import { Box, Button } from "@mui/material";

export default function App() {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
        <Button variant="contained" component={Link} to="/signup">Signup</Button>
        <Button variant="contained" component={Link} to="/login">Login</Button>
        <Button variant="contained" component={Link} to="/feed">Feed</Button>
      </Box>

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Box>
  );
}
