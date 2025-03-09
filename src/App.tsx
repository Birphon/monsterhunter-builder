// src/App.tsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Import the new Home page
import MonsterEncyclopedia from './pages/MonsterEncyclopedia'; // Import the Monster Encyclopedia page

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monster-encyclopedia" element={<MonsterEncyclopedia />} />
      </Routes>
    </Router>
  );
};

export default App;
