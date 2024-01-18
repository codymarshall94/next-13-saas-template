'use client';

import { useState } from 'react';
import MoveSequence from './components/MoveSequence';
import MoveCard from './components/MoveCard';

interface Move {
  category: string;
  skill: string;
}

const CreateClass = () => {
  const [moves, setMoves] = useState<Move[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSkill, setSelectedSkill] = useState<string>('');

  const addMove = (move: Move) => {
    setMoves([...moves, move]);
    setSelectedCategory('');
    setSelectedSkill('');
  };

  return (
    <div className='create-class-container'>
      <h1>Create Your Parkour Class Plan</h1>
      <MoveSequence
        moves={moves}
        addMove={addMove}
        selectedCategory={selectedCategory}
        selectedSkill={selectedSkill}
        setSelectedCategory={setSelectedCategory}
        setSelectedSkill={setSelectedSkill}
      />
      {moves.length > 0 &&
        moves.map((move, index) => <MoveCard key={index} move={move} />)}
    </div>
  );
};

export default CreateClass;
