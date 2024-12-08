document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    // Clear previous errors
    usernameError.style.display = "none";
    passwordError.style.display = "none";

    let isValid = true;

    if (!username) {
        usernameError.style.display = "block";
        isValid = false;
    }

    if (!password) {
        passwordError.style.display = "block";
        isValid = false;
    }

    if (!isValid) return;

    // Check user credentials from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login successful!");
        window.location.href = "form.html"; // Redirect to homepage
    } else {
        alert("Invalid username or password.");
    }
});

// Redirection Links
document.getElementById("signupLink").addEventListener("click", () => {
    window.location.href = "signup.html"; // Redirect to signup page
});

document.getElementById("homeLink").addEventListener("click", () => {
    window.location.href = "index.html"; // Redirect to home page
});

