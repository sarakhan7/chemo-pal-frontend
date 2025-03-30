import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css';

const symptomsList = [
    "Nausea", "Fatigue", "Hair Loss", "Loss of Appetite", "Fever", "Pain", "Skin Changes"
];

const Page3 = ({ formData, setFormData }) => {
    const navigate = useNavigate();

    const handleCheckboxChange = (symptom) => {
        let updatedSymptoms = [...formData.symptoms];
        if (updatedSymptoms.includes(symptom)) {
            updatedSymptoms = updatedSymptoms.filter(s => s !== symptom);
        } else {
            updatedSymptoms.push(symptom);
        }
        setFormData({ ...formData, symptoms: updatedSymptoms });
    };

    const handleSubmit = () => {
        console.log("Final Form Data:", formData);
        alert("Form submitted successfully!");
        navigate('/');
    };

    return (
        <div className="form-container">
            <h2>Check Your Symptoms</h2>
            {symptomsList.map((symptom, index) => (
                <label key={index} className="checkbox">
                    <input
                        type="checkbox"
                        checked={formData.symptoms.includes(symptom)}
                        onChange={() => handleCheckboxChange(symptom)}
                    />
                    {symptom}
                </label>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Page3;
