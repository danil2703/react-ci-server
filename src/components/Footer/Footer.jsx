import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

export const Footer = React.memo(() => (
  <footer className="footer">
    <div className="footer_container container">
      <nav className="footer_nav">
        <ul className="footer_ul">
          <li className="footer_nav-item">
            <Link className="footer_link" to="/">
              Support
            </Link>
          </li>
          <li className="footer_nav-item">
            <Link className="footer_link" to="/">
              Learning
            </Link>
          </li>
          <li className="footer_nav-item">
            <Link className="footer_link" to="/">
              Русская версия
            </Link>
          </li>
        </ul>
      </nav>
      <span className="footer_copirate">© 2021 Daniil Lyashenko</span>
    </div>
  </footer>
));
