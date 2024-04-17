import NavLink from './NavLink';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { projectData } from '../data/projectData';
import PropTypes from 'prop-types';

function Navbar({ setFocusProjectId, setSelectedProject }) {
  const navigate = useNavigate();

  const handleMyProjectsClick = () => {
    setSelectedProject({});
    navigate(`/`);
  };

  return (
    <nav id='navbar'>
      <div className='nav-container'>
        <div className='nav-left'>
          <img
            className='logo-image'
            src='images/pablo-circle-avatar.png'
            alt='icon'
          />
          <h1 onClick={handleMyProjectsClick}>My Projects</h1>
        </div>
        <div className='navlist'>
          {projectData.map((project) => (
            <NavLink
              key={project.id}
              project={project}
              setFocusProjectId={setFocusProjectId}
              setSelectedProject={setSelectedProject}
            >
              {project.navName || project.name}
            </NavLink>
          ))}
          <a
            href='https://pablisch.github.io/cv-about-links/'
            className='nav-btn external-nav-link'>
            More About Me
          </a>
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
    </nav>
  );
}

Navbar.propTypes = {
  setFocusProjectId: PropTypes.func.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
};

export default Navbar;
