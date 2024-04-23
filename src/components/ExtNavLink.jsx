import PropTypes from 'prop-types';

const ExtNavLink = ({
  page,
  isAvatarHovered,
  target = '_blank',
  context = 'normal',
}) => {

  const linkClass = context === 'hamburger' ? page.burgerClass : page.class;
  // console.log('linkClass', linkClass)
  // console.log('burgerClass', page.burgerClass)

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
};

export default ExtNavLink;
