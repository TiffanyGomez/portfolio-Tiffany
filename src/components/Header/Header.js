import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Fermer le menu mobile quand on clique sur un lien
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);
  
  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            <div className="logo-icon">T</div>
            <span>Tiffany</span>
          </Link>
          
          {/* Menu desktop */}
          <div className="nav-links desktop-menu">
            <Link to="/" className={isActive('/') ? 'active' : ''}>Accueil</Link>
            <Link to="/about" className={isActive('/about') ? 'active' : ''}>À propos</Link>
            <Link to="/projects" className={isActive('/projects') ? 'active' : ''}>Projets</Link>
            <Link to="/experience" className={isActive('/experiences') ? 'active' : ''}>Expérience</Link>
            <Link to="/skills" className={isActive('/skills') ? 'active' : ''}>Compétences</Link>
            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
            <Link to="/game" className={isActive('/game') ? 'active' : ''}>Jeux</Link>
          </div>

          {/* Bouton hamburger */}
          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>

      {/* Menu mobile */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <Link 
            to="/" 
            className={isActive('/') ? 'active' : ''} 
            onClick={handleLinkClick}
          >
            Accueil
          </Link>
          <Link 
            to="/about" 
            className={isActive('/about') ? 'active' : ''} 
            onClick={handleLinkClick}
          >
            À propos
          </Link>
          <Link 
            to="/projects" 
            className={isActive('/projects') ? 'active' : ''} 
            onClick={handleLinkClick}
          >
            Projets
          </Link>
          <Link 
            to="/experience" 
            className={isActive('/experiences') ? 'active' : ''} 
            onClick={handleLinkClick}
          >
            Expérience
          </Link>
          <Link 
            to="/skills" 
            className={isActive('/skills') ? 'active' : ''} 
            onClick={handleLinkClick}
          >
            Compétences
          </Link>
          <Link 
            to="/contact" 
            className={isActive('/contact') ? 'active' : ''} 
            onClick={handleLinkClick}
          >
            Contact
          </Link>
          <Link 
            to="/game" 
            className={isActive('/game') ? 'active' : ''} 
            onClick={handleLinkClick}
          >
            Jeux
          </Link>
        </div>
      </div>

      {/* Overlay pour fermer le menu en cliquant à l'extérieur */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}

export default Header;