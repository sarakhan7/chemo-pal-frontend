import React from 'react';
import '../styles/global.css';

function Home() {
  return (
    <div className="container fadeIn">
      <h1>Welcome to Chemo-Pal!</h1>
      <p>Your companion in cancer care. We're here to make your journey easier and more comfortable.</p>
      <p>
        <strong>Sign up</strong> and get started with personalized support.
      </p>
      <button onClick={() => window.location.href = "/about-us"}>Learn More About Us</button>
      <button className="signup-btn" onClick={() => window.location.href = "/form-page-1"}>Sign Up</button>
    </div>
  );
}

export default Home;
