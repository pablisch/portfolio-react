import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './projectAndAboutPanel.css';
// import { useState } from 'react';

function AboutPanel({
  about,
  setFocusAboutId,
  focusAboutId,
  setSelectedAbout,
}) {
  const navigate = useNavigate();

  const handleHoverStart = (id) => {
    setFocusAboutId(id);
  };

  const handleHoverEnd = () => {
    setFocusAboutId('');
  };

  const handleClick = (about) => {
    setSelectedAbout(about);
    navigate(`/more-about-me/${about.id}`);
  };

  return (
    <li
      className='about-panel'
      onMouseOver={() => handleHoverStart(about.id)}
      onMouseLeave={handleHoverEnd}
      onClick={() => handleClick(about)}>
      <img
        src={`images/about-images/${about.img}`}
        alt={about.name}
        className='about-image'
      />
      <div className={`about-label ${focusAboutId === about.id && 'hover-fade'}`} >{about.panelName || about.name}</div>
      <div
        onClick={() => handleClick(about)}
        className={`about-overlay ${focusAboutId === about.id && 'hover-focus'}`}> {/* IF hover-focus is applied then overlay opacity === 1 */}
        {about.summary}
      </div>
    </li>
  );
}

AboutPanel.propTypes = {
  about: PropTypes.object.isRequired,
  setFocusAboutId: PropTypes.func.isRequired,
  focusAboutId: PropTypes.string.isRequired,
  setSelectedAbout: PropTypes.func.isRequired,
};

export default AboutPanel;
