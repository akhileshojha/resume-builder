import React from 'react';

interface Education {
  institution: string;
  degree: string;
  startYear: string;
  endYear: string;
}

interface EducationProps {
  education: Education[];
  onChange: (education: Education[]) => void;
}

const EducationForm: React.FC<EducationProps> = ({ education, onChange }) => {
  const handleEducationChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedEducation = education.map((edu, i) =>
      i === index ? { ...edu, [e.target.name]: e.target.value } : edu
    );
    onChange(updatedEducation);
  };

  const addEducation = () => {
    onChange([...education, { institution: '', degree: '', startYear: '', endYear: '' }]);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            name="institution"
            value={edu.institution}
            onChange={(e) => handleEducationChange(index, e)}
            placeholder="Institution"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm mb-2"
          />
          <input
            type="text"
            name="degree"
            value={edu.degree}
            onChange={(e) => handleEducationChange(index, e)}
            placeholder="Degree"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm mb-2"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="startYear"
              value={edu.startYear}
              onChange={(e) => handleEducationChange(index, e)}
              placeholder="Start Year"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <input
              type="text"
              name="endYear"
              value={edu.endYear}
              onChange={(e) => handleEducationChange(index, e)}
              placeholder="End Year"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addEducation}
        className="mt-4 p-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
      >
        Add Education
      </button>
    </div>
  );
};

export default EducationForm;