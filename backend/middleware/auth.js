import jwt from "jsonwebtoken";

export const requireAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      console.log("No Authorization header found");
      return res.status(401).json({ message: "No token provided" });
    }

    // Header format: "Bearer <token>"
    const token = authHeader.split(" ")[1];
    if (!token) {
      console.log(" No token found after Bearer");
      return res.status(401).json({ message: "Invalid token format" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log(" Token verified for user:", decoded.username);

    next();
  } catch (err) {
    console.error(" Auth middleware error:", err.message);
    res.status(403).json({ message: "Unauthorized" });
  }
};
