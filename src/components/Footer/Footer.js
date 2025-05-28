import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="relative">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">Tiffany Gomez</div>
          <p className="footer-text">Architecte des Systèmes d'Information passionnée par le développement web et la technologie.</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/tiffany-gomez-05b46025a" className="social-link" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/TiffanyGomez" className="social-link" target="_blank" rel="noreferrer">Github</a>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Tiffany Gomez. Tous droits réservés.</p>
        <div className="rooster-animation">
        <div className="animate-walk"></div>
           </div>
        </div>
        
      </div>
   

      
    </footer>
  );
}

export default Footer;