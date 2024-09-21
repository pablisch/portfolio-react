import { projectData } from '../data/projectData';
import { useEffect } from 'react';
import ProjectPanel from '../features/SubjectPanels/ProjectPanel';
import PropTypes from 'prop-types';
import '../features/SubjectPanels/projectAndAboutPanel.css';
import { scrollToTop } from '../utils/helpers';
import {useTheme} from '../context/ThemeContext';
import { useProjectAboutContext } from '../context/ProjectAboutContext';

function ProjectsPage({ isAvatarHovered }) {
  const { theme } = useTheme();
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
