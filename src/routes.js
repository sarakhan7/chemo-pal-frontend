import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import FormPage1 from './components/FormPage1';
import FormPage2 from './components/FormPage2';
import FormPage3 from './components/FormPage3';

const RoutesSetup = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/formpage1" element={<FormPage1 />} />
        <Route path="/formpage2" element={<FormPage2 />} />
        <Route path="/formpage3" element={<FormPage3 />} />
      </Routes>
    </Router>
  );
};

export default RoutesSetup;
