import style from './Admin.module.scss';
import AddLogement from './components/AddLogement';
import LogementList from './components/LogementList';

function Admin() {
  return (
    <div className={`card b2 ${style.adminContainer} `}>
      <h1 className="mb-20">Admin</h1>
      <AddLogement />
      <LogementList />
    </div>
  );
}

export default Admin;
