import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = React.forwardRef(function Button(
  {
    children,
    ariaLabel = 'button',
    className = 'btn',
    onClick,
    id = '',
    disabled = false,
  },
  ref
) {
  return (
    <button
      id={id}
      aria-label={ariaLabel}
      className={className}
      onClick={() => {
        console.log('Button clicked');
        onClick();
      }}
      disabled={disabled}
      ref={ref}>
      <span>{children}</span>
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node,
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.displayName = 'Button';

export default Button;
