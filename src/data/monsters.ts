// src/data/monsters.ts
export interface BodyPartRatings {
    sharp: number;
    blunt: number;
    ranged: number;
    fire: number;
    water: number;
    thunder: number;
    ice: number;
    dragon: number;
  }
  
  export interface Monster {
    name: string;
    effectiveElementalAttack: Record<string, number>;
    effectiveStatusEffect: Record<string, number>;
    effectiveItems: Record<string, boolean>;
    bodyParts: Record<string, BodyPartRatings>;
  }
  
  // Example monster data for "Great Jagras"
  export const monsters: Monster[] = [
    {
      name: "Great Jagras",
      effectiveElementalAttack: {
        Fire: 1,
        Water: 2,
        Thunder: 0,
      },
      effectiveStatusEffect: {
        Poison: 3,
        Sleep: 1,
      },
      effectiveItems: {
        flashPod: true,
        sonicPod: false,
        pitfallTrap: true,
        shockTrap: true,
      },
      bodyParts: {
        head: {
          sharp: 2,
          blunt: 3,
          ranged: 1,
          fire: 1,
          water: 2,
          thunder: 0,
          ice: 1,
          dragon: 1,
        },
        torso: {
          sharp: 3,
          blunt: 2,
          ranged: 2,
          fire: 2,
          water: 1,
          thunder: 1,
          ice: 2,
          dragon: 0,
        },
        limbA: {
          sharp: 1,
          blunt: 2,
          ranged: 3,
          fire: 0,
          water: 2,
          thunder: 1,
          ice: 1,
          dragon: 0,
        },
        limbB: {
          sharp: 2,
          blunt: 2,
          ranged: 1,
          fire: 2,
          water: 1,
          thunder: 1,
          ice: 1,
          dragon: 0,
        },
        limbC: {
          sharp: 2,
          blunt: 1,
          ranged: 2,
          fire: 1,
          water: 1,
          thunder: 1,
          ice: 2,
          dragon: 1,
        },
        limbD: {
          sharp: 3,
          blunt: 1,
          ranged: 1,
          fire: 0,
          water: 3,
          thunder: 2,
          ice: 1,
          dragon: 0,
        },
      },
    },
  ];
  