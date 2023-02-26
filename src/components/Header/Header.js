import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/LOGO.png';
import { AuthContext } from '../../context';
import style from './Header.module.scss';

function Header() {
  const { user, logout } = useContext(AuthContext);
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

          {user ? (
            <>
              <Link
                to="/profil"
                className={
                  location.pathname === '/profil' ? `${style.active}` : ''
                }
              >
                <li className={`${style.link}`}>Profil</li>
              </Link>

              <li onClick={() => logout()} className={`${style.link}`}>
                Logout
              </li>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className={
                  location.pathname === '/signup' ? `${style.active}` : ''
                }
              >
                <li className={`${style.link}`}>Signup</li>
              </Link>

              <Link
                to="/login"
                className={
                  location.pathname === '/login' ? `${style.active}` : ''
                }
              >
                <li className={`${style.link}`}>Login</li>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
