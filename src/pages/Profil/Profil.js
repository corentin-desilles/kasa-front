import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from 'context';
import style from './Profil.module.scss';

function Profil() {
  const { user } = useContext(AuthContext);
  return (
    <div className={`${style.profilContainer} card p-20`}>
      <div className={`${style.profilCard} card p-20`}>
        <h3 className="mb-20">Page de profil</h3>
        <div>Username : {user.userName} </div>
        <div>Email : {user.email}</div>
        <div className={`${style.btnContainer}`}>
          <NavLink className="btn btn-primary" to="/admin">
            Admin
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Profil;
