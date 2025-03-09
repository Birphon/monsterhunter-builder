// src/pages/MonsterEncyclopedia.tsx
import React from 'react';
import { Monster, monsters } from '../data/monsters';

const MonsterEncyclopedia: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Monster Encyclopedia</h1>
      <div>
        {monsters.map((monster: Monster) => (
          <div key={monster.name} className="mb-6">
            <h2 className="text-3xl font-semibold">{monster.name}</h2>
            
            <h3 className="text-xl font-semibold mt-4">Effective Elemental Attacks</h3>
            <ul>
              {Object.entries(monster.effectiveElementalAttack).map(([element, value]) => (
                <li key={element}>
                  {element}: {value === 0 ? 'No Effect' : `${value} star(s)`}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-4">Effective Status Effects</h3>
            <ul>
              {Object.entries(monster.effectiveStatusEffect).map(([status, rating]) => (
                <li key={status}>
                  {status}: {rating} star(s)
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-4">Effective Items</h3>
            <ul>
              {Object.entries(monster.effectiveItems).map(([item, isEffective]) => (
                <li key={item}>
                  {item}: {isEffective ? 'Effective' : 'Ineffective'}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-4">Body Parts</h3>
            <table className="table-auto w-full text-left border-collapse mt-2">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Body Part</th>
                  <th className="border px-4 py-2">Sharp</th>
                  <th className="border px-4 py-2">Blunt</th>
                  <th className="border px-4 py-2">Ranged</th>
                  <th className="border px-4 py-2">Fire</th>
                  <th className="border px-4 py-2">Water</th>
                  <th className="border px-4 py-2">Thunder</th>
                  <th className="border px-4 py-2">Ice</th>
                  <th className="border px-4 py-2">Dragon</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(monster.bodyParts).map(([part, ratings]) => (
                  <tr key={part}>
                    <td className="border px-4 py-2">{part}</td>
                    {Object.values(ratings).map((rating, idx) => (
                      <td key={idx} className="border px-4 py-2">{rating}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonsterEncyclopedia;
