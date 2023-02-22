import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/LOGO.png';
import style from './Header.module.scss';

function Header() {
  const location = useLocation();

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo Kasa" />
      </Link>
      <nav>
        <ul>
          <Link
            to="/"
            className={location.pathname === '/' ? `${style.active}` : ''}
          >
            <li className={`${style.link}`}>Accueil</li>
          </Link>

          <Link
            to="/about"
            className={location.pathname === '/about' ? `${style.active}` : ''}
          >
            <li className={`${style.link}`}>A Propos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
