import React from 'react';
import './Footer.css';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h5>About Me</h5>
        <p>Hey, my name is Disha Purwar. I am a Full-Stack Developer.</p>
        <a href="/contact" className="footerContactBtn">
          <p>Contact Us</p>
        </a>
      </div>
      <div>
        <h6>Social Media</h6>
        <div className="social-links">
          <a href="https://github.com/dishapurwar" target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
          <a href="mailto:dishaapurwar@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdEmail />
          </a>
          <a href="https://instagram.com/meabhisingh/" target="_blank" rel="noopener noreferrer">
            <BsInstagram />
          </a>
          <a href="https://www.linkedin.com/in/disha-purwar-600116248/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
