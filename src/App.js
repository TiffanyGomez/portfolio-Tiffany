import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './screens/Hero/Hero';
import About from './screens/About/About';
import Projects from './screens/Projects/Projects';
import Experience from './screens/Experience/Experience';
import Skills from './screens/Skills/Skills';
import Contact from './screens/Contact/Contact';
import Game from './screens/Game/Game';
import MemoryGame from './screens/Game/MemoryGame';
import HangmanGame from './screens/Game/HangmanGame';


import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/game" element={<Game />} />
            <Route path="/game/memoryGame" element={<MemoryGame />} />
            <Route path="/game/hangmanGame" element={<HangmanGame />} />


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;