import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import FormPage1 from './components/FormPage1';
import FormPage2 from './components/FormPage2';
import FormPage3 from './components/FormPage3';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/form-page-1" element={<FormPage1 />} />
        <Route path="/form-page-2" element={<FormPage2 />} />
        <Route path="/form-page-3" element={<FormPage3 />} />
      </Routes>
    </Router>
  );
}

export default App;
