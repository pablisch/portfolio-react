import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProjectsPage from './pages/ProjectsPage';
import SingleProjectPage from './pages/SingleProjectPage';
import axios from 'axios';
import {projectData} from './data/projectData';

const apiUrls = projectData.filter(project => project.apiWakeUpUrl).map(project => project.apiWakeUpUrl);

function App() {
  const [focusProjectId, setFocusProjectId] = useState('');
  const [selectedProject, setSelectedProject] = useState({});

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
      />
      <Routes>
        <Route
          path='/'
          element={
            <ProjectsPage
              setFocusProjectId={setFocusProjectId}
              focusProjectId={focusProjectId}
              setSelectedProject={setSelectedProject}
            />
          }
        />
        <Route
          path='/:id'
          element={<SingleProjectPage selectedProject={selectedProject} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
