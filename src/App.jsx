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
import { ScreenWidthProvider } from './context/ScreenWidthProvider';
import HamburgerBlocks from './components/HamburgerBlocks';
import ThemeContext from './context/ThemeContext';
import ProjectAboutContext from './context/ProjectAboutContext';

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
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

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
    <ScreenWidthProvider setIsBurgerMenuOpen={setIsBurgerMenuOpen}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ProjectAboutContext.Provider
          value={{
            section,
            setSection,
            focusProjectId,
            setFocusProjectId,
            focusAboutId,
            setFocusAboutId,
            selectedProject,
            setSelectedProject,
            selectedAbout,
            setSelectedAbout,
          }}>
          <div
            className={`app app-${theme} ${
              isAvatarHovered ? 'avatar-hovered-app' : ''
            }`}>
            <BrowserRouter>
              <Navbar
                isAvatarHovered={isAvatarHovered}
                setIsAvatarHovered={setIsAvatarHovered}
                isBurgerMenuOpen={isBurgerMenuOpen}
                setIsBurgerMenuOpen={setIsBurgerMenuOpen}
              />
              <HamburgerBlocks
                section={section}
                isAvatarHovered={isAvatarHovered}
                setFocusAboutId={setFocusAboutId}
                setFocusProjectId={setFocusProjectId}
                setSelectedAbout={setSelectedAbout}
                setSelectedProject={setSelectedProject}
                isBurgerMenuOpen={isBurgerMenuOpen}
                setIsBurgerMenuOpen={setIsBurgerMenuOpen}
              />

              <div
                className={`all-pages ${
                  isBurgerMenuOpen ? 'burger-open-spacer' : ''
                }`}></div>
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
                <Route path='/project' element={<Navigate to='/' replace />} />
                <Route
                  path='/more-about-me'
                  element={
                    <AboutPage
                      focusAboutId={focusAboutId}
                      setFocusAboutId={setFocusAboutId}
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
                      setSelectedProject={setSelectedProject}
                      section={section}
                      setSection={setSection}
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
        </ProjectAboutContext.Provider>
      </ThemeContext.Provider>
    </ScreenWidthProvider>
  );
}

export default App;
