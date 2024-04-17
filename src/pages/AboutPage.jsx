import { aboutData } from '../data/aboutData';
import { useEffect } from 'react';
import AboutPanel from '../components/AboutPanel';
import PropTypes from 'prop-types';
import './ProjectsPage.css';

function AboutPage({
  setFocusProjectId,
  focusProjectId,
  setSelectedProject,
  setSection
}) {
  useEffect(() => {
    setSection('about')
    document.title = 'Pablo Joyce - About Me';
  }, [setSection]);

  return (
    <ul className='project-box'>
      {aboutData.map((project) => (
        <AboutPanel
          key={project.id}
          project={project}
          setFocusProjectId={setFocusProjectId}
          focusProjectId={focusProjectId}
          setSelectedProject={setSelectedProject}
        />
      ))}
    </ul>
  );
}

AboutPage.propTypes = {
  setFocusProjectId: PropTypes.func.isRequired,
  focusProjectId: PropTypes.string,
  setSelectedProject: PropTypes.func.isRequired,
  setSection: PropTypes.func.isRequired
};

export default AboutPage;
