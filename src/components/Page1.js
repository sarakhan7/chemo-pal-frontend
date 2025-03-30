import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css';

const Page1 = ({ formData, setFormData }) => {
    const navigate = useNavigate();

    return (
        <div className="form-container">
            <h2>Welcome to Chemo-Pal</h2>
            <p>About Us | Connect With Us</p>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <button onClick={() => navigate('/page2')}>Next</button>
        </div>
    );
};

export default Page1;
