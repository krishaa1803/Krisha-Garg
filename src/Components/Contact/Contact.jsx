import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id='contact' className="Contact">
      {/* Contact Section */}
      <div className="contact-title">
        <h1>Contact Me</h1>
      </div>
      <ul className="contact-list">
        <li>
          <a
            href="mailto:krishagarg18@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i> krishagarg18@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/krisha-garg-782469284/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/krishaa1803"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/krishaa__1803/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </li>
      </ul>

      {/* Footer Section */}
      <footer className="footer">
        <hr className="footer-divider" />
        <p className="footer-copyright">
          &copy; 2024 <strong>Krisha Garg</strong>. All rights reserved.
        </p>
        
      </footer>
    </div>
  );
};

export default Contact;
