function saveUserData() {
    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        address: document.getElementById('address').value,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert("User data saved successfully!");
    window.location.href = "homepage.html";
}
