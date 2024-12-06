const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());  // Use Express's built-in JSON parser

// In-memory "database"
const users = [];

// Signup endpoint
app.post("/signup", (req, res) => {
    const { username, password } = req.body;

    // Check if the username already exists
    if (users.some(user => user.username === username)) {
        return res.json({ success: false, message: "Username already exists" });
    }

    // Save the user
    users.push({ username, password });
    res.json({ success: true });
});

// Login endpoint
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: "Invalid username or password" });
    }
});

// Root endpoint (Optional, for testing)
app.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

// Start server
app.listen(PORT, "localhost", () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

