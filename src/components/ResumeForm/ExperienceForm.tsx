import React from 'react';

interface Experience {
  company: string;
  position: string;
  startYear: string;
  endYear: string;
  description: string;
}

interface ExperienceProps {
  experience: Experience[];
  onChange: (experience: Experience[]) => void;
}

const ExperienceForm: React.FC<ExperienceProps> = ({ experience, onChange }) => {
  const handleExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedExperience = experience.map((exp, i) =>
      i === index ? { ...exp, [e.target.name]: e.target.value } : exp
    );
    onChange(updatedExperience);
  };

  const addExperience = () => {
    onChange([...experience, { company: '', position: '', startYear: '', endYear: '', description: '' }]);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            name="company"
            value={exp.company}
            onChange={(e) => handleExperienceChange(index, e)}
            placeholder="Company"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm mb-2"
          />
          <input
            type="text"
            name="position"
            value={exp.position}
            onChange={(e) => handleExperienceChange(index, e)}
            placeholder="Position"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm mb-2"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="startYear"
              value={exp.startYear}
              onChange={(e) => handleExperienceChange(index, e)}
              placeholder="Start Year"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <input
              type="text"
              name="endYear"
              value={exp.endYear}
              onChange={(e) => handleExperienceChange(index, e)}
              placeholder="End Year"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <textarea
            name="description"
            value={exp.description}
            onChange={(e) => handleExperienceChange(index, e)}
            placeholder="Job Description"
            className="mt-2 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addExperience}
        className="mt-4 p-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
      >
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;