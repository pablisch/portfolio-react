import { projectData } from '../data/projectData';
import { useEffect } from 'react';
import ProjectPanel from '../components/ProjectPanel';
import PropTypes from 'prop-types';
import '../components/projectAndAboutPanel.css';
import { scrollToTop } from '../utils/helpers';
// import { useScreenWidth } from '../context/ScreenWidthProvider';

function ProjectsPage({
  setFocusProjectId,
  focusProjectId,
  setSelectedProject,
  setSection,
  section,
  isAvatarHovered,
  theme,
}) {

  // const screenWidth = useScreenWidth();
  // console.log('screenWidth', screenWidth);

  useEffect(() => {
    if (section !== 'projects') {
      setSection('projects');
    }
    document.title = 'Pablo Joyce - Projects';
    scrollToTop();
  }, [section, setSection]);

  return (
    <ul className={`project-box project-box-${theme}`} >
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
  setFocusProjectId: PropTypes.func.isRequired,
  focusProjectId: PropTypes.string,
  setSelectedProject: PropTypes.func.isRequired,
  setSection: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
  isAvatarHovered: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
};

export default ProjectsPage;
