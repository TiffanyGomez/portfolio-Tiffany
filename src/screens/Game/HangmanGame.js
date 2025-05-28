
import React, { useState, useEffect, useCallback, useRef } from 'react';
import './HangmanGame.css';

// Liste de mots plus longue et variée
const WORDS = [
  'JAVASCRIPT', 'REACT', 'DEVELOPPEMENT', 'ORDINATEUR', 
  'PROGRAMMATION', 'ALGORITHME', 'INTERFACE', 'SYSTEME', 
  'TECHNOLOGIE', 'SERVEUR', 'INNOVATION', 'RESEAU', 
  'APPRENTISSAGE', 'INTELLIGENCE', 'APPLICATION', 'CYBERSECURITE',
  'BLOCKCHAIN', 'DONNÉES', 'MICROPROCESSEUR', 'INTELLIGENCE ARTIFICIELLE'
];

function HangmanGame() {
  const [username, setUsername] = useState('');
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const [hangmanColor, setHangmanColor] = useState('#1A85FF');
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [highScores, setHighScores] = useState([]);
  const [showingResults, setShowingResults] = useState(false);
  const [gameOverMessage, setGameOverMessage] = useState('');
  const [usernameExists, setUsernameExists] = useState(false);
  const [confirmingUsername, setConfirmingUsername] = useState(false);
  const [existingScore, setExistingScore] = useState(0);
  const [existingColor, setExistingColor] = useState('');

  // États du jeu
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [incorrectLetters, setIncorrectLetters] = useState(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [score, setScore] = useState(0);
  const [isWrongGuess, setIsWrongGuess] = useState(false);

  // Charger les high scores
  useEffect(() => {
    const savedHighScores = JSON.parse(localStorage.getItem('hangmanGameHighScores') || '[]');
    setHighScores(savedHighScores);
  }, []);

  // Vérifier si le nom d'utilisateur existe déjà
  const checkUsername = useCallback((name) => {
    const existingUser = highScores.find(score => score.username === name);
    if (existingUser) {
      setUsernameExists(true);
      setConfirmingUsername(true);
      setExistingScore(existingUser.score);
      setExistingColor(existingUser.hangmanColor || '#1A85FF');
    } else {
      setUsernameExists(false);
      setIsUsernameSet(true);
    }
  }, [highScores]);

  // Confirmer que c'est le même utilisateur
  const confirmSameUser = () => {
    setScore(existingScore);
    setHangmanColor(existingColor);
    setConfirmingUsername(false);
    setIsUsernameSet(true);
  };

  // Initialiser le jeu
  const initializeGame = useCallback(() => {
    // Choisir un mot aléatoirement
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setWord(randomWord);
    setGuessedLetters(new Set());
    setIncorrectLetters(new Set());
    setWrongGuesses(0);
    setWon(false);
    setGameOver(false);
    setIsWrongGuess(false);
    setShowingResults(false);
    setGameOverMessage('');
  }, []);

  // Fin de partie
  const endGame = useCallback((gameWon) => {
    // Mise à jour du score
    const updatedScore = gameWon ? score + 1 : score;
    
    // Rechercher si l'utilisateur existe déjà dans les scores
    const existingUserIndex = highScores.findIndex(entry => entry.username === username);
    
    let updatedHighScores = [...highScores];
    
    if (existingUserIndex !== -1) {
      // Mettre à jour le score existant si supérieur
      if (updatedScore > highScores[existingUserIndex].score) {
        updatedHighScores[existingUserIndex] = {
          ...highScores[existingUserIndex],
          score: updatedScore,
          date: new Date().toLocaleDateString(),
          hangmanColor
        };
      }
    } else {
      // Ajouter un nouveau score
      updatedHighScores.push({
        username,
        score: updatedScore,
        date: new Date().toLocaleDateString(),
        hangmanColor
      });
    }
    
    // Trier et limiter les scores
    updatedHighScores = updatedHighScores
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    
    setHighScores(updatedHighScores);
    localStorage.setItem('hangmanGameHighScores', JSON.stringify(updatedHighScores));
    
    // Mettre à jour le score si le joueur gagne
    if (gameWon) {
      setScore(updatedScore);
      setWon(true);
      setGameOver(true);
      setShowingResults(true);
    } else {
      // Afficher un message de fin de partie sur l'écran de jeu pendant 3 secondes
      setGameOverMessage('Game Over! Le mot était : ' + word);
      
      // Attendre 3 secondes avant d'afficher les résultats
      setTimeout(() => {
        setWon(false);
        setGameOver(true);
        setShowingResults(true);
      }, 3000);
    }
  }, [username, score, highScores, hangmanColor, word]);

  // Gérer la tentative de lettre
  const handleLetterGuess = useCallback((letter) => {
    // Ignorer si le jeu est terminé ou si un message de fin est affiché
    if (gameOver || gameOverMessage) return;

    // Convertir la lettre en majuscule
    const uppercaseLetter = letter.toUpperCase();

    // Vérifier si la lettre a déjà été devinée
    if (guessedLetters.has(uppercaseLetter)) return;

    // Mettre à jour les lettres devinées
    const newGuessedLetters = new Set(guessedLetters);
    newGuessedLetters.add(uppercaseLetter);
    setGuessedLetters(newGuessedLetters);

    // Vérifier si la lettre est dans le mot
    if (!word.includes(uppercaseLetter)) {
      // Mauvaise devinette
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);
      
      // Ajouter à la liste des lettres incorrectes
      const newIncorrectLetters = new Set(incorrectLetters);
      newIncorrectLetters.add(uppercaseLetter);
      setIncorrectLetters(newIncorrectLetters);

      // Animation de mauvaise devinette
      setIsWrongGuess(true);
      setTimeout(() => setIsWrongGuess(false), 500);

      // Vérifier si le joueur a perdu
      if (newWrongGuesses >= 10) {
        endGame(false);
      }
    } else {
      // Vérifier si le mot est completement deviné
      const isWordGuessed = word.split('').every(letter => 
        newGuessedLetters.has(letter)
      );

      if (isWordGuessed) {
        endGame(true);
      }
    }
  }, [word, guessedLetters, incorrectLetters, wrongGuesses, gameOver, endGame, gameOverMessage]);

  // Début du jeu
  useEffect(() => {
    if (isUsernameSet) {
      initializeGame();
    }
  }, [isUsernameSet, initializeGame]);

  // Gestion du clavier
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Ne traiter que les touches alphabétiques
      if (/^[a-zA-Z]$/.test(e.key)) {
        handleLetterGuess(e.key.toUpperCase());
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [handleLetterGuess]);

  // Écran de confirmation d'identité
  if (confirmingUsername) {
    return (
      <div className="hangman-game username-confirmation">
        <h2>Confirmation d'identité</h2>
        <p>Un joueur nommé "{username}" existe déjà avec un score de {existingScore}.</p>
        <p>Est-ce vous ?</p>
        <div className="confirmation-buttons">
          <button onClick={confirmSameUser}>
            Oui, c'est moi
          </button>
          <button onClick={() => {
            setUsername('');
            setConfirmingUsername(false);
            setUsernameExists(false);
          }}>
            Non, je vais changer de nom
          </button>
        </div>
      </div>
    );
  }

  // Écran de configuration du nom d'utilisateur
  if (!isUsernameSet) {
    return (
      <div className="hangman-game username-setup">
        <h2>Jeu du Pendu</h2>
        <div className="username-input-container">
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Entrez votre nom"
          />
          <input 
            type="color" 
            value={hangmanColor}
            onChange={(e) => setHangmanColor(e.target.value)}
            placeholder="Choisissez une couleur"
          />
          <button onClick={() => {
            if (username.trim()) {
              checkUsername(username.trim());
            }
          }}>
            Commencer
          </button>
        </div>
      </div>
    );
  }

  // Écran de jeu (ou avec message de fin mais avant de passer aux scores)
  if (!gameOver) {
    return (
      <div 
        className={`hangman-game ${isWrongGuess ? 'wrong-guess' : ''}`}
      >
        <h2>Jeu du Pendu</h2>
        <div className="game-info">
          <p>Joueur: {username}</p>
          <p>Score: {score}</p>
          <p>Erreurs: {wrongGuesses}/10</p>
          {gameOverMessage && (
            <div className="game-over-message">
              <p>{gameOverMessage}</p>
            </div>
          )}
        </div>

        <div className="game-content">
          {/* Dessin du pendu */}
          <div className="hangman-drawing-container">
            <svg 
              className="hangman-drawing" 
              viewBox="0 0 200 250" 
              style={{stroke: hangmanColor, strokeWidth: 4}}
            >
              {/* Base */}
              <line x1="50" y1="230" x2="150" y2="230" />
              {/* Poteau */}
              {wrongGuesses >= 1 && (
                <line x1="100" y1="230" x2="100" y2="50" />
              )}
              {/* Poutre horizontale */}
              {wrongGuesses >= 2 && (
                <line x1="100" y1="50" x2="150" y2="50" />
              )}
              {/* Corde */}
              {wrongGuesses >= 3 && (
                 <line x1="150" y1="50" x2="150" y2="100" />
              )}
              
              {/* Bonhomme allumette */}
              {wrongGuesses >= 4 && (
                <circle cx="150" cy="120" r="20" fill="none" />
              )}
              {wrongGuesses >= 5 && (
                <line x1="150" y1="140" x2="150" y2="180" />
              )}
              {wrongGuesses >= 6 && (
                <line x1="150" y1="150" x2="130" y2="160" />
              )}
              {wrongGuesses >= 7 && (
                <line x1="150" y1="150" x2="170" y2="160" />
              )}
              {wrongGuesses >= 8 && (
                <line x1="150" y1="180" x2="130" y2="210" />
              )}
              {wrongGuesses >= 9 && (
                <line x1="150" y1="180" x2="170" y2="210" />
              )}
              {wrongGuesses >= 10 && (
                <path d="M140,130 Q150,120 160,130" fill="none" />
              )}
            </svg>
          </div>

          {/* Conteneur pour le mot et le clavier */}
          <div className="word-and-keyboard-container">
            {/* Mot à deviner */}
            <div className="word-display">
              {word.split('').map((letter, index) => (
                <span 
                  key={index} 
                  className={`letter ${guessedLetters.has(letter) ? 'revealed' : ''}`}
                >
                  {guessedLetters.has(letter) ? letter : '_'}
                </span>
              ))}
            </div>

            {/* Lettres déjà essayées */}
            <div className="guessed-letters">
              <p>Lettres essayées : </p>
              {Array.from(guessedLetters).join(', ')}
            </div>

            {/* Clavier virtuel */}
            <div className="virtual-keyboard">
              {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter => (
                <button 
                  key={letter}
                  onClick={() => handleLetterGuess(letter)}
                  disabled={guessedLetters.has(letter) || gameOverMessage !== ''}
                  className={
                    guessedLetters.has(letter) 
                      ? (word.includes(letter) ? 'correct' : 'incorrect')
                      : ''
                  }
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Écran de fin de jeu
  return (
    <div className="hangman-game game-over">
      <h2>{won ? 'Bravo !' : 'Game Over'}</h2>
      <p>{won ? 'Vous avez deviné le mot !' : 'Vous avez perdu.'}</p>
      <p>Le mot était : {word}</p>
      <p>Votre score : {score}</p>
      
      <div className="high-scores">
        <h3>Meilleurs Scores</h3>
        <table>
          <thead>
            <tr>
              <th>Rang</th>
              <th>Joueur</th>
              <th>Score</th>
              <th>Date</th>
              <th>Couleur</th>
            </tr>
          </thead>
          <tbody>
            {highScores.map((scoreEntry, index) => (
              <tr 
                key={`${scoreEntry.username}-${scoreEntry.score}-${scoreEntry.date}`} 
                className={scoreEntry.username === username ? 'current-player' : ''}
              >
                <td>{index + 1}</td>
                <td>{scoreEntry.username}</td>
                <td>{scoreEntry.score}</td>
                <td>{scoreEntry.date}</td>
                <td>
                  <div 
                    className="color-preview" 
                    style={{backgroundColor: scoreEntry.hangmanColor}}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <button onClick={() => {
        setIsUsernameSet(false);
        setHangmanColor('#1A85FF');
      }}>
        Rejouer
      </button>
    </div>
  );
}

export default HangmanGame;