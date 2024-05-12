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
import {ThemeProvider} from './context/ThemeContext';
import { ProjectAboutProvider } from './context/ProjectAboutContext';
import AppWrapper from './pages/AppWrapper';

const apiUrls = projectData
  .filter((project) => project.apiWakeUpUrl)
  .map((project) => project.apiWakeUpUrl);

function App() {
  // This app has two main sections: projects and abouts - abouts refers to the 'about me' section.
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
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
    <ScreenWidthProvider setIsBurgerMenuOpen={setIsBurgerMenuOpen}>
      <ThemeProvider>
        <ProjectAboutProvider>
          <AppWrapper isAvatarHovered={isAvatarHovered} >
            <BrowserRouter>
              <Navbar
                isAvatarHovered={isAvatarHovered}
                setIsAvatarHovered={setIsAvatarHovered}
                isBurgerMenuOpen={isBurgerMenuOpen}
                setIsBurgerMenuOpen={setIsBurgerMenuOpen}
              />
              <HamburgerBlocks
                isAvatarHovered={isAvatarHovered}
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
                      isAvatarHovered={isAvatarHovered}
                    />
                  }
                />
                <Route path='/project' element={<Navigate to='/' replace />} />
                <Route
                  path='/more-about-me'
                  element={
                    <AboutPage
                      isAvatarHovered={isAvatarHovered}
                    />
                  }
                />
                <Route
                  path='/project/:id'
                  element={
                    <SingleProjectPage
                    />
                  }
                />
                <Route
                  path='/more-about-me/:id'
                  element={
                    <SingleAboutPage
                      isAvatarHovered={isAvatarHovered}
                    />
                  }
                />
              </Routes>
            </BrowserRouter>
          </AppWrapper>
        </ProjectAboutProvider>
      </ThemeProvider>
    </ScreenWidthProvider>
  );
}

export default App;
