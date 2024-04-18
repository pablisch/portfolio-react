import { aboutData } from '../data/aboutData';
import { useEffect } from 'react';
import AboutPanel from '../components/AboutPanel';
import PropTypes from 'prop-types';
import '../components/projectAndAboutPanel.css';

function AboutPage({
  setFocusAboutId,
  focusAboutId,
  setSelectedAbout,
  setSection,
}) {
  
  useEffect(() => {
    setSection('about')
    document.title = 'Pablo Joyce - About Me';
  }, [setSection]);

  return (
    <ul className='about-box'>
      {aboutData.map((about) => (
        <AboutPanel
          key={about.id}
          about={about}
          setFocusAboutId={setFocusAboutId}
          focusAboutId={focusAboutId}
          setSelectedAbout={setSelectedAbout}
        />
      ))}
    </ul>
  );
}

AboutPage.propTypes = {
  setFocusAboutId: PropTypes.func.isRequired,
  focusAboutId: PropTypes.string,
  setSelectedAbout: PropTypes.func.isRequired,
  setSection: PropTypes.func.isRequired,
};

export default AboutPage;
