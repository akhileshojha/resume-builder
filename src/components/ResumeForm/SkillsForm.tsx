import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { skillsSchema } from './validationSchemas';

interface Skill {
  name: string;
  level: string;
}

interface SkillsFormProps {
  skills: Skill[];
  onChange: (skills: Skill[]) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ skills, onChange }) => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<{
    skills: Skill[];
  }>({
    resolver: yupResolver(skillsSchema),
    defaultValues: { skills }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills"
  });

  const onSubmit = (data: { skills: Skill[] }) => {
    onChange(data.skills);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {fields.map((item, index) => (
        <div key={item.id}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Skill Name</label>
            <input
              type="text"
              {...register(`skills.${index}.name` as const)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.skills?.[index]?.name && (
              <span className="text-red-500">{errors.skills[index]?.name?.message}</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Level</label>
            <input
              type="text"
              {...register(`skills.${index}.level` as const)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
            {errors.skills?.[index]?.level && (
              <span className="text-red-500">{errors.skills[index]?.level?.message}</span>
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
        onClick={() => append({ name: '', level: '' })}
        className="mt-4 p-2 bg-green-600 text-white rounded"
      >
        Add Skill
      </button>
      <button type="submit" className="mt-4 p-2 bg-blue-600 text-white rounded">
        Save Skills
      </button>
    </form>
  );
};

export default SkillsForm;