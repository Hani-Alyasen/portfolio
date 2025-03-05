import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 MyTechCompany. All rights reserved.</p>
      <div>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub size={30} color="#fff" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin size={30} color="#fff" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaTwitter size={30} color="#fff" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaFacebook size={30} color="#fff" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
