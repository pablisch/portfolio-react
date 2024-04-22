import { aboutData } from '../data/aboutData';
import { useEffect } from 'react';
import AboutPanel from '../components/AboutPanel';
import PropTypes from 'prop-types';
import '../components/projectAndAboutPanel.css';
import { scrollToTop } from '../utils/helpers';

function AboutPage({
  setFocusAboutId,
  focusAboutId,
  setSelectedAbout,
  section,
  setSection,
  isAvatarHovered,
}) {
  
  useEffect(() => {
    if (section !== 'about') setSection('about')
    document.title = 'Pablo Joyce - About Me';
    scrollToTop();
  }, [section, setSection]);

  return (
    <ul className='about-box'>
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
  setFocusAboutId: PropTypes.func.isRequired,
  focusAboutId: PropTypes.string,
  setSelectedAbout: PropTypes.func.isRequired,
  section: PropTypes.string.isRequired,
  setSection: PropTypes.func.isRequired,
  isAvatarHovered: PropTypes.bool.isRequired,
};

export default AboutPage;
