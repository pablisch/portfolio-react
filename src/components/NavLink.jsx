import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../utils/helpers';
import { ProjectAboutContext } from '../context/ContextProviders';
import { useContext } from 'react';

function NavLink({ children, project, className = 'nav-btn nav-link' }) {
  const { setFocusProjectId, setSelectedProject } = useContext(ProjectAboutContext);
  const navigate = useNavigate();

  const handleHoverStart = () => {
    setFocusProjectId(project.id);
  };

  const handleHoverEnd = () => {
    setFocusProjectId('');
  };

  const handleClick = (project) => {
    setSelectedProject(project);
    localStorage.setItem('selectedProject', JSON.stringify(project));
    console.log('project clicked', project);
    navigate(`/${project.id < 10 ? 'project' : 'more-about-me'}/${project.id}`);
    scrollToTop();
  };

  return (
    <div
      id={`${project.identifier}-nav-btn`}
      className={className}
      onClick={() => handleClick(project)}
      onMouseOver={handleHoverStart}
      onMouseLeave={handleHoverEnd}>
      {children}
    </div>
  );
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  project: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default NavLink;
