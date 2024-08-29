import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { experienceSchema } from './validationSchemas'; // Updated schema import

interface Experience {
  company: string;
  position: string;
  startYear: string;
  endYear: string;
  description: string;
}

interface ExperienceFormProps {
  experience: Experience[];
  onChange: (experience: Experience[]) => void;
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({ experience, onChange }) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<{
    experience: Experience[];
  }>({
    resolver: yupResolver(experienceSchema), // Resolver with the correct schema
    defaultValues: { experience } // Make sure experience is an array, even if empty
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience"
  });

  const onSubmit = (data: { experience: Experience[] }) => {
    onChange(data.experience);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((item, index) => (
        <div key={item.id}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              {...register(`experience.${index}.company` as const)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.experience?.[index]?.company && (
              <span className="text-red-500">{errors.experience[index]?.company?.message}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Position</label>
            <input
              type="text"
              {...register(`experience.${index}.position` as const)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.experience?.[index]?.position && (
              <span className="text-red-500">{errors.experience[index]?.position?.message}</span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Year</label>
              <input
                type="text"
                {...register(`experience.${index}.startYear` as const)}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              {errors.experience?.[index]?.startYear && (
                <span className="text-red-500">{errors.experience[index]?.startYear?.message}</span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">End Year</label>
              <input
                type="text"
                {...register(`experience.${index}.endYear` as const)}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
              {errors.experience?.[index]?.endYear && (
                <span className="text-red-500">{errors.experience[index]?.endYear?.message}</span>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              {...register(`experience.${index}.description` as const)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.experience?.[index]?.description && (
              <span className="text-red-500">{errors.experience[index]?.description?.message}</span>
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
        onClick={() => append({ company: '', position: '', startYear: '', endYear: '', description: '' })}
        className="mt-4 p-2 bg-green-600 text-white rounded"
      >
        Add Experience
      </button>
      <button type="submit" className="mt-4 p-2 bg-blue-600 text-white rounded">
        Save Experience
      </button>
    </form>
  );
};

export default ExperienceForm;