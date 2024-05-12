import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './projectAndAboutPanel.css';
import { useTheme } from '../context/ThemeContext';

function AboutPanel({
  about,
  setFocusAboutId,
  focusAboutId,
  setSelectedAbout,
  isAvatarHovered,
}) {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleHoverStart = (id) => {
    setFocusAboutId(id);
  };

  const handleHoverEnd = () => {
    setFocusAboutId('');
  };

  const handleSelectAbout = (about) => {
    setSelectedAbout(about);
    navigate(`/more-about-me/${about.id}`);
  };

  return (
    <li
      className='about-panel'
      onMouseOver={() => handleHoverStart(about.id)}
      onMouseLeave={handleHoverEnd}
      onClick={() => handleSelectAbout(about)}>
      <img
        src={`images/about-images/${about.img}`}
        alt={about.name}
        className='about-image'
      />
      <div
        className={`about-label about-label-${theme} ${
          focusAboutId === about.id || isAvatarHovered ? 'hover-fade' : ''
        }`}>
        {about.panelName || about.name}
      </div>
      <div
        onClick={() => handleSelectAbout(about)}
        className={`about-overlay about-overlay-${theme} ${
          focusAboutId === about.id || isAvatarHovered ? 'hover-focus' : ''
        }`}>
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
  isAvatarHovered: PropTypes.bool.isRequired,
};

export default AboutPanel;
