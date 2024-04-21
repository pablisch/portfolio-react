import NavLink from './NavLink';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.css';
import { projectData } from '../data/projectData';
import { aboutData } from '../data/aboutData';
import { linkData } from '../data/linkData';
import PropTypes from 'prop-types';
import ExtNavLink from './ExtNavLink';
import { useScreenWidth } from '../context/ScreenWidthProvider';

function Navbar({
  setFocusProjectId,
  setSelectedProject,
  setFocusAboutId,
  setSelectedAbout,
  section,
  isAvatarHovered,
  setIsAvatarHovered,
  isHamburgerOpen,
  setIsHamburgerOpen,
  setIsHamburgerShowing,
}) {
  const screenWidth = useScreenWidth();
  const [isHamburgerSize, setIsHamburgerSize] = useState(screenWidth > 950 ? false : true);
  

  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars

  useEffect(() => {
    if (screenWidth > 950) {
      setIsHamburgerSize(false);
      setIsHamburgerShowing(false);
      setIsHamburgerOpen(false);
    } else {
      setIsHamburgerSize(true);
      setIsHamburgerShowing(true);
    }
    // console.log('screenWidth', screenWidth);
  }, [screenWidth]);

  const handleNavTitleClick = () => {
    setSelectedProject({});
    navigate(section === 'about' ? `/more-about-me` : '/');
  };

  const handleBurgerClick = () => {
    console.log('burger clicked');
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <nav>
      <div className={`navbar ${isAvatarHovered ? 'avatar-hovered-navbar' : ''}`}>
        <div className='nav-container'>
          <div className='nav-left'>
            <img
              className={`logo-image ${isAvatarHovered ? 'avatar-hovered-avatar' : ''}`}
              src='images/pablo-circle-avatar.png'
              alt='icon'
              onMouseEnter={() => setIsAvatarHovered(true)}
              onMouseLeave={() => setIsAvatarHovered(false)}
            />
            <div
              className={`nav-title ${
                isAvatarHovered ? 'avatar-hovered-nav-title' : ''
              } ${section === 'projects' ? 'projects-title' : 'abouts-title'}`}>
              <h1 onClick={handleNavTitleClick}>
                {section === 'projects'
                  ? 'My Projects'
                  : section === 'about'
                  ? 'About Me'
                  : ''}
              </h1>
            </div>
            <div className='navlist'>
            {/* 👇🏻 PROJECT LINKS */}
            {(section === 'projects' && !isHamburgerSize) &&
              projectData.map((project) => (
                <NavLink
                  className={`nav-btn nav-link ${
                    isAvatarHovered ? 'avatar-hovered-nav-link' : ''
                  }`}
                  key={project.id}
                  project={project}
                  setFocusProjectId={setFocusProjectId}
                  setSelectedProject={setSelectedProject}>
                  {project.navName || project.name}
                </NavLink>
              ))}
            {/* 👇🏻 ABOUT LINKS */}
            {(section === 'about' && !isHamburgerSize) &&
              aboutData.map((about) => (
                <NavLink
                  className={`nav-btn nav-link ${
                    isAvatarHovered ? 'avatar-hovered-nav-link' : ''
                  }`}
                  key={about.id}
                  project={about}
                  setFocusProjectId={setFocusAboutId}
                  setSelectedProject={setSelectedAbout}>
                  {about.navName || about.name}
                </NavLink>
              ))}

            </div>
          </div>
          <div className='nav-right navlist'>
            {/* 👇🏻 LINK TO PROJECTS SECTION */}
            {section === 'about' && (
              <Link
                to='/'
                className={`nav-btn nav-section-link ${
                  isAvatarHovered ? 'avatar-hovered-nav-section-link' : ''
                }`}>
                Software Projects
              </Link>
            )}
            {/* 👇🏻 LINK TO ABOUT ME SECTION */}
            {section === 'projects' && (
              <Link
                to='/more-about-me'
                className={`nav-btn nav-section-link ${
                  isAvatarHovered ? 'avatar-hovered-nav-section-link' : ''
                }`}>
                More About Me
              </Link>
            )}
            {/* 👇🏻 EXTERNAL LINK BUTTONS */}
            {linkData.length && linkData.map((link) => (
              <ExtNavLink key={link.name} page={link} target={link.target} />
            ))}
            {isHamburgerSize && <div className='hamburger-box'>
              <div className='hamburger' onClick={handleBurgerClick}>
                <span className={`burgerBar buntop ${isHamburgerOpen ? 'burger-open' : ''}`}></span>
                <span className={`burgerBar pattie ${isHamburgerOpen ? 'burger-open' : ''}`}></span>
                <span className={`burgerBar bunbase ${isHamburgerOpen ? 'burger-open' : ''}`}></span>
              </div>
            </div>}
          </div>
        </div>
      </div>
      <div id='nav-border-bar-1'></div>
      <div
        className={`nav-border-bar-2 ${
          isAvatarHovered ? 'avatar-hovered-nav-border-bar-2' : ''
        }`}></div>
      <div
        className={`nav-border-bar-3 ${
          isAvatarHovered ? 'avatar-hovered-nav-border-bar-3' : ''
        }`}></div>
    </nav>
  );
}

Navbar.propTypes = {
  setFocusProjectId: PropTypes.func.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
  setFocusAboutId: PropTypes.func.isRequired,
  setSelectedAbout: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
  isAvatarHovered: PropTypes.bool.isRequired,
  setIsAvatarHovered: PropTypes.func.isRequired,
  isHamburgerOpen: PropTypes.bool.isRequired,
  setIsHamburgerOpen: PropTypes.func.isRequired,
  setIsHamburgerShowing: PropTypes.func.isRequired,
};

export default Navbar;
