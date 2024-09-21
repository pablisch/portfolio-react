import PropTypes from 'prop-types';
import { useTheme } from '../../context/ThemeContext';

const ExtNavLink = ({
  extLink,
  isAvatarHovered,
  target = '_blank',
  context = 'normal',
}) => {
  const { theme } = useTheme();

  const normalClasses = `${extLink.class.map((c) => c).join(' ')} ${extLink.class
    .map((c) => `${c}-${theme}`)
    .join(' ')}`;
  const burgerClasses = `${extLink.burgerClass
    .map((c) => c)
    .join(' ')} ${extLink.burgerClass.map((c) => `${c}-${theme}`).join(' ')}`;

  const imageClasses = `${extLink.img.class
    .map((c) => c)
    .join(' ')} ${extLink.img.class.map((c) => `${c}-${theme}`).join(' ')}`;

  const linkClass = context === 'hamburger' ? burgerClasses : normalClasses;

  return (
    <a
      href={extLink.url}
      id={`${extLink.name}-nav-btn`}
      className={`${linkClass} ${isAvatarHovered ? extLink.avatarClass : ''}`}
      target={target}
      rel='noreferrer'>
      <img
        src={`/images/${extLink.img.src}`}
        alt={extLink.img.alt}
        id={extLink.img.id}
        className={`${imageClasses} ${
          isAvatarHovered ? extLink.img.avatarClass : ''
        }`}
      />
    </a>
  );
};

ExtNavLink.propTypes = {
  extLink: PropTypes.object.isRequired,
  isAvatarHovered: PropTypes.bool,
  target: PropTypes.string,
  context: PropTypes.string,
};

export default ExtNavLink;
