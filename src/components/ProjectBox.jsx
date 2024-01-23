import {projectData} from '../data/projectData';
import Project from './Project';
import PropTypes from 'prop-types';

function ProjectBox({ setFocusProjectId, focusProjectId}) {
  return (
    <ul className="project-box">
      {projectData.map((project) => (
        <Project key={project.id} project={project} setFocusProjectId={setFocusProjectId} focusProjectId={focusProjectId} />
      ))}
    </ul>
  )
}

ProjectBox.propTypes = {
  setFocusProjectId: PropTypes.func.isRequired,
  focusProjectId: PropTypes.number,
};

export default ProjectBox