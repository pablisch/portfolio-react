// import React from 'react'
import PropTypes from 'prop-types';
import './projects.css'

function Project({project}) {
  return (
    <li className='project-panel'>
    <img src={`images/${project.img}`} alt={project.name} className='project-image' />
    <div className='project-label'>{project.panelName || project.name}</div>
    </li>
  )
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
}

export default Project