import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

function Skills() {
  // Groupes de compétences
  const skillGroups = [
    {
      id: "languages",
      title: "Langages de programmation",
      skills: [
        { name: "JavaScript", icon: "js-icon" },
        { name: "Python", icon: "python-icon" },
        { name: "PHP", icon: "php-icon" },
        { name: "C#", icon: "csharp-icon" },
        { name: "SQL", icon: "sql-icon" },
        { name: "Java", icon: "java-icon" },
        { name: "Scala", icon: "scala-icon" },
        { name: "React", icon: "react-icon" },
        { name: "Node", icon: "node-icon" },
        { name: "HTML", icon: "html-icon" },
        { name: "CSS", icon: "css-icon" }

      ]
    },
    {
      id: "softSkills",
      title: "Soft Skills",
      skills: [
        { name: "Curiosité", icon: "🔍" },
        { name: "Autonomie", icon: "👨‍💻" },
        { name: "Travail d'équipe", icon: "🧩" },
        { name: "À l'écoute", icon: "👂" }
      ]
    },
    {
      id: "other",
      title: "Autres compétences",
      skills: [
        { name: "Anglais C1", icon: "🌐" },
        { name: "Tennis", icon: "🎾" },
        { name: "Échecs", icon: "♟️" }
      ]
    }
  ];
  
  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };
  
  return (
    <section className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Compétences
        </motion.h2>
        
        {skillGroups.map((group) => (
          <div key={group.id} className="skill-section">
            <motion.h3 
              className="skill-group-title"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {group.title}
            </motion.h3>
            
            <motion.div 
              className="skills-container"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {group.skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="skill-item"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <div className="skill-icon">
                    {skill.icon.startsWith('http') ? (
                      <img src={skill.icon} alt={skill.name} />
                    ) : skill.icon.includes('-icon') ? (
                      <div className={skill.icon}></div>
                    ) : (
                      <span className="skill-emoji">{skill.icon}</span>
                    )}
                  </div>
                  <p className="skill-name">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;