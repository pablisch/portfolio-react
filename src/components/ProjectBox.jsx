import projects from '../data/projects';
import Project from './Project';

function ProjectBox() {
  return (
    <div className="project-box">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  )
}

export default ProjectBox