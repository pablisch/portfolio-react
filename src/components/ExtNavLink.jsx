import PropTypes from 'prop-types';

const ExtNavLink = ({ page, isAvatarHovered, target = '_blank' }) => {

  return (
    <a
      href={page.url}
      className={`${page.class} ${isAvatarHovered ? page.avatarClass : ''}`}
      target={target}
      rel='noreferrer'>
      <img
        src={`images/${page.img.src}`}
        alt={page.img.alt}
        className={`${page.img.class} ${isAvatarHovered ? page.img.avatarClass : ''}`}
      />
    </a>
  )
}

ExtNavLink.propTypes = {
  page: PropTypes.object.isRequired,
  isAvatarHovered: PropTypes.bool,
  target: PropTypes.string,
}

export default ExtNavLink
