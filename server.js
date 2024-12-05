const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Dummy data
const user = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+987654321",
};

const medicalHistory = [
    { date: "2023-01-10", condition: "Flu", treatment: "Antibiotics" },
    { date: "2022-11-05", condition: "Back Pain", treatment: "Physical Therapy" },
];

const doctors = [
    { name: "Dr. Emily Brown", specialization: "Cardiologist", area: "downtown" },
    { name: "Dr. Liam Johnson", specialization: "Dermatologist", area: "uptown" },
    { name: "Dr. Olivia White", specialization: "Neurologist", area: "suburbs" },
    { name: "Dr. Noah Davis", specialization: "Pediatrician", area: "city center" },
];

// API endpoints
app.get('/api/user', (req, res) => res.json(user));

app.get('/api/medical-history', (req, res) => res.json(medicalHistory));

app.get('/api/doctors', (req, res) => {
    const { specialization, area } = req.query;
    const filteredDoctors = doctors.filter(doc => {
        const matchesSpecialization = specialization
            ? doc.specialization.toLowerCase().includes(specialization.toLowerCase())
            : true;
        const matchesArea = area ? doc.area.toLowerCase() === area.toLowerCase() : true;
        return matchesSpecialization && matchesArea;
    });
    res.json(filteredDoctors);
});

// Start server
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
