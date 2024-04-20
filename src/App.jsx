import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import SingleProjectPage from './pages/SingleProjectPage';
import SingleAboutPage from './pages/SingleAboutPage';
import axios from 'axios';
import { projectData } from './data/projectData';

const apiUrls = projectData
  .filter((project) => project.apiWakeUpUrl)
  .map((project) => project.apiWakeUpUrl);

function App() {
  // This app has two main sections: projects and abouts - abouts refers to the 'about me' section.
  const [focusProjectId, setFocusProjectId] = useState('');
  const [focusAboutId, setFocusAboutId] = useState('');
  const [selectedProject, setSelectedProject] = useState({});
  const [selectedAbout, setSelectedAbout] = useState({});
  const [section, setSection] = useState('');
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  useEffect(() => {
    const wakeUpDeployedApis = async () => {
      apiUrls.forEach(async (url) => {
        try {
          await axios.get(url);
        } catch (error) {
          console.log('Api is sleeping', url, error);
        }
      });
    };

    wakeUpDeployedApis();
  }, []);

  return (
    <div className={`app ${isAvatarHovered ? 'avatar-hovered-app' : ''}`}>
      <BrowserRouter>
        <Navbar
          setFocusProjectId={setFocusProjectId}
          setSelectedProject={setSelectedProject}
          setFocusAboutId={setFocusAboutId}
          setSelectedAbout={setSelectedAbout}
          section={section}
          isAvatarHovered={isAvatarHovered}
          setIsAvatarHovered={setIsAvatarHovered}
        />
        <Routes>
          <Route
            path='/'
            element={
              <ProjectsPage
                focusProjectId={focusProjectId}
                setFocusProjectId={setFocusProjectId}
                setSelectedProject={setSelectedProject}
                section={section}
                setSection={setSection}
                isAvatarHovered={isAvatarHovered}
              />
            }
          />
          <Route
            path='/project'
            element={<Navigate to='/' replace />}
          />
          <Route
            path='/more-about-me'
            element={
              <AboutPage
                setFocusAboutId={setFocusAboutId}
                focusAboutId={focusAboutId}
                setSelectedAbout={setSelectedAbout}
                section={section}
                setSection={setSection}
                isAvatarHovered={isAvatarHovered}
              />
            }
          />
          <Route
            path='/project/:id'
            element={
              <SingleProjectPage
                selectedProject={selectedProject}
                isAvatarHovered={isAvatarHovered}
                setSelectedProject={setSelectedProject}
              />
            }
          />
          <Route
            path='/more-about-me/:id'
            element={
              <SingleAboutPage
                selectedAbout={selectedAbout}
                isAvatarHovered={isAvatarHovered}
                setSelectedAbout={setSelectedAbout}
                section={section}
                setSection={setSection}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
