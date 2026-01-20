import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#work">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-copyright">Beatrice Kibor | Software Developer &copy; 2026</p>
        </div>
        <div className="footer-section">
          <div className="footer-contact">
            <i className="lni lni-phone-handset"></i>
            <p>+254 718 630 482</p>
          </div>
          <div className="footer-contact">
            <i className="lni lni-envelope"></i>
            <p><a href="mailto:kibor9346@gmail.com">kibor9346@gmail.com</a></p>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/betty-kibor-4483b5317/" target="_blank" rel="noopener noreferrer">
              <i className="lni lni-linkedin-original"></i>
            </a>
            <a href="https://github.com/B-Kibor" target="_blank" rel="noopener noreferrer">
              <i className="lni lni-github-original"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
