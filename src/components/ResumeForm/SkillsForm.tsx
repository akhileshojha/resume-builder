import React from 'react';

interface SkillsProps {
  skills: string[];
  onChange: (skills: string[]) => void;
}

const SkillsForm: React.FC<SkillsProps> = ({ skills, onChange }) => {
  const handleSkillChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedSkills = skills.map((skill, i) => (i === index ? e.target.value : skill));
    onChange(updatedSkills);
  };

  const addSkill = () => {
    onChange([...skills, '']);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            value={skill}
            onChange={(e) => handleSkillChange(index, e)}
            placeholder="Skill"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addSkill}
        className="mt-4 p-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
      >
        Add Skill
      </button>
    </div>
  );
};

export default SkillsForm;