// import React from 'react'
import BurgerLink from './BurgerLink'
import { projectData } from '../data/projectData'
import { aboutData } from '../data/aboutData'
import PropTypes from 'prop-types'
import './Hamburger.css'

const HamburgerBlocks = ({ section, isAvatarHovered, setFocusAboutId, setFocusProjectId, setSelectedAbout, setSelectedProject, setIsHamburgerOpen }) => {
  return (
    <div className='hamburger-blocks-container'>
      {section === 'projects' &&
              projectData.map((project) => (
                <BurgerLink
                  className={`burger-btn burger-link ${
                    isAvatarHovered ? 'avatar-hovered-nav-link' : ''
                  }`}
                  key={project.id}
                  project={project}
                  setFocusProjectId={setFocusProjectId}
                  setSelectedProject={setSelectedProject}
                  setIsHamburgerOpen={setIsHamburgerOpen}
                >
                  {project.navName || project.name}
                </BurgerLink>
              ))}
            {/* 👇🏻 ABOUT LINKS */}
            {section === 'about' &&
              aboutData.map((about) => (
                <BurgerLink
                  className={`burger-btn burger-link ${
                    isAvatarHovered ? 'avatar-hovered-nav-link' : ''
                  }`}
                  key={about.id}
                  project={about}
                  setFocusProjectId={setFocusAboutId}
                  setSelectedProject={setSelectedAbout}
                  setIsHamburgerOpen={setIsHamburgerOpen}
                >
                  {about.navName || about.name}
                </BurgerLink>
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
  setIsHamburgerOpen: PropTypes.func.isRequired,
}

export default HamburgerBlocks
