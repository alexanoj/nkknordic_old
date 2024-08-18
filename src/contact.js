// Contact.js
import React from 'react';
import './contact.css'; // Make sure the path matches where your CSS file will be located

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>For any questions regarding Nordisk Kemiteknolog Konferens in Trondheim:</p>
      
      <ul className="email-list">
        <li><a href="mailto:utenriks@hc.ntnu.no">utenriks@hc.ntnu.no</a></li>
      </ul>
    </div>
  );
};

export default Contact;
