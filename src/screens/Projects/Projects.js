import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import { link } from 'framer-motion/client';

function Projects() {
  // Données des projets
  const projects = [
    {
      id: 1,
      title: "Lampadaires Intelligents",
      description: "Conception et programmation de lampadaires intelligents avec Python. Création d'une interface web intuitive pour faciliter leur utilisation.",
      emoji: "💡",
      tags: ["Python", "HTML", "CSS"],
      bgColor: "var(--pixar-teal)"
    },
    {
      id: 2,
      title: "Application de Musique",
      description: "Développement d'une application musicale avec C#. Interface utilisateur intuitive et fonctionnalités avancées de lecture et d'organisation.",
      emoji: "🎵",
      tags: ["C#", "UI/UX"],
      bgColor: "var(--pixar-orange)"
    },
    {
      id: 3,
      title: "Site web job board",
      description: "Création d'un site web de job board avec javascript et node. Gestion des employés, des inactifs et suivi des recrutements.",
      emoji: "🚗",
      tags: ["javascript", "node", "Base de données"],
      bgColor: "var(--pixar-red)",
      link: "https://github.com/TiffanyGomez/Job_Board"
    },
    {
      id: 4,
      title: "Application windows d'un commerce",
      description: "Création d'une application pour 'gomezBoutique' avec C#. Gestion des stocks, du panier et UI/UX.",
      emoji: "👟",
      tags: ["C#", "Base de données"],
      bgColor: "var(--pixar-green)",
      link: "https://github.com/TiffanyGomez/boutique-window/tree/main/gomezBoutique/gomezBoutique/gomezBoutique"
    }
  ];
  
  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

 const handleProjectClick = (link) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };
  
  return (
    <section className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mes projets
        </motion.h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className={`project-card ${project.link ? 'clickable' : ''}`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' 
              }}
              onClick={() => handleProjectClick(project.link)}
              style={{ cursor: project.link ? 'pointer' : 'default' }}
            >
              <div 
                className="project-img" 
                style={{ backgroundColor: project.bgColor }}
              >
                <span className="project-emoji">{project.emoji}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;