import './Header.scss';
import Button from '../Button/Button';
import svg from '../../assets/icons/settings.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <a className="header__link" href="/">
          School CI server
        </a>
        <Button icon={svg} label="Settings" size="medium" />
      </div>
    </header>
  );
}

export default Header;
