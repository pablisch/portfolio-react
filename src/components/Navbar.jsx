import NavLink from './NavLink';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { projectData } from '../data/projectData';
import { aboutData } from '../data/aboutData';
import { linkData } from '../data/linkData';
import PropTypes from 'prop-types';
import ExtNavLink from './ExtNavLink';
import { useScreenWidth } from '../context/ScreenWidthProvider';
import { scrollToTop } from '../utils/helpers';
import { ThemeContext, ProjectAboutContext } from '../context/ContextProviders';

const themeStyles = ['retro', 'light', 'dark'];

function Navbar({
  isAvatarHovered,
  setIsAvatarHovered,
  isHamburgerOpen,
  setIsHamburgerOpen,
  isDoubleBurger,
  setIsDoubleBurger,
  isTripleBurger,
  setIsTripleBurger,
}) {
  const [isRotating, setIsRotating] = useState(false);
  const screenWidth = useScreenWidth();
  const [isHamburgerSize, setIsHamburgerSize] = useState(
    screenWidth > 950 ? false : true
  );
  const { theme, setTheme } = useContext(ThemeContext);
  const { setSelectedProject, section } = useContext(ProjectAboutContext);

  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars

  useEffect(() => {
    if (screenWidth > 950) {
      setIsHamburgerSize(false);
      setIsDoubleBurger(false);
      setIsTripleBurger(false);
    } else if (screenWidth <= 390) {
      setIsHamburgerSize(true);
      setIsDoubleBurger(true);
      setIsTripleBurger(true);
    } else if (screenWidth <= 650) {
      setIsHamburgerSize(true);
      setIsDoubleBurger(true);
      setIsTripleBurger(false);
    } else {
      setIsHamburgerSize(true);
      setIsDoubleBurger(false);
      setIsTripleBurger(false);
    }
    setIsHamburgerOpen(false);
    scrollToTop();
  }, [
    screenWidth,
    setIsHamburgerOpen,
    setIsHamburgerSize,
    setIsDoubleBurger,
    setIsTripleBurger,
  ]);

  const handleNavTitleClick = () => {
    setSelectedProject({});
    navigate(section === 'about' ? `/more-about-me` : '/');
    localStorage.removeItem('selectedProject');
    scrollToTop();
  };

  const handleBurgerClick = () => {
    console.log('burger clicked');
    setIsHamburgerOpen(!isHamburgerOpen);
    scrollToTop();
  };

  const handleSettingsClick = () => {
    const themeIndex = themeStyles.indexOf(theme);
    const newThemeIndex =
      themeIndex === themeStyles.length - 1 ? 0 : themeIndex + 1;
    setTheme(themeStyles[newThemeIndex]);
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
    }, 500);
  };

  return (
    <nav>
      <div
        className={`navbar nav-${theme} ${
          isAvatarHovered ? 'avatar-hovered-navbar' : ''
        }`}>
        <div className='nav-container'>
          <div className='nav-left'>
            <img
              id='nav-logo'
              className={`logo-image logo-image-${theme} ${
                isAvatarHovered ? 'avatar-hovered-avatar' : ''
              }`}
              src='/images/pablo-circle-avatar.png'
              alt='avatar icon'
              onMouseEnter={() => setIsAvatarHovered(true)}
              onMouseLeave={() => setIsAvatarHovered(false)}
            />
            <div
              className={`nav-title nav-title-${theme} ${
                isAvatarHovered ? 'avatar-hovered-nav-title' : ''
              } ${section === 'projects' ? 'projects-title' : 'abouts-title'}`}>
              <h1 id='nav-section-title-text' onClick={handleNavTitleClick}>
                {section === 'projects'
                  ? 'My Projects'
                  : section === 'about'
                  ? 'About Me'
                  : ''}
              </h1>
            </div>
            <div className='navlist'>
              {/* 👇🏻 PROJECT LINKS */}
              {section === 'projects' &&
                !isHamburgerSize &&
                projectData.map((project) => (
                  <NavLink
                    className={`nav-btn nav-btn-${theme} nav-link nav-link-${theme} ${
                      isAvatarHovered ? 'avatar-hovered-nav-link' : ''
                    }`}
                    key={project.id}
                    project={project}
                    >
                    {project.navName || project.name}
                  </NavLink>
                ))}
              {/* 👇🏻 ABOUT LINKS */}
              {section === 'about' &&
                !isHamburgerSize &&
                aboutData.map((about) => (
                  <NavLink
                    className={`nav-btn nav-btn-${theme} nav-link nav-link-${theme} ${
                      isAvatarHovered ? 'avatar-hovered-nav-link' : ''
                    }`}
                    key={about.id}
                    project={about}
                    >
                    {about.navName || about.name}
                  </NavLink>
                ))}
            </div>
          </div>
          <div className='nav-right navlist'>
            {/* 👇🏻 LINK TO PROJECTS SECTION */}
            {section === 'about' && !isTripleBurger && (
              <Link
                to='/'
                id='projects-section-link'
                className={`nav-btn nav-btn-${theme} nav-section-link nav-section-link-${theme} ${
                  isAvatarHovered ? 'avatar-hovered-nav-section-link' : ''
                }`}>
                Software Projects
              </Link>
            )}
            {/* 👇🏻 LINK TO ABOUT ME SECTION */}
            {section === 'projects' && !isTripleBurger && (
              <Link
                to='/more-about-me'
                id='about-section-link'
                className={`nav-btn nav-btn-${theme} nav-section-link nav-section-link-${theme} ${
                  isAvatarHovered ? 'avatar-hovered-nav-section-link' : ''
                }`}>
                More About Me
              </Link>
            )}
            {/* 👇🏻 EXTERNAL LINK BUTTONS */}
            {linkData.length &&
              !isDoubleBurger &&
              linkData.map((link) => (
                <ExtNavLink key={link.name} page={link} target={link.target} />
              ))}
            {/* 👇🏻 SETTINGS BUTTON */}
            <div
              id='settings-nav-btn'
              className={`nav-btn nav-btn-${theme} github-link-btn github-link-btn-${theme} settings-btn settings-btn-${theme}`}
              onClick={handleSettingsClick}
              // onMouseOver={handleHoverStart}
              // onMouseLeave={handleHoverEnd}
            >
              <img
                id='settings-icon'
                src='/images/settings-gear.png'
                alt='settings button'
                className={`github-logo github-logo-${theme} settings-icon settings-icon-${theme} ${
                  isRotating ? 'rotate' : ''
                }`}
              />
            </div>
            {/* 👇🏻 HAMBURGER MENU BARS */}
            {isHamburgerSize && (
              <div className='hamburger-box'>
                <div
                  id='hamburger'
                  className='hamburger'
                  onClick={handleBurgerClick}>
                  <span
                    className={`burger-bar burger-bar-${theme} buntop ${
                      isHamburgerOpen ? 'burger-open' : ''
                    }`}></span>
                  <span
                    className={`burger-bar burger-bar-${theme} pattie ${
                      isHamburgerOpen ? 'burger-open' : ''
                    }`}></span>
                  <span
                    className={`burger-bar burger-bar-${theme} bunbase ${
                      isHamburgerOpen ? 'burger-open' : ''
                    }`}></span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`nav-border-bar-1 nav-border-bar-1-${theme}`}></div>
      <div
        className={`nav-border-bar-2 nav-border-bar-2-${theme} ${
          isAvatarHovered ? 'avatar-hovered-nav-border-bar-2' : ''
        }`}></div>
      <div
        className={`nav-border-bar-3 nav-border-bar-3-${theme} ${
          isAvatarHovered ? 'avatar-hovered-nav-border-bar-3' : ''
        }`}></div>
    </nav>
  );
}

Navbar.propTypes = {
  isAvatarHovered: PropTypes.bool.isRequired,
  setIsAvatarHovered: PropTypes.func.isRequired,
  isHamburgerOpen: PropTypes.bool.isRequired,
  setIsHamburgerOpen: PropTypes.func.isRequired,
  isDoubleBurger: PropTypes.bool.isRequired,
  setIsDoubleBurger: PropTypes.func.isRequired,
  isTripleBurger: PropTypes.bool.isRequired,
  setIsTripleBurger: PropTypes.func.isRequired,
};

export default Navbar;
