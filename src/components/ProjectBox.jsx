import {projectData} from '../data/projectData';
import Project from './Project';

function ProjectBox() {
  return (
    <ul className="project-box">
      {projectData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  )
}

export default ProjectBox