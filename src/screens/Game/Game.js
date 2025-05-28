import React from 'react';
import { motion } from 'framer-motion';
import './Game.css';
import { useNavigate } from 'react-router-dom';

function Game() {
  const navigate = useNavigate();

  const games = [
    {
      id: 1,
      title: "Jeu de mémoire",
      description: "Conception et programmation d'un jeu de mémoire avec Javascript.",
      emoji: "🧠",
      bgColor: "var(--pixar-teal)",
      route: "/game/memoryGame"

    },
    {
      id: 2,
      title: "Jeu du pendu",
      description: "Conception et programmation d'un jeu du pendu avec Javascript.",
      emoji: "👨🏼",
      bgColor: "var(--pixar-orange)",
      route: "/game/hangmanGame"

    },
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

const handleGameClick = (route) => {
    navigate(route);
};
  
  return (
    <section className="game">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Envie d'une pause ?
        </motion.h2>
        
        <motion.div 
          className="game-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {games.map((game) => (
            <motion.div 
              key={game.id} 
              className="game-card"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' 
              }}
                            onClick={() => handleGameClick(game.route)}

            >
              <div 
                className="game-img" 
                style={{ backgroundColor: game.bgColor }}
              >
                <span className="game-emoji">{game.emoji}</span>
              </div>
              <div className="game-content">
                <h3 className="game-title">{game.title}</h3>
                <p className="game-desc">{game.description}</p>
                
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Game;