// child of App - conditional when isHamburgerOpen && isHamburgerShowing
import BurgerLink from './BurgerLink';
import { projectData } from '../data/projectData';
import { aboutData } from '../data/aboutData';
import { linkData } from '../data/linkData';
import PropTypes from 'prop-types';
import ExtNavLink from './ExtNavLink';
import './Hamburger.css';
import { Link } from 'react-router-dom';

const HamburgerBlocks = ({
  section,
  isAvatarHovered,
  setFocusAboutId,
  setFocusProjectId,
  setSelectedAbout,
  setSelectedProject,
  setIsHamburgerOpen,
  isDoubleBurger,
  isTripleBurger,
}) => {
  return (
    <div className='hamburger-blocks-container'>
      {/* 👇🏻 PROJECT LINKS */}
      {section === 'projects' &&
        projectData.map((project) => (
          <BurgerLink
            className={`burger-btn burger-link ${
              isAvatarHovered ? 'avatar-hovered-nav-link' : ''
            }`}
            key={project.id}
            project={project}
            setFocusProjectId={setFocusProjectId}
            setSelectedProject={setSelectedProject}
            setIsHamburgerOpen={setIsHamburgerOpen}>
            {project.navName || project.name}
          </BurgerLink>
        ))}
      {/* 👇🏻 ABOUT LINKS */}
      {section === 'about' &&
        aboutData.map((about) => (
          <BurgerLink
            className={`burger-btn burger-link ${
              isAvatarHovered ? 'avatar-hovered-nav-link' : ''
            }`}
            key={about.id}
            project={about}
            setFocusProjectId={setFocusAboutId}
            setSelectedProject={setSelectedAbout}
            setIsHamburgerOpen={setIsHamburgerOpen}>
            {about.navName || about.name}
          </BurgerLink>
        ))}
      {/* 👇🏻 LINK TO PROJECTS SECTION */}
      {(section === 'about' && isTripleBurger) && (
        <Link
          to='/'
          className={`burger-btn burger-section-link ${
            isAvatarHovered ? 'avatar-hovered-nav-section-link' : ''
          }`}>
          Software Projects
        </Link>
      )}
      {/* 👇🏻 LINK TO ABOUT ME SECTION */}
      {(section === 'projects' && isTripleBurger) && (
        <Link
          to='/more-about-me'
          className={`burger-btn burger-section-link ${
            isAvatarHovered ? 'avatar-hovered-nav-section-link' : ''
          }`}>
          More About Me
        </Link>
      )}
      {/* 👇🏻 EXTERNAL LINKS */}
      {linkData.length &&
        isDoubleBurger &&
        linkData.map((page) => (
          <ExtNavLink
            key={page.name}
            page={page}
            target={page.target}
            context={'hamburger'}
          />
        ))}
    </div>
  );
};

HamburgerBlocks.propTypes = {
  section: PropTypes.string.isRequired,
  isAvatarHovered: PropTypes.bool.isRequired,
  setFocusAboutId: PropTypes.func.isRequired,
  setFocusProjectId: PropTypes.func.isRequired,
  setSelectedAbout: PropTypes.func.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
  setIsHamburgerOpen: PropTypes.func.isRequired,
  isDoubleBurger: PropTypes.bool.isRequired,
  isTripleBurger: PropTypes.bool.isRequired,
};

export default HamburgerBlocks;
