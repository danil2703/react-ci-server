import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

export const Button = React.memo((props) => {
  const {
    type = 'button',
    color = 'primary',
    withIcon = false,
    size = 'lg',
    to = '',
    className = '',
    disabled = false,
    children,
    onClick,
  } = props;

  const buttonClass = `button button_color_${color} button_size_${size} ${withIcon ? 'button_with-icon' : ''} ${
    disabled ? 'disabled' : ''
  } ${className}`;

  return type === 'link' ? (
    <Link className={`button__link ${buttonClass}`} to={to}>
      {children}
    </Link>
  ) : (
    <button className={buttonClass} onClick={onClick} disabled={disabled} type="button">
      {children}
    </button>
  );
});
