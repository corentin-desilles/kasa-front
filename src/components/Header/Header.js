import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from 'assets/images/LOGO.png';
import { AuthContext } from 'context';
import './Header.module.scss';
import { useSetRecoilState } from 'recoil';
import { wishlistDisplayState } from 'state';

function Header() {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const setWishlistDisplay = useSetRecoilState(wishlistDisplayState);

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo Kasa" />
      </Link>
      <nav>
        <ul>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            <li className="style-link">Accueil</li>
          </Link>

          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            <li className="style-link">A Propos</li>
          </Link>

          {user ? (
            <>
              <Link
                to="/profil"
                className={location.pathname === '/profil' ? 'active' : ''}
              >
                <li className="style-link">Profil</li>
              </Link>

              <button
                onClick={() => setWishlistDisplay(true)}
                className="btn btn-reverse-primary ml-20"
              >
                <i className="fa-solid fa-heart mr-5"></i>
                <span>WishList</span>
              </button>

              <li onClick={() => logout()} className="style-link">
                Logout
              </li>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className={location.pathname === '/signup' ? 'active' : ''}
              >
                <li className="style-link">Signup</li>
              </Link>

              <Link
                to="/login"
                className={location.pathname === '/login' ? 'active' : ''}
              >
                <li className="style-link">Login</li>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
