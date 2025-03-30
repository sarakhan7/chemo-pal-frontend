import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Make sure to import useNavigate

import '../styles/formStyles.css';  // Import your styles

function FormPage1() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();  // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone && email) {
      // After successful form validation, navigate to FormPage2
      navigate('/form-page-2');
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="container fadeIn">
      <h1>Welcome! Please provide your information</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default FormPage1;
