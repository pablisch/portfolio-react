import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './projectAndAboutPanel.css';
// import { useState } from 'react';

function ProjectPanel({
  project,
  setFocusProjectId,
  focusProjectId,
  setSelectedProject,
  isAvatarHovered
}) {
  const navigate = useNavigate();

  const handleHoverStart = (id) => {
    setFocusProjectId(id);
  };

  const handleHoverEnd = () => {
    setFocusProjectId('');
  };

  const handleClick = (project) => {
    setSelectedProject(project);
    localStorage.setItem('selectedProject', JSON.stringify(project));
    navigate(`/project/${project.id}`);
  };

  return (
    <li
      className='project-panel'
      onMouseOver={() => handleHoverStart(project.id)}
      onMouseLeave={handleHoverEnd}
      onClick={() => handleClick(project)}>
      <img
        src={`images/project-images/${project.img}`}
        alt={project.name}
        className='project-image'
      />
      <div className={`project-label ${(focusProjectId === project.id || isAvatarHovered) ? 'hover-fade' : ''}`} >{project.panelName || project.name}</div>
      <div
        onClick={() => handleClick(project)}
        className={`project-overlay ${(focusProjectId === project.id || isAvatarHovered) ? 'hover-focus' : ''}`}>
        {project.summary}
      </div>
    </li>
  );
}

ProjectPanel.propTypes = {
  project: PropTypes.object.isRequired,
  setFocusProjectId: PropTypes.func.isRequired,
  focusProjectId: PropTypes.string.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
  isAvatarHovered: PropTypes.bool.isRequired,
};

export default ProjectPanel;
