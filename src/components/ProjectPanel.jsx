import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './projects.css';
// import { useState } from 'react';

function ProjectPanel({
  project,
  setFocusProjectId,
  focusProjectId,
  setSelectedProject,
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
    // console.log('project clicked', project);
    navigate(`/${project.id}`);
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
      <div className='project-label'>{project.panelName || project.name}</div>
      <div
        onClick={() => handleClick(project)}
        className={`overlay ${focusProjectId === project.id && 'hover-focus'}`}>
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
};

export default ProjectPanel;
