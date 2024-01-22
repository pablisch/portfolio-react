import NavLink from './NavLink';
import './Navbar.css';
import {projectData} from '../data/projectData';

function Navbar() {
  return (
    <nav id="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <img
            className="logo-image"
            src="images/pablo-wobbly-circle-avatar.png"
            alt="icon" />
          <h1>My Projects</h1>
        </div>
        <div className="navlist">
          {projectData.map((project) => (
            <NavLink key={project.id}>{project.navName || project.name}</NavLink>
          ))}
          <a href="https://pablisch.github.io/cv-about-links/" className="nav-btn external-nav-link">More About Me</a>
          <a href="https://github.com/pablisch" className="nav-btn github-link-btn" target="_blank" rel="noreferrer">
            <img className="github-logo" src="images/github-logo.png" alt="Button Image" />
          </a>
        </div>
        
        <div className="hamburger">
          <span className="burgerBar"></span>
          <span className="burgerBar"></span>
          <span className="burgerBar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar