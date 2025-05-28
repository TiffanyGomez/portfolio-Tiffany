import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // EmailJS configuration
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    
    emailjs.send(
      'service_2pnsg5x',       
      'template_0mmc7di',      
      templateParams,
      'Ji1Y1NdZVoNMrFWy5'         
    )
    .then((result) => {
      setLoading(false);
      setSubmitted(true);
      // Réinitialiser le formulaire après quelques secondes
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitted(false);
      }, 5000);
    })
    .catch((error) => {
      setLoading(false);
      setError('Une erreur est survenue. Veuillez réessayer plus tard.');
      console.error('Email error:', error);
    });
  };
  
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
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
        
        <div className="contact-container">
          <motion.div 
            className="contact-form"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3 
              className="contact-form-title"
              variants={itemVariants}
            >
              Envoyez-moi un message
            </motion.h3>
            
            {submitted ? (
              <motion.div 
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="success-icon">✓</div>
                <h3>Message envoyé!</h3>
                <p>Merci pour votre message. Je vous répondrai dès que possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <motion.div className="form-group" variants={itemVariants}>
                  <label htmlFor="name">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </motion.div>
                
                <motion.div className="form-group" variants={itemVariants}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </motion.div>
                
                <motion.div className="form-group" variants={itemVariants}>
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </motion.div>
                
                <motion.div className="form-group" variants={itemVariants}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    rows="5"
                    required
                  ></textarea>
                </motion.div>
                
                <motion.button 
                  type="submit" 
                  className="btn"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 8px 20px rgba(255, 90, 95, 0.4)' 
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Envoyer
                </motion.button>
              </form>
            )}
          </motion.div>
          
          <motion.div 
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3 
              className="contact-title"
              variants={itemVariants}
            >
              Mes Coordonnées
            </motion.h3>
            
            <ul className="contact-list">
              <motion.li 
                className="contact-item"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>tiffany.gomez@epitech.eu</p>
                </div>
              </motion.li>
              
              <motion.li 
                className="contact-item"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Localisation</h4>
                  <p>Montpellier, France</p>
                </div>
              </motion.li>
              
              <motion.li 
                className="contact-item"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="contact-icon">💼</div>
                <div className="contact-text">
                  <h4>Emploi actuel</h4>
                  <p>En alternance chez Teads</p>
                </div>
              </motion.li>
              
              <motion.li 
                className="contact-item"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="contact-icon">📚</div>
                <div className="contact-text">
                  <h4>Formation</h4>
                  <p>Master of Sciences - Epitech</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;