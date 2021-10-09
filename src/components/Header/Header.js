import React from 'react';
import './Header.scss';

export const Header = React.memo((props) => {
  const { children, className } = props;

  return (
    <header className={`header ${className}`}>
      <div className="header_container container">{children}</div>
    </header>
  );
});
