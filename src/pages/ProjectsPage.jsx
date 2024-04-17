import { projectData } from '../data/projectData';
import { useEffect } from 'react';
import Project from '../components/Project';
import PropTypes from 'prop-types';
import './ProjectsPage.css';

function ProjectsPage({
  setFocusProjectId,
  focusProjectId,
  setSelectedProject,
}) {

  useEffect(() => {
    document.title = 'Pablo Joyce - Projects';
  }, []);

  return (
    <ul className='project-box'>
      {projectData.map((project) => (
        <Project
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

ProjectsPage.propTypes = {
  setFocusProjectId: PropTypes.func.isRequired,
  focusProjectId: PropTypes.string,
  setSelectedProject: PropTypes.func.isRequired,
};

export default ProjectsPage;
