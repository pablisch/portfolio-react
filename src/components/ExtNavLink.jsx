import PropTypes from 'prop-types';

const ExtNavLink = ({
  page,
  isAvatarHovered,
  target = '_blank',
  context = 'normal',
  theme,
}) => {

  const normalClasses = `${page.class.map((c) => c).join(' ')} ${page.class.map((c) => `${c}-${theme}`).join(' ')}`;
  const burgerClasses = `${page.burgerClass.map((c) => c).join(' ')} ${page.burgerClass.map((c) => `${c}-${theme}`).join(' ')}`;
  

  const linkClass = context === 'hamburger' ? burgerClasses : normalClasses;

  return (
    <a
      href={page.url}
      className={`${linkClass} ${isAvatarHovered ? page.avatarClass : ''}`}
      target={target}
      rel='noreferrer'>
      <img
        src={`/images/${page.img.src}`}
        alt={page.img.alt}
        className={`${page.img.class} ${
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
  theme: PropTypes.string,
};

export default ExtNavLink;
