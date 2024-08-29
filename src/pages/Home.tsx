import React from 'react';
import { useNavigate } from 'react-router-dom';
import PersonalInfoForm from '../components/ResumeForm/PersonalInfoForm';
import EducationForm from '../components/ResumeForm/EducationForm';
import ExperienceForm from '../components/ResumeForm/ExperienceForm';
import SkillsForm from '../components/ResumeForm/SkillsForm';
import ProjectsForm from '../components/ResumeForm/ProjectsForm';

interface HomeProps {
    personalInfo: {
        name: string;
        email: string;
        phone: string;
        address: string;
    };
    setPersonalInfo: React.Dispatch<React.SetStateAction<{
        name: string;
        email: string;
        phone: string;
        address: string;
    }>>;
    education: Array<{
        school: string;
        degree: string;
        startYear: string;
        endYear: string;
        description: string;
    }>;
    setEducation: React.Dispatch<React.SetStateAction<Array<{
        school: string;
        degree: string;
        startYear: string;
        endYear: string;
        description: string;
    }>>>;
    experience: Array<{
        company: string;
        position: string;
        startYear: string;
        endYear: string;
        description: string;
    }>;
    setExperience: React.Dispatch<React.SetStateAction<Array<{
        company: string;
        position: string;
        startYear: string;
        endYear: string;
        description: string;
    }>>>;
    skills: string[];
    setSkills: React.Dispatch<React.SetStateAction<string[]>>;
    projects: Array<{
        title: string;
        description: string;
        link: string;
    }>;
    setProjects: React.Dispatch<React.SetStateAction<Array<{
        title: string;
        description: string;
        link: string;
    }>>>;
}

const Home: React.FC<HomeProps> = ({
    personalInfo, setPersonalInfo,
    education, setEducation,
    experience, setExperience,
    skills, setSkills,
    projects, setProjects
}) => {
    const navigate = useNavigate();
    const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
    };
    const handlePreviewClick = () => {
        navigate('/preview', {
            state: {
                personalInfo,
                education,
                experience,
                skills,
                projects
            }
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">
                <PersonalInfoForm
                    name={personalInfo.name}
                    email={personalInfo.email}
                    phone={personalInfo.phone}
                    address={personalInfo.address}
                    onChange={handlePersonalInfoChange}
                />
                <EducationForm education={education} onChange={setEducation} />
                <ExperienceForm experience={experience} onChange={setExperience} />
                <SkillsForm skills={skills} onChange={setSkills} />
                <ProjectsForm projects={projects} onChange={setProjects} />
                <div className="mt-8 text-center">
                    <button
                        onClick={handlePreviewClick}
                        className="inline-block p-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Preview Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;