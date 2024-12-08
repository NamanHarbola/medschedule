document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("newUsername").value.trim();
    const password = document.getElementById("newPassword").value.trim();
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    usernameError.style.display = "none";
    passwordError.style.display = "none";

    let isValid = true;

    if (username.length < 3 || username.length > 15) {
        usernameError.style.display = "block";
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.style.display = "block";
        isValid = false;
    }

    if (!isValid) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(user => user.username === username)) {
        alert("Username already exists. Please choose another one.");
        return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! You can now log in.");
    window.location.href = "login.html"; 
});
