import NavLink from './NavLink';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { projectData } from '../../data/projectData';
import { aboutData } from '../../data/aboutData';
import { linkData } from '../../data/linkData';
import PropTypes from 'prop-types';
import ExtNavLink from './ExtNavLink';
import { useScreenWidth } from '../../context/ScreenWidthProvider';
import { scrollToTop } from '../../utils/helpers';
import { useTheme } from '../../context/ThemeContext';
import { useProjectAboutContext } from '../../context/ProjectAboutContext';

function Navbar({
  isAvatarHovered,
  setIsAvatarHovered,
  isBurgerMenuOpen,
  setIsBurgerMenuOpen,
}) {
  const { isBurgerMenuVisible, burgerMenuStage } = useScreenWidth();
  const { theme, onThemeChange, isIconRotating } = useTheme();
  const { section, setSelectedProject, setSelectedAbout } =
    useProjectAboutContext();

  const navigate = useNavigate();

  const handleNavTitleClick = () => {
    setSelectedProject({});
    setSelectedAbout({});
    navigate(section === 'about' ? `/more-about-me` : '/');
    localStorage.removeItem('selectedProject');
    scrollToTop();
  };

  const handleBurgerClick = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
    scrollToTop();
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
              // src='/images/pablo-circle-avatar.png'
              src='/images/avatar-square-small4.png'
              alt='avatar icon'
              onMouseEnter={() => setIsAvatarHovered(true)}
              onMouseLeave={() => setIsAvatarHovered(false)}
            />
            <div
              role='button'
              onClick={handleNavTitleClick}
              className={`nav-title nav-title-${theme} ${
                isAvatarHovered ? 'avatar-hovered-nav-title' : ''
              } ${section === 'projects' ? 'projects-title' : 'abouts-title'}`}>
              <h1 id='nav-section-title-text'>
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
                !isBurgerMenuVisible &&
                projectData.map((project) => (
                  <NavLink
                    className={`nav-btn nav-btn-${theme} nav-link nav-link-${theme} ${
                      isAvatarHovered ? 'avatar-hovered-nav-link' : ''
                    }`}
                    key={project.id}
                    subject={project}>
                    {project.navName || project.name}
                  </NavLink>
                ))}
              {/* 👇🏻 ABOUT LINKS */}
              {section === 'about' &&
                !isBurgerMenuVisible &&
                aboutData.map((about) => (
                  <NavLink
                    className={`nav-btn nav-btn-${theme} nav-link nav-link-${theme} ${
                      isAvatarHovered ? 'avatar-hovered-nav-link' : ''
                    }`}
                    key={about.id}
                    subject={about}>
                    {about.navName || about.name}
                  </NavLink>
                ))}
            </div>
          </div>
          <div className='nav-right navlist'>
            {/* 👇🏻 LINK TO PROJECTS SECTION */}
            {section === 'about' && burgerMenuStage < 3 && (
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
            {section === 'projects' && burgerMenuStage < 3 && (
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
              burgerMenuStage < 2 &&
              linkData.map((link) => (
                <ExtNavLink key={link.name} extLink={link} />
              ))}
            {/* 👇🏻 SETTINGS BUTTON */}
            <div
              role='button'
              id='settings-nav-btn'
              className={`nav-btn nav-btn-${theme} github-link-btn github-link-btn-${theme} settings-btn settings-btn-${theme}`}
              onClick={onThemeChange}
              // onMouseOver={handleHoverStart}
              // onMouseLeave={handleHoverEnd}
            >
              <img
                id='settings-icon'
                src='/images/settings-gear.png'
                alt='settings button'
                className={`github-logo github-logo-${theme} settings-icon settings-icon-${theme} ${
                  isIconRotating ? 'rotate' : ''
                }`}
              />
            </div>
            {/* 👇🏻 HAMBURGER MENU BARS */}
            {isBurgerMenuVisible && (
              <div className='hamburger-box'>
                <div
                  id='hamburger'
                  className='hamburger'
                  onClick={handleBurgerClick}>
                  <span
                    className={`burger-bar burger-bar-${theme} buntop ${
                      isBurgerMenuOpen ? 'burger-open' : ''
                    }`}></span>
                  <span
                    className={`burger-bar burger-bar-${theme} pattie ${
                      isBurgerMenuOpen ? 'burger-open' : ''
                    }`}></span>
                  <span
                    className={`burger-bar burger-bar-${theme} bunbase ${
                      isBurgerMenuOpen ? 'burger-open' : ''
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
  isBurgerMenuOpen: PropTypes.bool.isRequired,
  setIsBurgerMenuOpen: PropTypes.func.isRequired,
};

export default Navbar;
