// import React from 'react'
import PropTypes from 'prop-types';
import './projects.css'

function Project({project}) {
  return (
    <div className='project-panel'>
    <div>{project.panelName || project.name}</div>
    <img src={`images/${project.img}`} alt={project.name} />
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
}

export default Project