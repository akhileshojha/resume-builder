import React from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
  onChange: (projects: Project[]) => void;
}

const ProjectsForm: React.FC<ProjectsProps> = ({ projects, onChange }) => {
  const handleProjectChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedProjects = projects.map((project, i) =>
      i === index ? { ...project, [e.target.name]: e.target.value } : project
    );
    onChange(updatedProjects);
  };

  const addProject = () => {
    onChange([...projects, { title: '', description: '', link: '' }]);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            name="title"
            value={project.title}
            onChange={(e) => handleProjectChange(index, e)}
            placeholder="Project Title"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm mb-2"
          />
          <textarea
            name="description"
            value={project.description}
            onChange={(e) => handleProjectChange(index, e)}
            placeholder="Project Description"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm mb-2"
          />
          <input
            type="text"
            name="link"
            value={project.link}
            onChange={(e) => handleProjectChange(index, e)}
            placeholder="Project Link"
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addProject}
        className="mt-4 p-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
      >
        Add Project
      </button>
    </div>
  );
};

export default ProjectsForm;