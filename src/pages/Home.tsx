// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Monster Hunter Builder</h1>
      <p className="mb-4">Welcome to the Monster Hunter Builder! Navigate to the Monster Encyclopedia to learn more about monsters and their weaknesses.</p>
      <Link to="/monster-encyclopedia" className="text-blue-500 text-lg underline">
        Go to Monster Encyclopedia
      </Link>
    </div>
  );
};

export default Home;
