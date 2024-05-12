import { aboutData } from '../data/aboutData';
import { useEffect } from 'react';
import AboutPanel from '../components/AboutPanel';
import PropTypes from 'prop-types';
import '../components/projectAndAboutPanel.css';
import { scrollToTop } from '../utils/helpers';
import { useTheme } from '../context/ThemeContext';
import { useProjectAboutContext } from '../context/ProjectAboutContext';

function AboutPage({ isAvatarHovered }) {
  const { theme } = useTheme();
  const {
    section,
    setSection,
    setFocusAboutId,
    focusAboutId,
    setSelectedAbout,
  } = useProjectAboutContext();

  useEffect(() => {
    if (section !== 'about') setSection('about');
    document.title = 'Pablo Joyce - About Me';
    scrollToTop();
  }, [section, setSection]);

  return (
    <ul className={`about-box about-box-${theme}`}>
      {aboutData.map((about) => (
        <AboutPanel
          key={about.id}
          about={about}
          setFocusAboutId={setFocusAboutId}
          focusAboutId={focusAboutId}
          setSelectedAbout={setSelectedAbout}
          isAvatarHovered={isAvatarHovered}
        />
      ))}
    </ul>
  );
}

AboutPage.propTypes = {
  isAvatarHovered: PropTypes.bool.isRequired,
};

export default AboutPage;
