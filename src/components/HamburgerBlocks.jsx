// child of App - conditional on if burgerMenu is open and visible
import BurgerLink from './BurgerLink';
import { projectData } from '../data/projectData';
import { aboutData } from '../data/aboutData';
import { linkData } from '../data/linkData';
import PropTypes from 'prop-types';
import ExtNavLink from './ExtNavLink';
import './Hamburger.css';
import { Link } from 'react-router-dom';
import { useScreenWidth } from '../context/ScreenWidthProvider';
import { useProjectAboutContext } from '../context/ProjectAboutContext';

const HamburgerBlocks = ({
  isAvatarHovered,
  isBurgerMenuOpen,
  setIsBurgerMenuOpen,
}) => {
  const { burgerMenuStage } = useScreenWidth();
  const {
    section,
    setFocusAboutId,
    setFocusProjectId,
    setSelectedAbout,
    setSelectedProject,
  } = useProjectAboutContext();

  return (
    isBurgerMenuOpen && (
      <>
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
                setIsBurgerMenuOpen={setIsBurgerMenuOpen}>
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
                setIsBurgerMenuOpen={setIsBurgerMenuOpen}>
                {about.navName || about.name}
              </BurgerLink>
            ))}
          {/* 👇🏻 LINK TO PROJECTS SECTION */}
          {section === 'about' && burgerMenuStage > 2 && (
            <Link
              to='/'
              className={`burger-btn burger-section-link ${
                isAvatarHovered ? 'avatar-hovered-nav-section-link' : ''
              }`}>
              Software Projects
            </Link>
          )}
          {/* 👇🏻 LINK TO ABOUT ME SECTION */}
          {section === 'projects' && burgerMenuStage > 2 && (
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
            burgerMenuStage > 1 &&
            linkData.map((page) => (
              <ExtNavLink
                key={page.name}
                page={page}
                target={page.target}
                context={'hamburger'}
              />
            ))}
        </div>
      </>
    )
  );
};

HamburgerBlocks.propTypes = {
  isAvatarHovered: PropTypes.bool.isRequired,
  isBurgerMenuOpen: PropTypes.bool.isRequired,
  setIsBurgerMenuOpen: PropTypes.func.isRequired,
};

export default HamburgerBlocks;
