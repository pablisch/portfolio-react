import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function BurgerLink({
  children,
  project,
  setFocusProjectId,
  setSelectedProject,
  setIsHamburgerOpen,
  className = 'nav-btn nav-link',
}) {
  const navigate = useNavigate();

  const handleHoverStart = () => {
    setFocusProjectId(project.id);
  };

  const handleHoverEnd = () => {
    setFocusProjectId('');
  };

  const handleClick = (project) => {
    setSelectedProject(project);
    setIsHamburgerOpen(false);
    // console.log('project clicked', project);
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

BurgerLink.propTypes = {
  children: PropTypes.node.isRequired,
  project: PropTypes.object.isRequired,
  setFocusProjectId: PropTypes.func.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
  className: PropTypes.string,
  setIsHamburgerOpen: PropTypes.func,
};

export default BurgerLink;
