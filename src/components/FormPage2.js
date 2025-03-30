import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Ensure useNavigate is imported

import '../styles/formStyles.css';  // Import your styles

function FormPage2() {
  const [ethnicity, setEthnicity] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const navigate = useNavigate();  // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ethnicity && age && gender && medicalHistory) {
      // After successful form validation, navigate to FormPage3
      navigate('/form-page-3');
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="container fadeIn">
      <h1>Tell us a bit more about yourself</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ethnicity</label>
          <input 
            type="text" 
            value={ethnicity} 
            onChange={(e) => setEthnicity(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Age</label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Gender</label>
          <input 
            type="text" 
            value={gender} 
            onChange={(e) => setGender(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Medical History</label>
          <textarea 
            value={medicalHistory} 
            onChange={(e) => setMedicalHistory(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default FormPage2;
