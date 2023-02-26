import { NavLink } from 'react-router-dom';
import style from './AdminLogementNav.module.scss';

function AdminLogementNav() {
  return (
    <div className={`${style.adminLogementNavContainer}`}>
      <NavLink to="/admin/logements/liste">Liste des logements</NavLink>
      <NavLink to="/admin/logements/add">Ajouter un logement</NavLink>
    </div>
  );
}
export default AdminLogementNav;
