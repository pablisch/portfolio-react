import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function NavLink({ children, project, setFocusProjectId, setSelectedProject, className = 'nav-btn nav-link' }) {
  const navigate = useNavigate();

  const handleHoverStart = () => {
    setFocusProjectId(project.id);
  };

  const handleHoverEnd = () => {
    setFocusProjectId('');
  };

  const handleClick = (project) => {
    setSelectedProject(project);
    console.log('project clicked', project);
    navigate(`/${project.id < 10 ? 'project' : 'more-about-me'}/${project.id}`);
  };

  return (
    <div
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
  setFocusProjectId: PropTypes.func.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default NavLink;
