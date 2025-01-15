import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope, FaReddit, FaGithub, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icon-container">
        <a href="https://www.linkedin.com/in/sreethar-n-j-b83741253" target="_blank" rel="noopener noreferrer" className="icon linkedin">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/sreethar170?igsh=MWtibTdxbWRwZHE4cA==" target="_blank" rel="noopener noreferrer" className="icon instagram">
          <FaInstagram />
        </a>
        <a href="mailto:sreethar170@gmail.com" className="icon mail">
          <FaEnvelope />
        </a>
        <a href="https://www.reddit.com/u/sreethar170/s/inrM2DI2Wo" target="_blank" rel="noopener noreferrer" className="icon reddit">
          <FaReddit />
        </a>
        <a href="https://github.com/Sreethar170" target="_blank" rel="noopener noreferrer" className="icon github">
          <FaGithub />
        </a>
        <a href="https://x.com/sreethar170?t=OecJkJP3zxNwis3GXwBsSQ&s=08" target="_blank" rel="noopener noreferrer" className="icon twitter">
          <FaTwitter />
        </a>
      </div>
      <p className="copyright">© 2025 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
