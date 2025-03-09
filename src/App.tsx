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
// TEST COMMENT LOL
// TEST TWO
// TEST THREE
// Fixed?
export default App;
