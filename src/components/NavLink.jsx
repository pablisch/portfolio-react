import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../utils/helpers';
import { ProjectAboutContext } from '../context/ContextProviders';
import { useContext } from 'react';

function NavLink({ children, subject, className = 'nav-btn nav-link' }) {
  // const { setFocusProjectId, setSelectedProject, setFocusAboutId, setSelectedAbout } = useContext(ProjectAboutContext);
  const { setFocusProjectId, setSelectedProject } = useContext(ProjectAboutContext);
  const navigate = useNavigate();

  const handleHoverStart = () => {
    setFocusProjectId(subject.id);
  };

  const handleHoverEnd = () => {
    setFocusProjectId('');
  };

  const handleClick = (subject) => {
    setSelectedProject(subject);
    localStorage.setItem('selectedProject', JSON.stringify(subject));
    console.log('subject clicked', subject);
    navigate(`/${subject.id < 10 ? 'project' : 'more-about-me'}/${subject.id}`);
    scrollToTop();
  };

  return (
    <div
      id={`${subject.identifier}-nav-btn`}
      className={className}
      onClick={() => handleClick(subject)}
      onMouseOver={handleHoverStart}
      onMouseLeave={handleHoverEnd}>
      {children}
    </div>
  );
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  subject: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default NavLink;
