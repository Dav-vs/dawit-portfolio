import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <AnimatedBackground />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App; 