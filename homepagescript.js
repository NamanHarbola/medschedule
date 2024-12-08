// JavaScript code from your script section
const doctors = [
    /* Doctor data here */
];

// Function to search doctors by symptoms
function searchDoctors() {
    const symptom = document.getElementById("symptom").value.toLowerCase();
    const results = doctors.filter(doctor =>
        doctor.symptoms.some(symptomMatch => symptomMatch.includes(symptom))
    );

    const resultsContainer = document.getElementById("doctor-results");
    resultsContainer.innerHTML = results.length
        ? results.map(doctor => `<p>${doctor.name} (${doctor.specialization}) - ${doctor.area}</p>`).join("")
        : "<p class='no-data'>No doctors found for this symptom.</p>";
}

// Function to filter the doctor table
function filterTable() {
    const query = document.getElementById("searchDoctor").value.toLowerCase();
    const rows = document.querySelectorAll("#doctorTable tbody tr");

    rows.forEach(row => {
        const name = row.cells[0].innerText.toLowerCase();
        const specialization = row.cells[1].innerText.toLowerCase();
        if (name.includes(query) || specialization.includes(query)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

// Function to load user data from URL params
function loadUserData() {
    const urlParams = new URLSearchParams(window.location.search);

    const fullName = urlParams.get('fullName');
    const dob = urlParams.get('dob');
    const gender = urlParams.get('gender');
    const contactNumber = urlParams.get('contactNumber');
    const address = urlParams.get('address');

    document.getElementById('fullName').textContent = fullName ? fullName : 'Not provided';
    document.getElementById('dob').textContent = dob ? dob : 'Not provided';
    document.getElementById('gender').textContent = gender ? gender : 'Not provided';
    document.getElementById('contactNumber').textContent = contactNumber ? contactNumber : 'Not provided';
    document.getElementById('address').textContent = address ? address : 'Not provided';
}

window.onload = loadUserData;
