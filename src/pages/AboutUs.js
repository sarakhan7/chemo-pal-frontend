import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css'; // Global styles for the whole site

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>We are a team dedicated to making cancer treatment easier and more accessible. Our goal is to assist patients through technology, providing personalized care and support.</p>
      <p>Our platform, Chemo-Pal, offers a simple and efficient way for patients to track symptoms and communicate with healthcare professionals.</p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default AboutUs;
