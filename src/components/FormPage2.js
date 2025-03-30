import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/formStyles.css'; // Correct path to form styles

const FormPage2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ethnicity: '',
    age: '',
    gender: '',
    medicalHistory: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    navigate('/formpage3');
  };

  return (
    <div className="form-page">
      <h2>Medical and Personal Information</h2>
      <form>
        <div className="form-input">
          <label>Ethnicity:</label>
          <input 
            type="text" 
            name="ethnicity" 
            value={formData.ethnicity} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-input">
          <label>Age:</label>
          <input 
            type="number" 
            name="age" 
            value={formData.age} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-input">
          <label>Gender:</label>
          <input 
            type="text" 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-input">
          <label>Medical History:</label>
          <textarea 
            name="medicalHistory" 
            value={formData.medicalHistory} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="button" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default FormPage2;
