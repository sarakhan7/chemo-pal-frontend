import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css';

const Page2 = ({ formData, setFormData }) => {
    const navigate = useNavigate();

    return (
        <div className="form-container">
            <h2>Medical Information</h2>
            <input
                type="text"
                placeholder="Ethnicity"
                value={formData.ethnicity}
                onChange={(e) => setFormData({ ...formData, ethnicity: e.target.value })}
            />
            <input
                type="number"
                placeholder="Age"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
            <input
                type="text"
                placeholder="Gender"
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            />
            <textarea
                placeholder="Medical History"
                value={formData.medicalHistory}
                onChange={(e) => setFormData({ ...formData, medicalHistory: e.target.value })}
            />
            <button onClick={() => navigate('/page3')}>Next</button>
        </div>
    );
};

export default Page2;
