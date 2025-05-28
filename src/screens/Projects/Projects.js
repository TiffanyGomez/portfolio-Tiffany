import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

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
      title: "Application d'Auto-École",
      description: "Création d'une application de gestion pour auto-école avec C#. Gestion des élèves, des leçons et suivi des progrès.",
      emoji: "🚗",
      tags: ["C#", "Base de données"],
      bgColor: "var(--pixar-red)"
    },
    {
      id: 4,
      title: "Site Web e-commerce",
      description: "Création d'un site web pour 'steppy' avec React. Gestion des stocks, du panier et UI/UX.",
      emoji: "👟",
      tags: ["React", "Base de données"],
      bgColor: "var(--pixar-green)"
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
              className="project-card"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' 
              }}
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