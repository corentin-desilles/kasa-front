import { NavLink } from 'react-router-dom';
import style from './AdminNav.module.scss';

function AdminNav() {
  return (
    <div className={` d-flex flex-column ${style.adminNavContainer}`}>
      <NavLink className="style-link" to="/admin/logements">
        Logements
      </NavLink>
      <NavLink className="style-link" to="/admin/users">
        Utilisateurs
      </NavLink>
    </div>
  );
}

export default AdminNav;
