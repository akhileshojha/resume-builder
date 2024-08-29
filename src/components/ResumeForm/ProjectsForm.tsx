import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { projectsSchema } from './validationSchemas';

interface Project {
  title: string;
  description: string;
  startYear: string;
  endYear: string;
  technologies: string;
}

interface ProjectsFormProps {
  projects: Project[];
  onChange: (projects: Project[]) => void;
}

const ProjectsForm: React.FC<ProjectsFormProps> = ({ projects, onChange }) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<{
    projects: Project[];
  }>({
    resolver: yupResolver(projectsSchema),
    defaultValues: { projects }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "projects"
  });

  const onSubmit = (data: { projects: Project[] }) => {
    onChange(data.projects);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((item, index) => (
        <div key={item.id}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              {...register(`projects.${index}.title` as const)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.projects?.[index]?.title && (
              <span className="text-red-500">{errors.projects[index]?.title?.message}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              {...register(`projects.${index}.description` as const)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.projects?.[index]?.description && (
              <span className="text-red-500">{errors.projects[index]?.description?.message}</span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Year</label>
              <input
                type="text"
                {...register(`projects.${index}.startYear` as const)}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              {errors.projects?.[index]?.startYear && (
                <span className="text-red-500">{errors.projects[index]?.startYear?.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">End Year</label>
              <input
                type="text"
                {...register(`projects.${index}.endYear` as const)}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              {errors.projects?.[index]?.endYear && (
                <span className="text-red-500">{errors.projects[index]?.endYear?.message}</span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Technologies</label>
            <input
              type="text"
              {...register(`projects.${index}.technologies` as const)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.projects?.[index]?.technologies && (
              <span className="text-red-500">{errors.projects[index]?.technologies?.message}</span>
            )}
          </div>

          <button
            type="button"
            onClick={() => remove(index)}
            className="mt-2 p-1 bg-red-600 text-white rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => append({ title: '', description: '', startYear: '', endYear: '', technologies: '' })}
        className="mt-4 p-2 bg-green-600 text-white rounded"
      >
        Add Project
      </button>
      <button type="submit" className="mt-4 p-2 bg-blue-600 text-white rounded">
        Save Projects
      </button>
    </form>
  );
};

export default ProjectsForm;