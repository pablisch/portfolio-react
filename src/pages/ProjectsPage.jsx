import { projectData } from '../data/projectData';
import { useEffect, useContext } from 'react';
import ProjectPanel from '../components/ProjectPanel';
import PropTypes from 'prop-types';
import '../components/projectAndAboutPanel.css';
import { scrollToTop } from '../utils/helpers';
import ThemeContext from '../context/ThemeContext';
import { useProjectAboutContext } from '../context/ProjectAboutContext';

function ProjectsPage({ isAvatarHovered }) {
  const { theme } = useContext(ThemeContext);
  const {
    section,
    setSection,
    focusProjectId,
    setFocusProjectId,
    setSelectedProject,
  } = useProjectAboutContext();

  useEffect(() => {
    if (section !== 'projects') {
      setSection('projects');
    }
    document.title = 'Pablo Joyce - Projects';
    scrollToTop();
  }, [section, setSection]);

  return (
    <ul className={`project-box project-box-${theme}`}>
      {projectData.map((project) => (
        <ProjectPanel
          key={project.id}
          project={project}
          setFocusProjectId={setFocusProjectId}
          focusProjectId={focusProjectId}
          setSelectedProject={setSelectedProject}
          isAvatarHovered={isAvatarHovered}
        />
      ))}
    </ul>
  );
}

ProjectsPage.propTypes = {
  isAvatarHovered: PropTypes.bool.isRequired,
};

export default ProjectsPage;
