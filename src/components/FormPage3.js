import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure useNavigate is imported
import '../styles/formStyles.css'; // Import styles for form

function FormPage3() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  const symptoms = [
    'Nausea', 'Fatigue', 'Hair Loss', 'Appetite Loss', 'Pain', 
    'Anxiety', 'Depression', 'Insomnia', 'Dizziness', 'Fever', 
    'Shortness of Breath', 'Swelling', 'Bruising', 'Weight Loss', 
    'Dry Skin', 'Rashes', 'Heart Palpitations', 'Loss of Taste', 
    'Loss of Smell', 'Digestive Issues', 'Mouth Sores', 'Other'
  ];

  // Handle checkbox selection
  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedSymptoms((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)  // Remove from list
        : [...prevSelected, value]  // Add to list
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSymptoms.length > 0) {
      // After successful submission, redirect to a confirmation page
      alert('Thank you for submitting your symptoms!');
      navigate('/');  // You can redirect to another page if needed
    } else {
      alert('Please select at least one symptom');
    }
  };

  return (
    <div className="container fadeIn">
      <h1>Check all symptoms you are experiencing</h1>
      <form onSubmit={handleSubmit}>
        <div className="scrollable-list">
          {symptoms.map((symptom, index) => (
            <div key={index} className="checkbox-item">
              <label>
                <input
                  type="checkbox"
                  value={symptom}
                  onChange={handleChange}
                  checked={selectedSymptoms.includes(symptom)}
                />
                {symptom}
              </label>
            </div>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage3;
