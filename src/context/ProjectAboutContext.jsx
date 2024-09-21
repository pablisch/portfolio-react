import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

export const ProjectAboutContext = createContext();

export const ProjectAboutProvider = ({ children }) => {
  const [focusProjectId, setFocusProjectId] = useState('');
  const [focusAboutId, setFocusAboutId] = useState('');
  const [selectedProject, setSelectedProject] = useState({});
  const [selectedAbout, setSelectedAbout] = useState({});
  const [section, setSection] = useState('');

  return (
    <ProjectAboutContext.Provider value={{
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
}

ProjectAboutProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProjectAboutContext = () => {
  const context = useContext(ProjectAboutContext);
  if (!context) {
    throw new Error('useProjectAboutContext must be used within a ProjectAboutProvider');
  }
  return context;
}

// export default ProjectAboutContext;