import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

export const Footer = React.memo(() => (
  <footer className="footer">
    <div className="footer__container container">
      <nav className="footer__nav">
        <ul className="footer__ul">
          <li className="footer__nav-item">
            <Link className="footer__link" to="/">
              Support
            </Link>
          </li>
          <li className="footer__nav-item">
            <Link className="footer__link" to="/">
              Learning
            </Link>
          </li>
          <li className="footer__nav-item">
            <Link className="footer__link" to="/">
              Русская версия
            </Link>
          </li>
        </ul>
      </nav>
      <span className="footer__copirate">© 2020 Your Name</span>
    </div>
  </footer>
));
