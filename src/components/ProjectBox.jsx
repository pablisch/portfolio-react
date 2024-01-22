import {projectData} from '../data/projectData';
import Project from './Project';

function ProjectBox() {
  return (
    <div className="project-box">
      {projectData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectBox