import { ProjectAboutContext } from '../../src/context/ProjectAboutContext';
import PropTypes from 'prop-types';

const MockProjectAboutContextProvider = ({
  children,
  section = 'projects',
  setSection = () => {},
  focusProjectId = '',
  setFocusProjectId = () => {},
  focusAboutId = '',
  setFocusAboutId = () => {},
  selectedProject = {},
  setSelectedProject = () => {},
  selectedAbout = {},
  setSelectedAbout = () => {},
}) => {
  return (
    <ProjectAboutContext.Provider
      value={{
        section,
        setSection,
        focusProjectId,
        setFocusProjectId,
        focusAboutId,
        setFocusAboutId,
        selectedProject,
        setSelectedProject,
        selectedAbout,
        setSelectedAbout,
      }}>
      {children}
    </ProjectAboutContext.Provider>
  );
};

MockProjectAboutContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  section: PropTypes.string,
  setSection: PropTypes.func,
  focusProjectId: PropTypes.string,
  setFocusProjectId: PropTypes.func,
  focusAboutId: PropTypes.string,
  setFocusAboutId: PropTypes.func,
  selectedProject: PropTypes.object,
  setSelectedProject: PropTypes.func,
  selectedAbout: PropTypes.object,
  setSelectedAbout: PropTypes.func,
};

export default MockProjectAboutContextProvider;
