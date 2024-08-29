import * as yup from 'yup';

const personalInfoSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  address: yup.string().required('Address is required'),
});

const educationSchema = yup.object().shape({
  education: yup.array().of(
    yup.object().shape({
      school: yup.string().required("School name is required"),
      degree: yup.string().required("Degree is required"),
      startYear: yup.string().required("Start year is required"),
      endYear: yup.string().required("End year is required"),
      description: yup.string().required("Description is required")
    })
  )
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
const skillsSchema = yup.object().shape({
  skills: yup.array().of(
    yup.object().shape({
      name: yup.string().required("Skill name is required"),
      level: yup.string().required("Skill level is required")
    })
  )
});

const projectsSchema = yup.object().shape({
  projects: yup.array().of(
    yup.object().shape({
      title: yup.string().required("Project title is required"),
      description: yup.string().required("Project description is required"),
      startYear: yup.string().required("Start year is required"),
      endYear: yup.string().required("End year is required"),
      technologies: yup.string().required("Technologies used are required")
    })
  )
});

export { personalInfoSchema, educationSchema, experienceSchema, skillsSchema, projectsSchema }