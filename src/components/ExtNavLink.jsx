import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../context/ContextProviders';

const ExtNavLink = ({
  page,
  isAvatarHovered,
  target = '_blank',
  context = 'normal',
}) => {
  const {theme} = useContext(ThemeContext)

  const normalClasses = `${page.class.map((c) => c).join(' ')} ${page.class.map((c) => `${c}-${theme}`).join(' ')}`;
  const burgerClasses = `${page.burgerClass.map((c) => c).join(' ')} ${page.burgerClass.map((c) => `${c}-${theme}`).join(' ')}`;

  const imageClasses = `${page.img.class.map((c) => c).join(' ')} ${page.img.class.map((c) => `${c}-${theme}`).join(' ')}`;
  

  const linkClass = context === 'hamburger' ? burgerClasses : normalClasses;

  return (
    <a
      href={page.url}
      id={`${page.name}-nav-btn`}
      className={`${linkClass} ${isAvatarHovered ? page.avatarClass : ''}`}
      target={target}
      rel='noreferrer'>
      <img
        src={`/images/${page.img.src}`}
        alt={page.img.alt}
        id={page.img.id}
        className={`${imageClasses} ${
          isAvatarHovered ? page.img.avatarClass : ''
        }`}
      />
    </a>
  );
};

ExtNavLink.propTypes = {
  page: PropTypes.object.isRequired,
  isAvatarHovered: PropTypes.bool,
  target: PropTypes.string,
  context: PropTypes.string,
};

export default ExtNavLink;
