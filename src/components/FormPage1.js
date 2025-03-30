import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/formStyles.css'; // Correct path to form styles

const FormPage1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    navigate('/formpage2');
  };

  return (
    <div className="form-page">
      <h2>Personal Information</h2>
      <form>
        <div className="form-input">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-input">
          <label>Phone Number:</label>
          <input 
            type="text" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-input">
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="button" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default FormPage1;
