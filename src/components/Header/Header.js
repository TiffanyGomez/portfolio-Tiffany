import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Effet pour détecter le défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Vérifier si un lien est actif
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            <div className="logo-icon">T</div>
            <span>Tiffany</span>
          </Link>
          
          <div className="nav-links">
            <Link to="/" className={isActive('/') ? 'active' : ''}>Accueil</Link>
            <Link to="/about" className={isActive('/about') ? 'active' : ''}>À propos</Link>
            <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>Projets</Link>
            <Link to="/experience" className={isActive('/experience') ? 'active' : ''}>Expérience</Link>
            <Link to="/skills" className={isActive('/skills') ? 'active' : ''}>Compétences</Link>
            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
            <Link to="/game" className={isActive('/game') ? 'active' : ''}>Jeux</Link>

          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;