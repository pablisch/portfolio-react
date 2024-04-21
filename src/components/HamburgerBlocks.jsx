// import React from 'react'
import { NavLink } from 'react-router-dom'
import { projectData } from '../data/projectData'
import { aboutData } from '../data/aboutData'
import PropTypes from 'prop-types'
import './HamburgerBlocks.css'

const HamburgerBlocks = ({section, isAvatarHovered, setFocusAboutId, setFocusProjectId, setSelectedAbout, setSelectedProject}) => {
  return (
    <div className='hamburger-blocks-container'>
      {section === 'projects' &&
              projectData.map((project) => (
                <NavLink
                  className={`nav-btn-burg nav-link-burg ${
                    isAvatarHovered ? 'avatar-hovered-nav-link' : ''
                  }`}
                  key={project.id}
                  project={project}
                  setFocusProjectId={setFocusProjectId}
                  setSelectedProject={setSelectedProject}>
                  {project.navName || project.name}
                </NavLink>
              ))}
            {/* 👇🏻 ABOUT LINKS */}
            {section === 'about' &&
              aboutData.map((about) => (
                <NavLink
                  className={`nav-btn nav-link ${
                    isAvatarHovered ? 'avatar-hovered-nav-link' : ''
                  }`}
                  key={about.id}
                  project={about}
                  setFocusProjectId={setFocusAboutId}
                  setSelectedProject={setSelectedAbout}>
                  {about.navName || about.name}
                </NavLink>
              ))}
    </div>
  )
}

HamburgerBlocks.propTypes = {
  section: PropTypes.string.isRequired,
  isAvatarHovered: PropTypes.bool.isRequired,
  setFocusAboutId: PropTypes.func.isRequired,
  setFocusProjectId: PropTypes.func.isRequired,
  setSelectedAbout: PropTypes.func.isRequired,
  setSelectedProject: PropTypes.func.isRequired,
}

export default HamburgerBlocks
