import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import SubNavBar from './components/SubNavBar';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import SingleProjectPage from './pages/SingleProjectPage';
import SingleAboutPage from './pages/SingleAboutPage';
import axios from 'axios';
import { projectData } from './data/projectData';

const apiUrls = projectData.filter(project => project.apiWakeUpUrl).map(project => project.apiWakeUpUrl);

function App() {
  // This app has two main sections: projects and abouts - abouts refers to the 'about me' section.
  const [focusProjectId, setFocusProjectId] = useState('');
  const [focusAboutId, setFocusAboutId] = useState('');
  const [selectedProject, setSelectedProject] = useState({});
  const [selectedAbout, setSelectedAbout] = useState({});
  const [section, setSection] = useState('projects');

  useEffect(() => {
    const wakeUpDeployedApis = async () => {
      apiUrls.forEach(async url => {
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
    <BrowserRouter>
      <Navbar
        setFocusProjectId={setFocusProjectId}
        setSelectedProject={setSelectedProject}
        setFocusAboutId={setFocusAboutId}
        setSelectedAbout={setSelectedAbout}
        section={section}
      />
      <Routes>
        <Route
          path='/'
          element={
            <ProjectsPage
              setFocusProjectId={setFocusProjectId}
              focusProjectId={focusProjectId}
              setSelectedProject={setSelectedProject}
              setSection={setSection}
              section={section}
            />
          }
        />
        <Route
          path='/more-about-me'
          element={
            <AboutPage
              setFocusAboutId={setFocusAboutId}
              focusAboutId={focusAboutId}
              setSelectedAbout={setSelectedAbout}
              setSection={setSection}

              setFocusProjectId={setFocusProjectId}
              focusProjectId={focusProjectId}
              setSelectedProject={setSelectedProject}
            />
          }
        />
        <Route
          path='/project/:id'
          element={<SingleProjectPage selectedProject={selectedProject} />}
        />
        <Route
          path='/more-about-me/:id'
          element={<SingleAboutPage selectedAbout={selectedAbout} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
