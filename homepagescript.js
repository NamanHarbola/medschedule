const symptomDiseaseMapping = {
    fever: ["Flu", "Malaria", "Dengue", "Typhoid"],
    cough: ["Common Viral", "Bronchitis", "Pneumonia", "Tuberculosis"],
};

function searchDiseases() {
    const symptomInput = document.getElementById("symptomSearch").value.toLowerCase();
    const diseases = symptomDiseaseMapping[symptomInput];
    const resultsContainer = document.getElementById("disease-results");

    if (diseases && diseases.length > 0) {
        resultsContainer.innerHTML = `
            <h3>Diseases related to "${symptomInput}":</h3>
            <ul>${diseases.map(disease => `<li>${disease}</li>`).join("")}</ul>
        `;
    } else {
        resultsContainer.innerHTML = `<p class="no-data">No diseases found for the symptom "${symptomInput}".</p>`;
    }
}
