import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './components/Page1';
import Page2 from './components/FormPage2';
import Page3 from './components/FormPage3';

const AppRouter = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        ethnicity: '',
        age: '',
        gender: '',
        medicalHistory: '',
        symptoms: []
    });

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Page1 formData={formData} setFormData={setFormData} />} />
                <Route path="/page2" element={<Page2 formData={formData} setFormData={setFormData} />} />
                <Route path="/page3" element={<Page3 formData={formData} setFormData={setFormData} />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
