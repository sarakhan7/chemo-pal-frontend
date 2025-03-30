import React, { useState } from 'react';

const symptoms = [
  'Fatigue', 'Nausea', 'Hair Loss', 'Pain', 'Anxiety', 'Depression', 
  'Loss of Appetite', 'Insomnia', 'Difficulty Breathing', 'Swelling', 
  'Mouth Sores', 'Vomiting', 'Dizziness', 'Diarrhea', 'Constipation', 
  'Headaches', 'Chills', 'Weight Loss', 'Fever', 'Coughing', 'Sore Throat', 
  'Skin Rash', 'Back Pain', 'Muscle Aches', 'Joint Pain', 'Dysphagia'
];

const FormPage3 = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setSelectedSymptoms((prev) =>
      prev.includes(name)
        ? prev.filter((symptom) => symptom !== name)
        : [...prev, name]
    );
  };

  const handleSubmit = () => {
    alert("Successfully registered.");
  };

  return (
    <div className="form-page3">
      <h2>Step 3: Select Symptoms</h2>
      <div className="scrollable-checkboxes">
        {symptoms.map((symptom) => (
          <div key={symptom}>
            <input
              type="checkbox"
              id={symptom}
              name={symptom}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={symptom}>{symptom}</label>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <div className="success-message hidden">Successfully registered.</div>
    </div>
  );
};

export default FormPage3;
