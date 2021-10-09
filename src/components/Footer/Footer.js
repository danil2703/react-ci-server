import React from 'react';
import './Footer.scss';

export const Footer = React.memo(() => (
  <footer className="footer">
    <div className="footer_container container">
      <nav className="footer_nav">
        <ul className="footer_ul">
          <li className="footer_nav-item">
            <a className="footer_link" href="/">
              Support
            </a>
          </li>
          <li className="footer_nav-item">
            <a className="footer_link" href="/">
              Learning
            </a>
          </li>
          <li className="footer_nav-item">
            <a className="footer_link" href="/">
              Русская версия
            </a>
          </li>
        </ul>
      </nav>
      <span className="footer_copirate">© 2020 Your Name</span>
    </div>
  </footer>
));
