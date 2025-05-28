
import React, { useState, useEffect, useCallback } from 'react';
import './MemoryGame.css';

const cardImages = [
  '🍎', '🍌', '🍒', '🍇', 
  '🍓', '🍍', '🥝', '🍋',
  '🍎', '🍌', '🍒', '🍇', 
  '🍓', '🍍', '🥝', '🍋'
];

function MemoryGame() {
  const [username, setUsername] = useState('');
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [highScores, setHighScores] = useState([]);

  // Memoized shuffle array function
  const shuffleArray = useCallback((array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }, []);

  // Memoized reset game function
  const resetGame = useCallback(() => {
    setCards(shuffleArray(cardImages));
    setFlippedCards([]);
    setMatchedPairs([]);
    setMoves(0);
    setGameOver(false);
  }, [shuffleArray]);

  // Load high scores from local storage on component mount
  useEffect(() => {
    const savedHighScores = JSON.parse(localStorage.getItem('memoryGameHighScores') || '[]');
    setHighScores(savedHighScores);
  }, []);

  // Shuffle cards when username is set
  useEffect(() => {
    if (isUsernameSet) {
      resetGame();
    }
  }, [isUsernameSet, resetGame]);

  // Update high scores when game is won
  useEffect(() => {
    if (gameOver) {
      const newScore = { 
        username, 
        moves, 
        date: new Date().toLocaleDateString() 
      };

      // Create a unique set of scores
      const updatedHighScores = [
        ...highScores, 
        newScore
      ]
      // Remove duplicates by combining username, moves, and date
      .filter((score, index, self) => 
        index === self.findIndex((t) => (
          t.username === score.username && 
          t.moves === score.moves && 
          t.date === score.date
        ))
      )
      // Sort by moves
      .sort((a, b) => a.moves - b.moves)
      // Take top 10
      .slice(0, 10);
      
      setHighScores(updatedHighScores);
      localStorage.setItem('memoryGameHighScores', JSON.stringify(updatedHighScores));
    }
  }, [gameOver, highScores, moves, username]);

  const handleCardClick = (index) => {
    // Prevent clicking already matched or currently flipped cards
    if (
      matchedPairs.includes(index) || 
      flippedCards.includes(index) || 
      flippedCards.length === 2
    ) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);
    
    // Only increment moves when two cards are flipped
    if (newFlippedCards.length === 2) {
      setMoves(prevMoves => prevMoves + 1);
    }

    // Check for match when two cards are flipped
    if (newFlippedCards.length === 2) {
      setTimeout(() => {
        const [firstIndex, secondIndex] = newFlippedCards;
        if (cards[firstIndex] === cards[secondIndex]) {
          // Match found
          const newMatchedPairs = [...matchedPairs, firstIndex, secondIndex];
          setMatchedPairs(newMatchedPairs);
          setFlippedCards([]);

          // Check if game is won
          if (newMatchedPairs.length === cards.length) {
            setGameOver(true);
          }
        } else {
          // No match
          setFlippedCards([]);
        }
      }, 1000);
    }
  };

  const handleUsernameSubmit = () => {
    if (username.trim()) {
      setIsUsernameSet(true);
    }
  };

  const isCardFlipped = (index) => 
    flippedCards.includes(index) || matchedPairs.includes(index);

  // If username is not set, show username input
  if (!isUsernameSet) {
    return (
      <div className="memory-game username-setup">
        <h2>Memory Game</h2>
        <div className="username-input-container">
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <button onClick={handleUsernameSubmit}>Start Game</button>
        </div>
      </div>
    );
  }

if (gameOver) {
    return (
      <div className="memory-game game-over">
        <h2>Game Over</h2>
        <p>Congratulations, {username}! 🎉</p>
        <p>You completed the game in {moves} moves</p>
        
        <div className="high-scores">
          <h3>High Scores</h3>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Moves</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {highScores.map((score, index) => (
                <tr 
                  key={`${score.username}-${score.moves}-${score.date}`} 
                  className={score.username === username ? 'current-player' : ''}
                >
                  <td>{index + 1}</td>
                  <td>{score.username}</td>
                  <td>{score.moves}</td>
                  <td>{score.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <button onClick={resetGame}>Play Again</button>
      </div>
    );
  }

  // Main game screen
  return (
    <div className="memory-game">
      <h2>Memory Game</h2>
      <div className="game-info">
        <p>Player: {username}</p>
        <p>Moves: {moves}</p>
      </div>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className={`card ${isCardFlipped(index) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(index)}
          >
            <div className="card-inner">
              <div className="card-front">?</div>
              <div className="card-back">{card}</div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={resetGame} className="reset-button">Reset Game</button>
    </div>
  );
}

export default MemoryGame;