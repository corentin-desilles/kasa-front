import style from './Connexion.module.scss';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Connexion() {
  const location = useLocation();
  return (
    <div className={`${style.container}`}>
      <nav>
        <ul>
          <Link
            to="/connexion/register"
            className={
              location.pathname === '/connexion/register'
                ? `${style.active}`
                : ''
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

      <div className={`${style.formContainer}`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Connexion;
