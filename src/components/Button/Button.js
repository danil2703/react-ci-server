import React from 'react';
import './Button.scss';

export const Button = React.memo((props) => {
  const {
    color = 'primary',
    withIcon = false,
    size = 'big',
    className = '',
    disabled = false,
    children,
    onClick,
  } = props;

  return (
    <button
      className={`button button_color_${color} button_size_${size} ${
        withIcon && 'button_with-icon'
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
});
