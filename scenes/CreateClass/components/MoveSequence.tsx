import { useState } from 'react';
import { PARKOUR_SKILLS, ParkourSkills } from '@/constants/skills';
import SkillSelector from './SkillSelector';

interface Move {
  category: string;
  skill: string;
}

const MoveSequence = ({
  moves,
  addMove,
  selectedCategory,
  selectedSkill,
  setSelectedCategory,
  setSelectedSkill,
}: {
  moves: Move[];
  addMove: (move: any) => void;
  selectedCategory: string;
  selectedSkill: string;
  setSelectedCategory: (category: string) => void;
  setSelectedSkill: (skill: string) => void;
}) => {
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSelectedSkill('');
  };

  const handleSkillSelect = (skill: string) => {
    setSelectedSkill(skill);
    addMove({ category: selectedCategory, skill });
  };

  const categoryOptions = Object.keys(PARKOUR_SKILLS) as Array<
    keyof ParkourSkills
  >;
  const skillOptions = selectedCategory
    ? PARKOUR_SKILLS[selectedCategory].map((skill) => skill.name)
    : [];

  return (
    <div>
      {moves.map((move, index) => (
        <div key={index}>
          Category: {move.category}, Skill: {move.skill}
        </div>
      ))}
      <div>
        <SkillSelector
          options={categoryOptions}
          onSelect={handleCategorySelect}
          placeholder='Select Category'
        />
        {selectedCategory && (
          <SkillSelector
            options={skillOptions}
            onSelect={handleSkillSelect}
            placeholder='Select Skill'
          />
        )}
      </div>
      <button onClick={() => addMove({ category: '', skill: '' })}>
        Add Another Move
      </button>
    </div>
  );
};

export default MoveSequence;
