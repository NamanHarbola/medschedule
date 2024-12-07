const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "video.mp4"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "signup.html"));
});

app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "form.html"));
});

app.get("/homepage", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "homepage.html"));
});

app.get("/logout", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "logout.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
