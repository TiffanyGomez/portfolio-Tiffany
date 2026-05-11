import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  // Variantes d'animation pour Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          À propos
        </motion.h2>
        
        <div className="about-content">
          <div className="about-image">
            <motion.div 
              className="about-blob1"
              animate={{ 
                borderRadius: [
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "70% 30% 30% 70% / 70% 70% 30% 30%",
                  "30% 30% 70% 70% / 60% 40% 60% 40%",
                  "40% 60% 60% 40% / 30% 60% 40% 70%",
                  "30% 70% 70% 30% / 30% 30% 70% 70%"
                ]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                repeatType: "loop" 
              }}
            />
            <motion.div 
              className="about-blob2"
              animate={{ 
                borderRadius: [
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "70% 30% 30% 70% / 70% 70% 30% 30%",
                  "30% 30% 70% 70% / 60% 40% 60% 40%",
                  "40% 60% 60% 40% / 30% 60% 40% 70%",
                  "30% 70% 70% 30% / 30% 30% 70% 70%"
                ]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                repeatType: "loop" 
              }}
            />
            <motion.div 
              className="about-blob"
              animate={{ 
                borderRadius: [
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "70% 30% 30% 70% / 70% 70% 30% 30%",
                  "30% 30% 70% 70% / 60% 40% 60% 40%",
                  "40% 60% 60% 40% / 30% 60% 40% 70%",
                  "30% 70% 70% 30% / 30% 30% 70% 70%"
                ]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                repeatType: "loop" 
              }}
            />
            
           
<div className='about-cloud'>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="300" height="300">
    
    <ellipse cx="70" cy="85" rx="30" ry="20" 
             fill="#4A90E2" stroke="#2E5C8A" stroke-width="2" 
             transform="rotate(-25 70 85)"/>
    <ellipse cx="130" cy="85" rx="30" ry="20" 
             fill="#4A90E2" stroke="#2E5C8A" stroke-width="2" 
             transform="rotate(25 130 85)"/>
    
    <ellipse cx="80" cy="115" rx="20" ry="15" 
             fill="#6BB6FF" stroke="#2E5C8A" stroke-width="2" 
             transform="rotate(-35 75 115)"/>
    <ellipse cx="120" cy="115" rx="20" ry="15" 
             fill="#6BB6FF" stroke="#2E5C8A" stroke-width="2" 
             transform="rotate(35 125 115)"/>
    
    <ellipse cx="100" cy="100" rx="3" ry="40" fill="#2E5C8A"/>
    
    <g fill="none" stroke="#2E5C8A" stroke-width="2" stroke-linecap="round">
      <path d="M98,70 Q95,60 92,55"/>
      <path d="M102,70 Q105,60 108,55"/>
      <circle cx="92" cy="55" r="2" fill="#2E5C8A"/>
      <circle cx="108" cy="55" r="2" fill="#2E5C8A"/>
    </g>
    
    <circle cx="70" cy="75" r="3" fill="#87CEEB" opacity="0.8"/>
    <circle cx="85" cy="80" r="3" fill="#87CEEB" opacity="0.8"/>
    <circle cx="60" cy="90" r="3" fill="#87CEEB" opacity="0.8"/>
    
    <circle cx="125" cy="75" r="3" fill="#87CEEB" opacity="0.8"/>
    <circle cx="115" cy="90" r="3" fill="#87CEEB" opacity="0.8"/>
    <circle cx="145" cy="90" r="3" fill="#87CEEB" opacity="0.8"/>

    <circle cx="80" cy="110" r="2" fill="#B0E0E6" opacity="0.9"/>
    <circle cx="120" cy="110" r="2" fill="#B0E0E6" opacity="0.9"/>
    
  </svg>
</div>


            <div className="about-character"> 

         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="300" height="300">
    # Tige
    <rect x="98" y="115" width="4" height="85" fill="#228B22" rx="2"/>
    
    # Petites feuilles
    <ellipse cx="72" cy="170" rx="12" ry="6" fill="#32CD32" stroke="#228B22" stroke-width="1" transform="rotate(-30 85 140)"/>
    <ellipse cx="125" cy="175" rx="12" ry="6" fill="#32CD32" stroke="#228B22" stroke-width="1" transform="rotate(30 115 150)"/>
   
    # Pétales de la marguerite (12 pétales)
    <g fill="#FFD700" stroke="#FFA500" stroke-width="1.5">
      # Pétales du haut
      <ellipse cx="100" cy="63" rx="8" ry="20" transform="rotate(0 100 100)"/>
      <ellipse cx="100" cy="63" rx="8" ry="20" transform="rotate(30 100 100)"/>
      <ellipse cx="100" cy="63" rx="8" ry="20" transform="rotate(60 100 100)"/>
      <ellipse cx="100" cy="63" rx="8" ry="20" transform="rotate(90 100 100)"/>
      <ellipse cx="100" cy="63" rx="8" ry="20" transform="rotate(120 100 100)"/>
      <ellipse cx="100" cy="63" rx="8" ry="20" transform="rotate(150 100 100)"/>
      <ellipse cx="100" cy="63" rx="8" ry="20" transform="rotate(180 100 100)"/>
      <ellipse cx="100" cy="63" rx="8" ry="20" transform="rotate(210 100 100)"/>
      <ellipse cx="100" cy="63" rx="8" ry="20" transform="rotate(240 100 100)"/>
      <ellipse cx="100" cy="63" rx="8" ry="20" transform="rotate(270 100 100)"/>
      <ellipse cx="100" cy="63" rx="8" ry="20" transform="rotate(300 100 100)"/>
      <ellipse cx="100" cy="63" rx="8" ry="20" transform="rotate(330 100 100)"/>
    </g>
    
    # Cœur de la marguerite
    <circle cx="100" cy="100" r="15" fill="#FFF8DC" stroke="#FFB347" stroke-width="2"/>
    
    # Détails du cœur (petits points)
    <g fill="#FFB347" opacity="0.7">
      <circle cx="95" cy="95" r="1.5"/>
      <circle cx="105" cy="95" r="1.5"/>
      <circle cx="100" cy="105" r="1.5"/>
      <circle cx="95" cy="105" r="1.5"/>
      <circle cx="105" cy="105" r="1.5"/>
      <circle cx="100" cy="95" r="1"/>
    </g>
    
     
  </svg>

            </div>
            <div className='about-turtle'>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="300" height="300">
    
    # Pattes arrière
    <ellipse cx="70" cy="130" rx="12" ry="8" fill="#228B22" stroke="#006400" stroke-width="2"/>
    <ellipse cx="130" cy="130" rx="12" ry="8" fill="#228B22" stroke="#006400" stroke-width="2"/>
    
    # Pattes avant
    <ellipse cx="75" cy="85" rx="10" ry="12" fill="#228B22" stroke="#006400" stroke-width="2"/>
    <ellipse cx="125" cy="85" rx="10" ry="12" fill="#228B22" stroke="#006400" stroke-width="2"/>
    
    # Carapace principale
    <ellipse cx="100" cy="110" rx="45" ry="35" fill="#32CD32" stroke="#006400" stroke-width="3"/>
    
    # Motifs sur la carapace (hexagones)
    <g fill="#228B22" stroke="#006400" stroke-width="1">
      # Centre
      <circle cx="100" cy="110" r="8"/>
      # Autour du centre
      <circle cx="85" cy="100" r="6"/>
      <circle cx="115" cy="100" r="6"/>
      <circle cx="85" cy="120" r="6"/>
      <circle cx="115" cy="120" r="6"/>
      <circle cx="100" cy="95" r="5"/>
      <circle cx="100" cy="125" r="5"/>
    </g>
    
    # Tête
    <ellipse cx="100" cy="65" rx="15" ry="12" fill="#32CD32" stroke="#006400" stroke-width="2"/>
    
    # Yeux
    <circle cx="93" cy="60" r="3" fill="#000"/>
    <circle cx="107" cy="60" r="3" fill="#000"/>
    <circle cx="94" cy="59" r="1" fill="#FFF"/>
    <circle cx="108" cy="59" r="1" fill="#FFF"/>
    
    # Petite bouche
    <path d="M97,68 Q100,70 103,68" fill="none" stroke="#006400" stroke-width="1.5" stroke-linecap="round"/>
    
    # Queue
    <ellipse cx="100" cy="148" rx="8" ry="5" fill="#228B22" stroke="#006400" stroke-width="2"/>
    
  </svg>
</div>
             </div>
          
          <motion.div 
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants}>
              Je suis Tiffany Gomez, une développeuse web et architecte de systèmes d'information de 20 ans, actuellement en alternance chez Teads tout en poursuivant mon Master of Sciences à Epitech Montpellier.
            </motion.p>
            <motion.p variants={itemVariants}>
              Ma passion pour la technologie et la résolution de problèmes m'a amenée à explorer diverses technologies web et langages de programmation. J'aime créer des solutions innovantes et des expériences utilisateur engageantes.
            </motion.p>

            
            <motion.div 
              className="info-cards"
              variants={containerVariants}
            >
              <motion.div 
                className="info-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)' 
                }}
              >
                <div className="card-bg card-bg-1"></div>
                <div className="card-icon">👩‍💻</div>
                <h3 className="card-title">Mes formations</h3>

                <p className="card-text">Master of Sciences à Epitech</p>
                <p className="date-location">2024-2027, à Montpellier.</p>

                <p className="card-text">BTS Services Informatiques aux Organisations / SLAM</p>
                <p className="date-location">2022-2024, à Sérignan.</p>

                <p className="card-text">Bac Général avec spécialités en mathématiques et sciences de l'informatique.</p>
                <p className="date-location">2019-2022, à Béziers.</p>

              </motion.div>
              
              <motion.div 
                className="info-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)' 
                }}
              >
                <div className="card-bg card-bg-2"></div>
                <div className="card-icon">🚀</div>
                <h3 className="card-title">Mes passions</h3>
                <p className="card-text">Développement web, programmation, Réalité virtuelle, tennis, jeu d'échecs, les randonnées et les animaux.</p>
              </motion.div>
              
              <motion.div 
                className="info-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)' 
                }}
              >
                <div className="card-bg card-bg-3"></div>
                <div className="card-icon">💪</div>
                <h3 className="card-title">Mes atouts</h3>
                <p className="card-text">Curiosité, autonomie, travail d'équipe, à l'écoute des besoins, capacité d'adaptation et résolution de problèmes.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;