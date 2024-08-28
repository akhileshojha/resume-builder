import React from 'react';

interface ResumePreviewProps {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  education: Array<{
    institution: string;
    degree: string;
    startYear: string;
    endYear: string;
  }>;
  experience: Array<{
    company: string;
    position: string;
    startYear: string;
    endYear: string;
    description: string;
  }>;
  skills: string[];
  projects: Array<{
    title: string;
    description: string;
    link: string;
  }>;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({
  personalInfo,
  education,
  experience,
  skills,
  projects,
}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{personalInfo.name}</h1>
      <p className="text-gray-600 mb-2">{personalInfo.email}</p>
      <p className="text-gray-600 mb-2">{personalInfo.phone}</p>
      <p className="text-gray-600 mb-6">{personalInfo.address}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-medium text-gray-800">{edu.degree}, {edu.institution}</h3>
            <p className="text-gray-600">{edu.startYear} - {edu.endYear}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-medium text-gray-800">{exp.position}, {exp.company}</h3>
            <p className="text-gray-600">{exp.startYear} - {exp.endYear}</p>
            <p className="text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Skills</h2>
        <ul className="list-disc list-inside text-gray-600">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-medium text-gray-800">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">{project.link}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumePreview;