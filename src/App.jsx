import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProjectsPage from './pages/ProjectsPage';
import SingleProjectPage from './pages/SingleProjectPage';

function App() {
  const [focusProjectId, setFocusProjectId] = useState('');
  const [selectedProject, setSelectedProject] = useState({});

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
