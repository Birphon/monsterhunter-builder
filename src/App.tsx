// src/App.tsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MonsterEncyclopedia from './pages/MonsterEncyclopedia';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MonsterEncyclopedia />} />
      </Routes>
    </Router>
  );
};

export default App;
