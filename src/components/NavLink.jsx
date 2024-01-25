// import { useState } from 'react';
import PropTypes from 'prop-types';

function NavLink({ children, id, setFocusProjectId }) {

  const handleHoverStart = () => {
    setFocusProjectId(id);
  };

  const handleHoverEnd = () => {
    setFocusProjectId(null);
  };

  return (
    <div
      className='nav-btn nav-link'
      onMouseOver={handleHoverStart}
      onMouseLeave={handleHoverEnd}>
      {children}
    </div>
  );
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number.isRequired,
  setFocusProjectId: PropTypes.func.isRequired,
};

export default NavLink;
