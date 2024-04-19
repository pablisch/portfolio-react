import NavLink from './NavLink';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { projectData } from '../data/projectData';
import { aboutData } from '../data/aboutData';
import PropTypes from 'prop-types';

function Navbar({ setFocusProjectId, setSelectedProject, setFocusAboutId, setSelectedAbout, section, isAvatarHovered, setIsAvatarHovered}) {
  const navigate = useNavigate();

  const handleNavTitleClick = () => {
    setSelectedProject({});
    navigate(section === 'about' ? `/more-about-me` : '/');
  };

  return (

    <nav>
      <div className={`navbar ${isAvatarHovered && 'avatar-hovered-navbar'}`}>
      <div className='nav-container'>
        <div className='nav-left'>
          <img
            className={`logo-image ${isAvatarHovered && 'avatar-hovered-avatar'}`}
            src='images/pablo-circle-avatar.png'
              alt='icon'
              onMouseEnter={() => setIsAvatarHovered(true)}
              onMouseLeave={() => setIsAvatarHovered(false)}
            />
          <div className={`nav-title ${isAvatarHovered && 'avatar-hovered-nav-title'}`}>
          <h1 onClick={handleNavTitleClick}>{section === 'projects' ? 'My Projects' : section === 'about' ? 'About Me' : ''}</h1>
            </div>
            {/* <div className="test1"></div>
            <div className="test2"></div> */}

        </div>
        <div className='navlist'>
          {section === 'projects' && projectData.map((project) => (
            <NavLink
              className={`nav-btn nav-link ${isAvatarHovered && 'avatar-hovered-nav-link'}`}
              key={project.id}
              project={project}
              setFocusProjectId={setFocusProjectId}
              setSelectedProject={setSelectedProject}
            >
              {project.navName || project.name}
            </NavLink>
          ))}
          {section === 'about' && aboutData.map((about) => (
            <NavLink
              className={`nav-btn nav-link ${isAvatarHovered && 'avatar-hovered-nav-link'}`}
              key={about.id}
              project={about}
              setFocusProjectId={setFocusAboutId}
              setSelectedProject={setSelectedAbout}
            >
              {about.navName || about.name}
            </NavLink>
          ))}
            {section === 'about' &&
              <Link to='/' className={`nav-btn nav-section-link ${isAvatarHovered && 'avatar-hovered-nav-section-link'}`} >
              Software Projects
            </Link>}
            {section === 'projects' &&
              <Link to='/more-about-me' className={`nav-btn nav-section-link ${isAvatarHovered && 'avatar-hovered-nav-section-link'}`} >
              More About Me
            </Link>}
          <a
            href='https://github.com/pablisch'
            className={`nav-btn github-link-btn ${isAvatarHovered && 'avatar-hovered-github-link'}`}
            target='_blank'
            rel='noreferrer'>
            <img
              className='github-logo'
              src='images/github-logo.png'
              alt='Button Image'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/pablo-joyce/'
            className={`nav-btn linkedin-link-btn ${isAvatarHovered && 'avatar-hovered-github-link'}`}
            target='_blank'
            rel='noreferrer'>
              <img
              className={`linkedin-logo ${isAvatarHovered && 'avatar-hovered-linkedin-logo'}`}
              src='images/linkedin-trans.png'
              alt='Button Image'
            />
          </a>
        </div>

        <div className='hamburger'>
          <span className='burgerBar'></span>
          <span className='burgerBar'></span>
          <span className='burgerBar'></span>
        </div>
        </div>
        </div>
      <div id="nav-border-bar-1"></div>
      <div className={`nav-border-bar-2 ${isAvatarHovered && 'avatar-hovered-nav-border-bar-2'}`}></div>
      <div className={`nav-border-bar-3 ${isAvatarHovered && 'avatar-hovered-nav-border-bar-3'}`}></div>
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
};

export default Navbar;
