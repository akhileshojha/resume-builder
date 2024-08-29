import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Preview from './pages/Preview';

const App: React.FC = () => {
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '', address: '' });
  const [education, setEducation] = useState([{ school: '', degree: '', startYear: '', endYear: '', description: '' }]);
  const [experience, setExperience] = useState([{ company: '', position: '', startYear: '', endYear: '', description: '' }]);
  const [skills, setSkills] = useState(['']);
  const [projects, setProjects] = useState([{ title: '', description: '', link: '' }]);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Home 
              personalInfo={personalInfo} 
              setPersonalInfo={setPersonalInfo}
              education={education} 
              setEducation={setEducation}
              experience={experience} 
              setExperience={setExperience}
              skills={skills} 
              setSkills={setSkills}
              projects={projects} 
              setProjects={setProjects}
            />
          } 
        />
        <Route 
          path="/preview" 
          element={
            <Preview 
              personalInfo={personalInfo} 
              education={education} 
              experience={experience} 
              skills={skills} 
              projects={projects}
            />
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;