import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { personalInfoSchema } from './validationSchemas';

interface PersonalInfoProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoProps> = ({ name, email, phone, address, onChange }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(personalInfoSchema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
    // You can handle form submission here
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input 
          type="text" 
          {...register('name')}
          value={name} 
          onChange={onChange} 
          className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input 
          type="email" 
          {...register('email')}
          value={email} 
          onChange={onChange} 
          className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Phone</label>
        <input 
          type="text" 
          {...register('phone')}
          value={phone} 
          onChange={onChange} 
          className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
        />
        {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input 
          type="text" 
          {...register('address')}
          value={address} 
          onChange={onChange} 
          className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
        />
        {errors.address && <span className="text-red-500">{errors.address.message}</span>}
      </div>

      <button type="submit" className="mt-4 p-2 bg-blue-600 text-white rounded">Save Personal Info</button>
    </form>
  );
};

export default PersonalInfoForm;