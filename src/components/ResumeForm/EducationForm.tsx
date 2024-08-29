import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { educationSchema } from './validationSchemas';

interface Education {
  school: string;
  degree: string;
  startYear: string;
  endYear: string;
  description: string;
}

interface EducationFormProps {
  education: Education[];
  onChange: (education: Education[]) => void;
}

const EducationForm: React.FC<EducationFormProps> = ({ education, onChange }) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<{
    education: Education[];
  }>({
    resolver: yupResolver(educationSchema),
    defaultValues: { education }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education"
  });

  const onSubmit = (data: { education: Education[] }) => {
    onChange(data.education);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((item, index) => (
        <div key={item.id}>
          <div>
            <label className="block text-sm font-medium text-gray-700">School</label>
            <input
              type="text"
              {...register(`education.${index}.school` as const)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.education?.[index]?.school && (
              <span className="text-red-500">{errors.education[index]?.school?.message}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Degree</label>
            <input
              type="text"
              {...register(`education.${index}.degree` as const)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.education?.[index]?.degree && (
              <span className="text-red-500">{errors.education[index]?.degree?.message}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Start Year</label>
            <input
              type="text"
              {...register(`education.${index}.startYear` as const)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.education?.[index]?.startYear && (
              <span className="text-red-500">{errors.education[index]?.startYear?.message}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">End Year</label>
            <input
              type="text"
              {...register(`education.${index}.endYear` as const)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.education?.[index]?.endYear && (
              <span className="text-red-500">{errors.education[index]?.endYear?.message}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              {...register(`education.${index}.description` as const)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.education?.[index]?.description && (
              <span className="text-red-500">{errors.education[index]?.description?.message}</span>
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
        onClick={() => append({ school: '', degree: '', startYear: '', endYear: '', description: '' })}
        className="mt-4 p-2 bg-green-600 text-white rounded"
      >
        Add Education
      </button>
      <button type="submit" className="mt-4 p-2 bg-blue-600 text-white rounded">
        Save Education
      </button>
    </form>
  );
};

export default EducationForm;