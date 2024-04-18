import NavLink from './NavLink';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { projectData } from '../data/projectData';
import { aboutData } from '../data/aboutData';
import PropTypes from 'prop-types';

function Navbar({ setFocusProjectId, setSelectedProject, setFocusAboutId, setSelectedAbout, section }) {
  const navigate = useNavigate();

  const handleNavTitleClick = () => {
    setSelectedProject({});
    navigate(section === 'about' ? `/more-about-me` : '/');
  };

  console.log('section', section);

  return (

    <nav>
      <div id="navbar">
      <div className='nav-container'>
        <div className='nav-left'>
          <img
            className='logo-image'
            src='images/pablo-circle-avatar.png'
            alt='icon'
            />
          <div id='nav-title'>
          <h1 onClick={handleNavTitleClick}>{section === 'projects' ? 'My Projects' : section === 'about' ? 'About Me' : ''}</h1>
            </div>
            {/* <div className="test1"></div>
            <div className="test2"></div> */}

        </div>
        <div className='navlist'>
          {section === 'projects' && projectData.map((project) => (
            <NavLink
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
              key={about.id}
              project={about}
              setFocusProjectId={setFocusAboutId}
              setSelectedProject={setSelectedAbout}
            >
              {about.navName || about.name}
            </NavLink>
          ))}
            {section === 'about' &&
              <Link to='/' className='nav-btn nav-section-link' >
              Software Projects
            </Link>}
            {section === 'projects' &&
              <Link to='/more-about-me' className='nav-btn nav-section-link' >
              More About Me
            </Link>}
          <a
            href='https://github.com/pablisch'
            className='nav-btn github-link-btn'
            target='_blank'
            rel='noreferrer'>
            <img
              className='github-logo'
              src='images/github-logo.png'
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
      <div id="nav-border-bar-2"></div>
      <div id="nav-border-bar-3"></div>
      </nav>
  );
}

Navbar.propTypes = {
  setFocusProjectId: PropTypes.func.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
  setFocusAboutId: PropTypes.func.isRequired,
  setSelectedAbout: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
};

export default Navbar;
