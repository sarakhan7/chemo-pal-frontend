import React from 'react';
import '../styles/global.css';

function AboutUs() {
  return (
    <div className="container fadeIn">
      <h1>About Us</h1>
      <p>Chemo-Pal is a caring platform designed to help cancer patients during their journey. We offer personalized support and assistance to make life easier for you during treatment.</p>
      
      <div className="connect-section">
        <h2>Connect with Us</h2>
        <p>If you have any questions or need further assistance, please don't hesitate to reach out!</p>
        <ul>
          <li><strong>Email:</strong> support@chemopal.com</li>
          <li><strong>Phone:</strong> (123) 456-7890</li>
          <li><strong>Address:</strong> 123 Health St., Care City</li>
        </ul>
      </div>

      <button onClick={() => window.location.href = "/form-page-1"}>Sign Up</button>
    </div>
  );
}

export default AboutUs;
