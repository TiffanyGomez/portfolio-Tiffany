import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

function Experience() {
  // Données des expériences
  const experiences = [
    {
      id: 1,
      date: "Jan-Fév 2024",
      title: "Développeuse Web",
      company: "Infirmiers libéraux - Magalas",
      description: [
        "Création et gestion de la base de données en SQL",
        "Conception des pages web avec HTML et CSS",
        "Développement d'une partie administration avec PHP"
      ]
    },
    {
      id: 2,
      date: "Mai-Juin 2023",
      title: "Développeuse Web",
      company: "IS34 - Saint-Geniès de Fontedit",
      description: [
        "Création et gestion de la base de données en SQL",
        "Implémentation de tableaux animés avec JavaScript",
        "Élaboration du cahier des charges",
        "Gestion de la mise en page avec CSS"
      ]
    },
    {
      id: 3,
      date: "2020-2022",
      title: "Assistante Coach Sportif",
      company: "Tennis club de Magalas",
      description: [
        "Gestion d'une équipe de 8 à 12 enfants de 4 à 14 ans",
        "Création et animation des entraînements"
      ]
    },
    {
      id: 4,
      date: "2018-2024",
      title: "Bénévole Saisonnière",
      company: "Tennis club de Saint-Geniès de Fontédit",
      description: [
        "Gestion des pass sanitaires et des encaissements",
        "Prise et réalisation des commandes"
      ]
    }
  ];
  
  // Animations
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
    <section className="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Expériences
        </motion.h2>
        
        <motion.div 
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              variants={itemVariants}
            >
              <motion.div 
                className="timeline-dot"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + (0.2 * index), duration: 0.5 }}
              ></motion.div>
              
              <motion.div 
                className="timeline-date"
                whileHover={{ scale: 1.1 }}
              >
                {exp.date}
              </motion.div>
              
              <motion.div 
                className="timeline-content"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)' 
                }}
              >
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-subtitle">{exp.company}</p>
                <div className="timeline-text">
                  <ul>
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;