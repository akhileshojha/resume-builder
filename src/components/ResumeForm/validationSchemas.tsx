import * as yup from 'yup';

const personalInfoSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  address: yup.string().required('Address is required'),
});

const educationSchema = yup.object().shape({
  institution: yup.string().required('Institution name is required'),
  degree: yup.string().required('Degree is required'),
  startYear: yup.string().required('Start year is required'),
  endYear: yup.string().required('End year is required'),
});

const experienceSchema = yup.object().shape({
  experience: yup.array().of(
    yup.object().shape({
      company: yup.string().required('Company is required'),
      position: yup.string().required('Position is required'),
      startYear: yup.string().required('Start year is required'),
      endYear: yup.string().required('End year is required'),
      description: yup.string().required('Description is required')
    })
  ).required('Experience is required').min(1, 'At least one experience is required')
});
const skillsSchema = yup.array().of(yup.string().required('Each skill is required'));

const projectsSchema = yup.object().shape({
  title: yup.string().required('Project title is required'),
  description: yup.string().required('Project description is required'),
  link: yup.string().url('Invalid URL format'),
});

export { personalInfoSchema, educationSchema, experienceSchema, skillsSchema, projectsSchema }