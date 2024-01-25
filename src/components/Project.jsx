// import React from 'react'
import PropTypes from 'prop-types';
import './projects.css';
// import { useState } from 'react';

function Project({ project, setFocusProjectId, focusProjectId}) {

  const handleHoverStart = (id) => {
    setFocusProjectId(id);
  };

  const handleHoverEnd = () => {
    setFocusProjectId(null);
  }

  return (
    <li
      className='project-panel'
      onMouseOver={() => handleHoverStart(project.id)}
    onMouseLeave={handleHoverEnd}
    >
      <img
        src={`images/${project.img}`}
        alt={project.name}
        className='project-image'
      />
      <div className='project-label'>{project.panelName || project.name}</div>
      <div
        className={`overlay ${focusProjectId === project.id && 'hover-focus'}`}>
        {project.description}
      </div>
    </li>
  );
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
  setFocusProjectId: PropTypes.func.isRequired,
  focusProjectId: PropTypes.number.isRequired,
};

export default Project;
