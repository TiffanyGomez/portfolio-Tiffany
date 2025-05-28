import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from '../screens/Hero/Hero';
import About from '../screens/About/About';
import Projects from '../screens/Projects/Projects';
import Experience from '../screens/Experience/Experience';
import Skills from '../screens/Skills/Skills';
import Contact from '../screens/Contact/Contact';
import Game from '../screens/Game/Game';
import MemoryGame from './screens/Game/MemoryGame';
import SnakeGame from './screens/Game/SnakeGame';

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/game" element={<Game />} />
      <Route path="/game/memoryGame" element={<MemoryGame />} />
      <Route path="/game/snakeGame" element={<SnakeGame />} />

    </Routes>
  );
};

export default RouteConfig;