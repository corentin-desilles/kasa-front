import style from './HeaderConnexion.module.scss';
import { Link, useLocation } from 'react-router-dom';

function HeaderConnexion() {
  const location = useLocation();
  return (
    <nav>
      <ul>
        <Link
          to="/connexion/register"
          className={
            location.pathname === '/connexion/register' ? `${style.active}` : ''
          }
        >
          <li className={`${style.link}`}>register</li>
        </Link>
        <Link
          to="/connexion/login"
          className={
            location.pathname === '/connexion/login' ? `${style.active}` : ''
          }
        >
          <li className={`${style.link}`}>login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default HeaderConnexion;
