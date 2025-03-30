import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css'; // Global styles for the whole site

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to Chemo-Pal</h2>
      <p>We provide easy-to-use tools for cancer patients to track symptoms and communicate with healthcare providers.</p>
      <Link to="/formpage1">Start the Form</Link>
      <br />
      <Link to="/aboutus">Learn More About Us</Link>
    </div>
  );
};

export default Home;
