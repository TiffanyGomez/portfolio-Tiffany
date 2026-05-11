import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  // Créer les bulles animées au chargement
    useEffect(() => {
    const createBubbles = () => {
      const bubblesContainer = document.querySelector('.bubbles');
      if (!bubblesContainer) return;
      
      const colors = ['#1A85FF', '#13C0D5', '#FFC328', '#FF5A5F'];
      
      // Nettoyer les bulles existantes
      bubblesContainer.innerHTML = '';
      
      for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        
        // Propriétés aléatoires pour chaque bulle
        const size = Math.random() * 30 + 10;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.backgroundColor = color;
        bubble.style.left = `${left}%`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.animationDelay = `${delay}s`;
        bubble.style.opacity = '0.2';
        
        bubblesContainer.appendChild(bubble);
      }
    };

    
    createBubbles();
    
    // Nettoyer les bulles lorsque le composant est démonté
    return () => {
      const bubblesContainer = document.querySelector('.bubbles');
      if (bubblesContainer) {
        bubblesContainer.innerHTML = '';
      }
    };
  }, []); 
  
  return (
    <section className="hero">
      {/* Nuages décoratifs */}
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>
      <div className="cloud cloud-4"></div>
      
      {/* Conteneur pour les bulles animées */}
      <div className="bubbles"></div>
  
      
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
  {"Tiffany Gomez".split("").map((char, index) => (
    <motion.span 
      key={index}
      className="hero-letter"
      whileHover={{ 
        y: -10, 
        color: "#FF5A5F", // Utilisez une couleur de votre palette
        scale: 1.1, // Ajoutez un léger zoom
        transition: { 
          duration: 0.2,
          type: "spring", // Animation de type ressort pour plus de dynamisme
          stiffness: 300 
        } 
      }}
    >
      {char === " " ? "\u00A0" : char} {/* Gère les espaces */}
    </motion.span>
  ))}
</h1>
          
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Architecte des Systèmes d'Information
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Software Engineer en alternance chez Teads. Passionnée par le développement web, Je suis toujours à la recherche de nouveaux défis.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link to="/contact" className="btn">Me contacter</Link>
          </motion.div>
        </motion.div>
      </div>
      
        <Link to="/game" className="ball-link">
        <motion.div 
          className="ball"
          whileHover={{ 
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
          }}
        />
      </Link>
    </section>
  );
}

export default Hero;