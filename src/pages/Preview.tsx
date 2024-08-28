import React from 'react';
import { useLocation } from 'react-router-dom';
import ResumePreview from '../components/ResumePreview';

interface PreviewProps {
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

const Preview: React.FC<PreviewProps> = () => {
    const location = useLocation();
    const { personalInfo, education, experience, skills, projects } = location.state as PreviewProps;
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <ResumePreview 
          personalInfo={personalInfo}
          education={education}
          experience={experience}
          skills={skills}
          projects={projects}
        />
        <div className="mt-8 text-center">
          <button 
            onClick={() => window.print()}
            className="inline-block p-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition duration-300"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;